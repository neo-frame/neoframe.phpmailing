import React from 'react';
import { Menu, X, Monitor, ShoppingBag, Laptop, Palette, Camera, Search, ChevronRight, ArrowRight, Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Webdesign & Entwicklung",
    description: "Massgeschneiderte Websites mit modernstem Design und optimaler Performance.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737577530/daniel-korpai-pKRNxEguRgM-unsplash_g6juct.jpg",
    id: "webdesign"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Online-Shops",
    description: "E-Commerce Lösungen, die Ihr Geschäft digital erfolgreich machen.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737577361/freepik-export-20250122201657Ckr3_ppjbbe.jpg",
    id: "online-shops"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Webapplikationen",
    description: "Individuelle Webanwendungen für Ihre spezifischen Geschäftsprozesse.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737576561/chris-ried-ieic5Tq8YMk-unsplash_qhppnt.jpg",
    id: "webapps"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Logo & Branding",
    description: "Einzigartige Markenidentitäten, die in Erinnerung bleiben.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737576871/freepik-export-20250122201415c78Z_ndvmpf.jpg",
    id: "branding"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Videografie & Fotografie",
    description: "Professionelle Medienproduktion für Ihren Webauftritt.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737576210/wesley-tingey-zq7z6XmJ0jM-unsplash_ewu0re.jpg",
    id: "media"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Google Ads",
    description: "Optimierte Online-Präsenz für maximale Sichtbarkeit.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737681120/3ebe55b5-aa17-4fc4-a030-bc5062b2592e.png",
    id: "seo"
  }
];

