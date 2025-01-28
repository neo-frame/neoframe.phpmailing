import React, { useEffect, useState } from 'react';

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loader is visible
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
      // Dispatch a custom event when the loader is done
      window.dispatchEvent(new Event('loaderDone'));
    }, 2000); // Hide after 2 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center loader-overlay p-0">
      <div className="relative">
        {/* SVG Filter */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
              <feColorMatrix
                values="1 0 0 0 0 
                        0 1 0 0 0 
                        0 0 1 0 0 
                        0 0 0 48 -7"
              />
            </filter>
          </defs>
        </svg>

        {/* Loader */}
        <div 
          className="w-48 h-12 relative overflow-hidden border-b-8 border-[#feefde]"
          style={{ filter: 'url(#goo)' }}
        >
          <div className="absolute w-[22em] h-[18em] bg-[#feefde] rounded-full -left-8 -bottom-[18em] animate-wee1" />
          <div className="absolute w-[16em] h-[12em] bg-[#feefde] rounded-full -left-16 -bottom-[12em] animate-wee2" />
        </div>
      </div>
    </div>
  );
}