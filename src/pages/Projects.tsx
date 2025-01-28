import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "bodyguardservices.ch",
    category: "Website & Print",
    description: "Professionelle Website für Sicherheitsdienstleistungen mit modernem Design und benutzerfreundlicher Navigation. Zusätzlich Gestaltung von Flyern für effektive Offline-Präsenz.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737684905/ea5a8af8-4dbc-42b7-830c-b90df40df816.png",
    tags: ["Website", "Flyer"],
    url: "https://bodyguardservices.ch"
  },
  {
    title: "exaktrent.ch",
    category: "Full-Service",
    description: "Umfassende digitale und Print-Präsenz für eine Lieferwagenvermietung. Von der Website über das Logo bis hin zu Printmedien und digitalem Marketing.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737685018/09f82738-f1ef-4a40-9c9e-b6e24aaf59af.png",
    tags: ["Website", "Logo", "Flyer", "Visitenkarten", "Google Ads"],
    url: "https://exaktrent.ch"
  },
  {
    title: "eljammal-montageservice.ch",
    category: "Website & Branding",
    description: "Entwicklung einer professionellen Online-Präsenz inklusive Logodesign für einen Montageservice. Fokus auf klare Kommunikation und starke visuelle Identität.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737685255/ffc56964-4fa2-4c99-92b6-5b9b9aee85e9.png",
    tags: ["Website", "Logo"],
    url: "https://eljammal-montageservice.ch"
  },
  {
    title: "eco-glo.ch",
    category: "Website & Print",
    description: "Nachhaltige Website-Lösung kombiniert mit effektiven Printmaterialien. Ganzheitlicher Ansatz für maximale Markenwahrnehmung.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737685193/f1d35314-bc42-4dea-b3e2-15bd89bd01e7.png",
    tags: ["Website", "Flyer"],
    url: "https://eco-glo.ch"
  },
  {
    title: "2raeder.ch",
    category: "Full-Service",
    description: "Komplette Markenentwicklung für einen Zweirad-Spezialisten. Von der Website über das Logo bis hin zu professionellen Geschäftsdrucksachen.",
    image: "https://res.cloudinary.com/dcmug2qjf/image/upload/v1737685576/fdf1422e-3092-499d-bfe4-af2900fdcff1.png",
    tags: ["Website", "Logo", "Visitenkarten"],
    url: "https://2raeder.ch"
  }
];

export function Projects() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const [isProjectsVisible, setIsProjectsVisible] = React.useState(false);

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
            setIsProjectsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#feefde]/10" />
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(254, 239, 222, 0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(254, 239, 222, 0.3) 0%, transparent 70%)' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Unsere Projekte
            </h1>
            <p 
              className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Entdecken Sie eine Auswahl unserer erfolgreich realisierten Projekte.
              Von modernen Websites über komplettes Branding bis hin zu Print-Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 transform ${
                  isProjectsVisible 
                    ? 'translate-y-0 opacity-100 hover:shadow-2xl hover:scale-[1.02]' 
                    : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover - Hidden on mobile, shown on desktop */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#feefde] hover:text-white transition-colors"
                      >
                        Website besuchen <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <span className="inline-block text-sm bg-[#feefde] text-black px-3 py-1 rounded-full sm:ml-auto">
                      {project.category}
                    </span>
                  </div>
                  {/* Mobile-only description */}
                  <p className="md:hidden text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Mobile tag display - Now showing all tags */}
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:ml-auto flex-shrink-0 w-12 h-12 rounded-full bg-[#feefde]/10 flex items-center justify-center group-hover:bg-[#feefde] transition-colors duration-500"
                    >
                      <ExternalLink className="w-5 h-5 text-[#feefde] group-hover:text-black transition-colors duration-500" />
                    </a>
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
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr eigenes Projekt?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
          </p>
          <a 
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-[#feefde] text-black rounded-full hover:bg-[#feefde]/90 transition-colors"
          >
            Projekt starten
          </a>
        </div>
      </section>
    </div>
  );
}