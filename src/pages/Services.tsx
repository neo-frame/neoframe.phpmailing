import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Webdesign & Entwicklung",
    description: "Kreative Designs, die Marken zum Leben erwecken. Wir entwickeln moderne, responsive Websites mit Fokus auf Benutzerfreundlichkeit und Performance. Unser Team verbindet ästhetisches Design mit technischer Exzellenz, um Ihre Online-Präsenz optimal zu gestalten.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737577530/daniel-korpai-pKRNxEguRgM-unsplash_g6juct.jpg",
    features: [
      "Responsive Webdesign",
      "Content Management Systeme",
      "Performance Optimierung",
      "Barrierefreie Websites"
    ],
    colors: {
      primary: "bg-[#feefde]",
      secondary: "bg-[#f5e1c7]"
    },
    id: "webdesign"
  },
  {
    title: "Online-Shops",
    description: "Benutzerfreundliche und verkaufsstarke E-Commerce-Lösungen. Wir erstellen Online-Shops, die Ihre Produkte optimal präsentieren und den Verkaufsprozess für Ihre Kunden so einfach wie möglich gestalten.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737577361/freepik-export-20250122201657Ckr3_ppjbbe.jpg",
    features: [
      "Individuelle Shop-Systeme",
      "Zahlungsintegration",
      "Produktkatalog-Management",
      "Lager- und Bestellverwaltung"
    ],
    colors: {
      primary: "bg-[#2a2a2a]",
      secondary: "bg-[#363636]"
    },
    id: "online-shops"
  },
  {
    title: "Webapplikationen",
    description: "Maßgeschneiderte digitale Tools für Unternehmen. Wir entwickeln individuelle Webapplikationen, die Ihre Geschäftsprozesse optimieren und digitalisieren. Von internen Tools bis hin zu kundenorientierten Plattformen.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/c_crop,ar_4:3/v1737576561/chris-ried-ieic5Tq8YMk-unsplash_qhppnt.jpg",
    features: [
      "Kundenportale",
      "Buchungssysteme",
      "Datenbankanwendungen",
      "API-Entwicklung"
    ],
    colors: {
      primary: "bg-[#feefde]",
      secondary: "bg-[#f5e1c7]"
    },
    id: "webapps",
    link: {
      text: "Entdecken Sie unsere neotype Projekte",
      url: "/neotype"
    }
  },
  {
    title: "Logo & Branding",
    description: "Einzigartiges Branding, das Ihre Identität widerspiegelt. Wir entwickeln durchdachte Markenidentitäten, die Ihr Unternehmen von der Konkurrenz abheben und einen bleibenden Eindruck hinterlassen.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737576871/freepik-export-20250122201415c78Z_ndvmpf.jpg",
    features: [
      "Logo-Design",
      "Corporate Identity",
      "Geschäftsausstattung",
      "Brand Guidelines"
    ],
    colors: {
      primary: "bg-[#2a2a2a]",
      secondary: "bg-[#363636]"
    },
    id: "branding"
  },
  {
    title: "Videografie & Fotografie",
    description: "Hochwertige Inhalte für Websites und Kampagnen. Professionelle Foto- und Videoaufnahmen, die Ihre Botschaft visuell verstärken und Ihre Zielgruppe emotional ansprechen.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737576210/wesley-tingey-zq7z6XmJ0jM-unsplash_ewu0re.jpg",
    features: [
      "Produktfotografie",
      "Imagefilme",
      "Luftaufnahmen",
      "360° Panoramen"
    ],
    colors: {
      primary: "bg-[#feefde]",
      secondary: "bg-[#f5e1c7]"
    },
    id: "media"
  },
  {
    title: "SEO & Google Ads",
    description: "Optimierung und Werbung für maximale Sichtbarkeit. Wir steigern Ihre Online-Präsenz durch gezielte Suchmaschinenoptimierung und effektive Werbekampagnen.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737681120/3ebe55b5-aa17-4fc4-a030-bc5062b2592e.png",
    features: [
      "Keyword-Optimierung",
      "Content-Strategie",
      "Performance Marketing",
      "Analytics & Reporting"
    ],
    colors: {
      primary: "bg-[#2a2a2a]",
      secondary: "bg-[#363636]"
    },
    id: "seo"
  }
];

