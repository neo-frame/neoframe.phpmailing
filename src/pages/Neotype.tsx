import React from 'react';
import { ExternalLink, Code, Blocks, Sparkles, Laptop, Lightbulb, ArrowUpRight } from 'lucide-react';

const prototypes = [
  {
    category: "Enterprise Solutions",
    icon: <Laptop className="w-8 h-8" />,
    items: [
      {
        title: "Mieterportal",
        description: "Ein benutzerfreundliches Mieterportal mit integriertem Newsfeed, Case-Management und KI-gestütztem Support-Chat.",
        tags: ["React", "Node.js", "AI", "Case Management"],
        image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737730506/94874_1_ha3vcp.jpg",
        status: "Live Demo",
        url: "https://mieterportal-neotype.netlify.app/"
      },
      {
        title: "CRM System",
        description: "Customer Relationship Management System mit Konktakmanagement und Deal Tracking.",
        tags: ["React", "TypeScript", "Real-time", "Analytics"],
        image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737730688/arlington-research-kN_kViDchA0-unsplash_txkifn.jpg",
        status: "Live Demo",
        url: "https://neotypecrm.netlify.app/"
      }
    ]
  },
  {
    category: "Coming Soon",
    icon: <Lightbulb className="w-8 h-8" />,
    items: [
      {
        title: "AI Content Assistant",
        description: "Experimentelles KI-Tool für automatisierte Content-Erstellung und Textoptimierung.",
        tags: ["OpenAI", "React", "Node.js"],
        image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737730783/ea06259c-c086-4425-804f-47a6a57ef9f3.png",
        status: "In Entwicklung"
      },
      {
        title: "Smart Analytics Dashboard",
        description: "Intelligentes Analytics-Dashboard mit KI-gestützten Insights und Echtzeit-Datenvisualisierung.",
        tags: ["Analytics", "AI", "Data Visualization"],
        image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737729025/luke-chesser-JKUTrJ4vK00-unsplash_haqr67.jpg",
        status: "Konzept"
      }
    ]
  }
];

export function Neotype() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);
  const prototypesRef = React.useRef<HTMLDivElement>(null);
  const [isPrototypesVisible, setIsPrototypesVisible] = React.useState(false);

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
            setIsPrototypesVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (prototypesRef.current) {
      observer.observe(prototypesRef.current);
    }

    return () => {
      if (prototypesRef.current) {
        observer.unobserve(prototypesRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#feefde]/10" />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#feefde] to-[#d5a15b]">neo</span>type
            </h1>
            <p 
              className={`text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Entdecken Sie unsere innovativen digitalen Lösungen. 
              Von intelligenten Portalen bis zu modernen Business-Tools – 
              wir entwickeln die Webapp's von morgen.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(254, 239, 222, 0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(254, 239, 222, 0.3) 0%, transparent 70%)' }}
        />
      </section>

      {/* Prototypes Grid */}
      <section className="py-20" ref={prototypesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {prototypes.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`mb-20 transform transition-all duration-700 ${
                isPrototypesVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="text-[#feefde]">{category.icon}</div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 transform ${
                      isPrototypesVisible 
                        ? 'translate-y-0 opacity-100 hover:shadow-2xl hover:scale-[1.02]' 
                        : 'translate-y-16 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * category.items.length + itemIndex + 1) * 200}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover - Hidden on mobile, shown on desktop */}
                      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-sm mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {item.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {item.url && (
                            <a 
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#feefde] hover:text-white transition-colors"
                            >
                              Demo öffnen <ArrowUpRight className="ml-2 w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          item.status === 'Live Demo' 
                            ? 'bg-[#feefde] text-black'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      {/* Mobile-only description */}
                      <p className="md:hidden text-sm text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {item.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="text-sm text-gray-600"
                            >
                              {tag}{tagIndex < Math.min(2, item.tags.length) - 1 && " • "}
                            </span>
                          ))}
                          {item.tags.length > 2 && (
                            <span className="text-sm text-gray-600">
                              +{item.tags.length - 2}
                            </span>
                          )}
                        </div>
                        {item.url && (
                          <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-[#feefde]/10 flex items-center justify-center group-hover:bg-[#feefde] transition-colors duration-500"
                          >
                            <ArrowUpRight className="w-5 h-5 text-[#feefde] group-hover:text-black transition-colors duration-500" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Interessiert an Innovationen?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die Grenzen der Web-Entwicklung erkunden und neue digitale Erlebnisse schaffen.
          </p>
          <a 
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-[#feefde] text-black rounded-full hover:bg-[#feefde]/90 transition-colors"
          >
            Kontaktieren Sie unser Lab-Team <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}