export function Home() {
  const [openFaqId, setOpenFaqId] = React.useState<string | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<number>();
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [currentService, setCurrentService] = React.useState(0);
  const [currentLocation, setCurrentLocation] = React.useState(0);
  const [isServiceChanging, setIsServiceChanging] = React.useState(false);
  const [isLocationChanging, setIsLocationChanging] = React.useState(false);
  const faqRef = React.useRef<HTMLDivElement>(null);
  const [isFaqVisible, setIsFaqVisible] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);

  const heroServices = ["Webdesign", "SEO", "Online-Marketing", "Online-Shops"];
  const heroLocations = ["Zürich", "Aargau", "Bern", "der Schweiz"];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  React.useEffect(() => {
    const handleLoaderDone = () => {
      setIsLoaderDone(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };

    window.addEventListener('loaderDone', handleLoaderDone);

    if (!document.querySelector('.loader-overlay')) {
      setIsLoaderDone(true);
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('loaderDone', handleLoaderDone);
    };
  }, []);

  React.useEffect(() => {
    const serviceInterval = setInterval(() => {
      setIsServiceChanging(true);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % heroServices.length);
        setIsServiceChanging(false);
      }, 300);
    }, 3000);

    const locationInterval = setInterval(() => {
      setIsLocationChanging(true);
      setTimeout(() => {
        setCurrentLocation((prev) => (prev + 1) % heroLocations.length);
        setIsLocationChanging(false);
      }, 300);
    }, 12000);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(locationInterval);
    };
  }, []);

  const partners = [
    {
      name: "bodyguardservices.ch",
      logo: "https://assets.zyrosite.com/Y4LVR5rb89cBJW67/bgs-logo-m2WajD9lg5UnEOQD.png",
      alt: "bodyguardservices.ch logo",
      size: "h-20"
    },
    {
      name: "exaktrent.ch",
      logo: "https://assets.zyrosite.com/Y4LVR5rb89cBJW67/exakt_rent_white_logo_transparent-AoPqlrjOvaS2LG1O.png",
      alt: "exaktrent.ch logo",
      size: "h-[150px]"
    },
    {
      name: "eco-glo.ch",
      logo: "https://assets.zyrosite.com/Y4LVR5rb89cBJW67/ecoglo_pure_white_logo_transparent-YyvZnbGyR4u5jevB.png",
      alt: "eco-glo.ch logo",
      size: "h-12"
    },
    {
      name: "eljammal-montageservice.ch",
      logo: "https://assets.zyrosite.com/Y4LVR5rb89cBJW67/image-removebg-preview-6-1-d957la0GW7HOVRyl.png",
      alt: "eljammal-montageservice.ch logo",
      size: "h-[88px]"
    },
    {
      name: "2raeder.ch",
      logo: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737677258/Zweir%C3%A4der_logo_schwarz__1_-1-removebg-preview_yr8xsy.png",
      alt: "2raeder.ch logo",
      size: "h-[120px]"
    },
    {
      name: "spitex-mobility.ch",
      logo: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1740278899/white_logo_transparent_jej6dh.png",
      alt: "Spitex Mobility logo",
      size: "h-[65px]"
    }
  ];

  const faqCategories = [
    {
      title: "Dienstleistungen & Preise",
      questions: [
        {
          id: "website-cost",
          question: "Was kostet eine professionelle Website mit SEO und ansprechendem Design?",
          answer: "Die Kosten für eine professionelle Website hängen von Ihren individuellen Anforderungen ab. Faktoren wie Design, Funktionalität, SEO-Optimierung und zusätzliche Features wie Online-Shops oder integrierte Webanwendungen beeinflussen den Preis. Kontaktieren Sie uns, um ein massgeschneidertes Angebot zu erhalten."
        },
        {
          id: "development-time",
          question: "Wie lange dauert es, eine Website mit modernen Features und responsive Design zu erstellen?",
          answer: "Die Dauer hängt vom Umfang des Projekts ab. Eine einfache Website mit responsive Design und Grundfunktionen kann in 3-4 Tagen umgesetzt werden. Umfangreichere Projekte wie Online-Shops oder webbasierte Anwendungen benötigen in der Regel 2-3 Wochen oder mehr."
        },
        {
          id: "seo-optimization",
          question: "Wird meine Website suchmaschinenoptimiert (SEO) sein?",
          answer: "Ja, wir achten darauf, dass Ihre Website suchmaschinenfreundlich ist. Dazu gehören die Optimierung von Ladezeiten, die Integration relevanter Keywords, mobile Optimierung sowie SEO-freundliche Inhalte und Metadaten, damit Sie in den Suchergebnissen besser sichtbar sind."
        }
      ]
    },
    {
      title: "Weitere Services",
      questions: [
        {
          id: "media-services",
          question: "Bieten Sie auch Fotografie und Videografie für Websites und Marketing an?",
          answer: "Ja, wir erstellen hochwertige Fotos und Videos, die perfekt auf Ihre Website oder Ihre Werbekampagnen abgestimmt sind. Ob Produktfotos, Unternehmensvideos oder Imagefilme – wir sorgen dafür, dass Ihre Marke visuell ansprechend präsentiert wird."
        },
        {
          id: "online-shop",
          question: "Können Sie einen Online-Shop erstellen, der benutzerfreundlich und sicher ist?",
          answer: "Ja, wir sind auf die Entwicklung moderner E-Commerce-Lösungen spezialisiert. Unsere Online-Shops sind benutzerfreundlich, mobil optimiert und bieten sichere Zahlungsmöglichkeiten, damit Ihre Kunden ein reibungsloses Einkaufserlebnis haben."
        },
        {
          id: "mobile-optimization",
          question: "Sind die von Ihnen erstellten Websites für mobile Geräte optimiert?",
          answer: "Ja, alle unsere Websites sind vollständig responsive, das heißt, sie passen sich automatisch an jedes Gerät an – egal ob Smartphone, Tablet oder Desktop. So bleibt Ihre Website immer benutzerfreundlich und ansprechend."
        },
        {
          id: "marketing-services",
          question: "Welche Marketing-Dienstleistungen bieten Sie an?",
          answer: "Wir bieten eine breite Palette an Marketing-Dienstleistungen an, darunter Google Ads, Social Media Marketing, SEO-Strategien und Content-Marketing. Mit unserer Unterstützung erhöhen Sie Ihre Sichtbarkeit, gewinnen mehr Kunden und steigern Ihre Conversion-Rate."
        }
      ]
    }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - containerWidth;
    const speed = 1;

    const animate = () => {
      setScrollPosition(prev => {
        let newPosition = prev + speed;
        if (newPosition >= maxScroll) {
          newPosition = 0;
        }
        scrollContainer.scrollLeft = newPosition;

        if (!isMobile) {
          const partnerElements = scrollContainer.children;
          const fadeZone = 100;

          Array.from(partnerElements).forEach((element) => {
            const rect = element.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();
            
            const distanceFromLeft = rect.left - containerRect.left;
            const distanceFromRight = containerRect.right - rect.right;
            
            let opacity = 1;
            if (distanceFromLeft < fadeZone) {
              opacity = distanceFromLeft / fadeZone;
            } else if (distanceFromRight < fadeZone) {
              opacity = distanceFromRight / fadeZone;
            }
            
            (element as HTMLElement).style.opacity = opacity.toString();
          });
        } else {
          Array.from(scrollContainer.children).forEach((element) => {
            (element as HTMLElement).style.opacity = '1';
          });
        }

        return newPosition;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFaqVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute inset-0"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              color: {
                value: "#feefde",
              },
              links: {
                color: "#feefde",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white flex flex-col gap-2">
                  <span 
                    className={`inline-block transition-all duration-500 transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } ${
                      isServiceChanging 
                        ? 'opacity-0 translate-y-2' 
                        : ''
                    }`}
                    style={{ transitionDelay: '0.2s' }}
                  >
                    {heroServices[currentService]}
                  </span>
                  <span 
                    className={`text-4xl md:text-5xl transition-all duration-500 transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0.4s' }}
                  >
                    für KMU und Startups
                  </span>
                  <span 
                    className={`inline-block transition-all duration-500 transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } ${
                      isLocationChanging 
                        ? 'opacity-0 translate-y-2' 
                        : ''
                    }`}
                    style={{ transitionDelay: '0.6s' }}
                  >
                    in {heroLocations[currentLocation]}
                  </span>
                </h1>
                <p 
                  className={`text-xl text-gray-400 mb-8 mt-6 transition-all duration-500 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '0.8s' }}
                >
                  Wir entwickeln massgeschneiderte Websites, Online-Shops und Strategien, um Ihr Unternehmen digital sichtbar zu machen und wachsen zu lassen.
                </p>
                <a 
                  href="/kontakt"
                  className={`inline-flex items-center px-8 py-4 bg-primary text-black rounded-full hover:bg-primary/90 transition-all duration-500 transform ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: '1s' }}
                >
                  Jetzt Kontakt aufnehmen <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-primary pt-20 pb-40">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 mb-48">
              <h2 className="text-3xl font-bold text-center text-black">Unsere Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              {services.map((service, index) => (
                <div key={index} className="relative group flex justify-center">
                  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="w-[320px] h-[320px] rounded-full bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center relative z-[1] transform transition-all duration-500 group-hover:scale-[1.15] group-hover:bg-white">
                    <div className="px-8 flex flex-col items-center opacity-100 transition-opacity duration-500 group-hover:opacity-100">
                      <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <a 
                        href={`/dienstleistungen#${service.id}`}
                        className="inline-flex items-center text-sm font-medium text-black hover:text-[#D5A15B] transition-colors"
                      >
                        Mehr erfahren <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full scale-110">
            <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="black"/>
          </svg>
        </div>
      </section>

      <section className="relative bg-black py-16 pb-40">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 px-4">Zufriedene Kunden</h2>
          <div 
            ref={scrollRef}
            className="flex overflow-hidden whitespace-nowrap"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className={`flex-none px-8 min-w-[250px] flex items-center justify-center ${
                  !isMobile ? 'transition-opacity duration-300' : ''
                }`}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className={`${partner.size} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full scale-110">
            <path d="M0 120C240 80 480 100 720 90C960 80 1200 40 1440 70V120H0V120Z" fill="#feefde"/>
          </svg>
        </div>
      </section>

      <section className="relative bg-primary py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start" ref={faqRef}>
            <div className="text-black lg:sticky lg:top-8">
              <h2 
                className={`text-5xl font-bold mb-8 transform transition-all duration-700 ${
                  isFaqVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Häufig gestellte Fragen
              </h2>
              <p 
                className={`text-xl mb-12 leading-relaxed transform transition-all duration-700 delay-200 ${
                  isFaqVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen. 
                Falls Sie weitere Fragen haben, kontaktieren Sie uns gerne.
              </p>
              <div 
                className={`relative w-80 mx-auto mt-12 transform transition-all duration-700 delay-400 ${
                  isFaqVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <img 
                  src="https://res.cloudinary.com/dcmug2qjf/image/upload/v1737741888/image-removebg-preview_13_acznfq.png"
                  alt="Question Mark"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className={`mb-8 transform transition-all duration-700 ${
                    isFaqVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(categoryIndex + 3) * 200}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-black">{category.title}</h3>
                  <div className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <div 
                        key={faq.id} 
                        className={`bg-transparent transform transition-all duration-700 ${
                          isFaqVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-10 opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: `${(categoryIndex * category.questions.length + faqIndex + 5) * 200}ms` 
                        }}
                      >
                        <button
                          className="w-full px-8 py-4 text-left flex justify-between items-center hover:bg-black/5 transition-colors rounded-2xl"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <span className="font-medium text-lg text-black">{faq.question}</span>
                          <span className="text-3xl font-light text-black">
                            {openFaqId === faq.id ? '−' : '+'}
                          </span>
                        </button>
                        {openFaqId === faq.id && (
                          <div className="px-8 py-4">
                            <p className="text-black/80 text-lg leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="contact-title text-3xl font-bold mb-6">Lassen Sie uns zusammenarbeiten</h2>
            <p className="contact-description text-gray-400 mb-8">
              Bereit, Ihr nächstes digitales Projekt zu starten? Kontaktieren Sie uns für ein 
              unverbindliches Gespräch.
            </p>
            <a 
              href="/kontakt"
              className="contact-button inline-flex items-center px-8 py-4 bg-primary text-black rounded-full hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}