export function Services() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const [isServicesVisible, setIsServicesVisible] = React.useState(false);

  React.useEffect(() => {
    // Listen for loader done event
    const handleLoaderDone = () => {
      setIsLoaderDone(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };

    window.addEventListener('loaderDone', handleLoaderDone);

    // If no loader, show animations immediately
    if (!document.querySelector('.loader-overlay')) {
      setIsLoaderDone(true);
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('loaderDone', handleLoaderDone);
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServicesVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    // Scroll to the service section if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Unsere Dienstleistungen
          </h1>
          <p 
            className={`text-xl text-gray-300 max-w-3xl transition-all duration-700 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Von der Konzeption bis zur Umsetzung bieten wir Ihnen alle digitalen Services aus einer Hand.
            Entdecken Sie unsere umfassenden Lösungen für Ihren digitalen Erfolg.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className={`group relative ${service.colors.primary} rounded-[3rem] overflow-hidden transition-all duration-700 transform ${
                  isServicesVisible 
                    ? 'translate-y-0 opacity-100 hover:scale-[1.02]' 
                    : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Decorative Circles */}
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-50 transform rotate-45 transition-transform duration-500 group-hover:rotate-90"
                  style={{ background: `linear-gradient(135deg, ${service.colors.primary === 'bg-[#feefde]' ? '#f5e1c7' : '#363636'} 0%, transparent 60%)` }}
                ></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-30 transform -rotate-45 transition-transform duration-500 group-hover:rotate-90"
                  style={{ background: `linear-gradient(135deg, ${service.colors.primary === 'bg-[#feefde]' ? '#f5e1c7' : '#363636'} 0%, transparent 60%)` }}
                ></div>

                <div className="relative p-8 md:p-16 lg:p-24">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Conditionally order the image and content based on the theme */}
                    <div className={`relative flex items-center justify-center ${service.colors.primary === 'bg-[#2a2a2a]' ? 'order-first' : 'md:order-last'}`}>
                      <div className="w-full">
                        {/* Image container with fixed aspect ratio */}
                        <div className="relative w-full pb-[75%]">
                          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`relative z-10 ${service.colors.primary === 'bg-[#2a2a2a]' ? 'order-last' : 'md:order-first'}`}>
                      <h2 className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${service.colors.primary === 'bg-[#feefde]' ? 'text-black' : 'text-white'}`}>
                        {service.title}
                      </h2>
                      <p className={`text-base md:text-lg leading-relaxed mb-6 md:mb-8 ${service.colors.primary === 'bg-[#feefde]' ? 'text-gray-700' : 'text-gray-300'}`}>
                        {service.description}
                      </p>
                      <div className="space-y-3 md:space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className={`flex items-center space-x-3 ${service.colors.secondary} rounded-full px-4 md:px-6 py-2 md:py-3 transition-transform duration-300 hover:translate-x-2`}
                          >
                            <div className={`w-2 h-2 rounded-full ${service.colors.primary === 'bg-[#feefde]' ? 'bg-black' : 'bg-[#feefde]'}`}></div>
                            <span className={`text-base md:text-lg ${service.colors.primary === 'bg-[#feefde]' ? 'text-gray-700' : 'text-gray-300'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      {service.link && (
                        <Link 
                          to={service.link.url}
                          className={`inline-flex items-center mt-8 space-x-2 text-base md:text-lg font-medium ${
                            service.colors.primary === 'bg-[#feefde]' ? 'text-black hover:text-black/70' : 'text-white hover:text-white/70'
                          } transition-colors`}
                        >
                          <span>{service.link.text}</span>
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr nächstes Projekt?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.
          </p>
          <a 
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-[#feefde] text-black rounded-full hover:bg-[#feefde]/90 transition-colors"
          >
            Kontaktieren Sie uns <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}