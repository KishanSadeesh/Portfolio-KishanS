import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const START_FRAME = 60;
const FRAME_PREFIX = '/ezgif-15298007727ebebc-jpg/ezgif-frame-';
const FRAME_EXT = '.jpg';

const getFramePath = (index) => {
  const num = String(index + 1).padStart(3, '0');
  return `${FRAME_PREFIX}${num}${FRAME_EXT}`;
};

const Hero = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [activeState, setActiveState] = useState(0);
  
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(START_FRAME);
  const targetFrameRef = useRef(START_FRAME);
  const lastRenderedFrameRef = useRef(-1);
  const reqRef = useRef(null);

  useEffect(() => {
    let loaded = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (i === START_FRAME && lastRenderedFrameRef.current === -1) {
          drawFrame(img);
          lastRenderedFrameRef.current = START_FRAME;
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      imagesRef.current.push(img);
    }
  }, []);

  const drawFrame = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderHeight = canvasHeight;
      renderWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    const frame = Math.round(currentFrameRef.current);
    if (imagesRef.current[frame]?.complete) drawFrame(imagesRef.current[frame]);
  };

  const handleScroll = () => {
    if (!heroRef.current) return;
    const scrollY = window.scrollY;
    const heroStart = heroRef.current.offsetTop;
    const heroHeight = heroRef.current.offsetHeight - window.innerHeight;
    
    let scrollFraction = 0;
    if (scrollY >= heroStart) {
      scrollFraction = (scrollY - heroStart) / heroHeight;
    }
    scrollFraction = Math.max(0, Math.min(1, scrollFraction));
    
    targetFrameRef.current = START_FRAME + scrollFraction * (TOTAL_FRAMES - 1 - START_FRAME);
    
    let stateIndex = Math.floor(scrollFraction / 0.2);
    if (stateIndex > 4) stateIndex = 4;
    setActiveState(stateIndex);
  };

  const animate = () => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.001) {
      currentFrameRef.current += diff * 0.08;
    } else {
      currentFrameRef.current = targetFrameRef.current;
    }

    const roundedFrame = Math.round(currentFrameRef.current);
    if (roundedFrame !== lastRenderedFrameRef.current && imagesRef.current[roundedFrame]?.complete) {
      drawFrame(imagesRef.current[roundedFrame]);
      lastRenderedFrameRef.current = roundedFrame;
    }

    reqRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  const textStates = [
    { title: 'Kishan S' },
    { title: 'Building Intelligent\nDigital Experiences' },
    { title: 'From ideas to\nintelligent systems' },
    { title: 'Full Stack Developer,\nAI Integration Engineer' },
    { title: 'Scroll on to\nsee the work.' }
  ];

  return (
    <section ref={heroRef} className="relative w-full h-[400vh]">
      {loadedCount < TOTAL_FRAMES && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
          <div className="w-64 h-px bg-white/10">
            <div 
              className="h-full bg-white transition-all duration-100 ease-out" 
              style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
            />
          </div>
        </div>
      )}
      
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
        
        <div className="absolute inset-0 z-10 pointer-events-none">
          {textStates.map((state, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full px-6 md:px-20 flex flex-col justify-center transition-all duration-700 ease-out ${
                activeState === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="max-w-3xl text-left pointer-events-auto">
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter whitespace-pre-line drop-shadow-lg">
                  {state.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
