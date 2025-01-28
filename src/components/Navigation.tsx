import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const [isOverLight, setIsOverLight] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const checkSection = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      let foundLightSection = false;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Check if the navigation (with offset) is within this section
        if (sectionTop <= 100 && sectionBottom >= 100) {
          // For services page, check the direct children for background color
          if (location.pathname === '/dienstleistungen') {
            const serviceElements = section.querySelectorAll('.bg-\\[\\#feefde\\]');
            foundLightSection = Array.from(serviceElements).some(element => {
              const elementRect = element.getBoundingClientRect();
              return elementRect.top <= 100 && elementRect.bottom >= 100;
            });
          } else {
            // For other pages, check the section's background color
            const computedStyle = window.getComputedStyle(section);
            const backgroundColor = computedStyle.backgroundColor;
            foundLightSection = 
              backgroundColor.includes('254, 239, 222') || // RGB value
              backgroundColor.includes('rgb(254, 239, 222)') || // RGB format
              section.classList.contains('bg-[#feefde]') || // Tailwind class
              section.classList.contains('bg-primary'); // Primary color class
          }
          break;
        }
      }

      setIsOverLight(foundLightSection);
    };

    // Add a small delay for initial check to ensure DOM is ready
    setTimeout(() => {
      checkSection();
    }, 100);

    window.addEventListener('scroll', checkSection);
    window.addEventListener('resize', checkSection);

    // Also check when route changes
    checkSection();

    return () => {
      window.removeEventListener('scroll', checkSection);
      window.removeEventListener('resize', checkSection);
    };
  }, [location.pathname]);

  return (
    <>
      {/* Fixed Header */}
      <header className={`fixed w-full z-50 p-6 transition-all duration-300`}>
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)} 
            className="relative z-50"
          >
            <img 
              src={isMenuOpen || isOverLight 
                ? "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737570362/Neoframe_Logo_Hostinger-removebg-preview_2_xkb0d4.png"
                : "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737570382/Neoframe_Logo_Hostinger-removebg-preview_1_vttep0.png"
              }
              alt="neoframe"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>
          
          <button 
            className={`relative z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isOverLight ? 'bg-black hover:bg-black/90' : 'bg-[#feefde] hover:bg-[#feefde]/90'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block h-0.5 w-6 transition-all duration-300 ease-out ${
                  isOverLight ? 'bg-[#feefde]' : 'bg-black'
                } ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}
              />
              <span 
                className={`block h-0.5 transition-all duration-300 ease-out ${
                  isOverLight ? 'bg-[#feefde]' : 'bg-black'
                } ${isMenuOpen ? 'w-0' : 'w-6'}`}
              />
              <span 
                className={`block h-0.5 w-6 transition-all duration-300 ease-out ${
                  isOverLight ? 'bg-[#feefde]' : 'bg-black'
                } ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div 
        className={`fixed inset-0 bg-[#feefde] origin-top transition-transform duration-500 ease-in-out z-40 ${
          isMenuOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <div className="h-screen flex items-center justify-center">
          <div className="text-center space-y-6 md:space-y-12">
            <Link 
              to="/ueber-uns" 
              className="block text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              to="/dienstleistungen" 
              className="block text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Dienstleistungen
            </Link>
            <Link 
              to="/projekte" 
              className="block text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Projekte
            </Link>
            <Link 
              to="/neotype" 
              className="block text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Neotype
            </Link>
            <Link 
              to="/blog" 
              className="block text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/kontakt" 
              className="block text-3xl md:text-5xl font-bold text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}