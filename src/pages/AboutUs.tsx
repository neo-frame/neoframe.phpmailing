import React from 'react';
import { Target, Award, Users, Rocket, ChevronRight } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation",
    description: "Wir denken voraus und setzen auf zukunftsweisende Technologien und Lösungen."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Qualität",
    description: "Höchste Standards in Design, Entwicklung und Kundenservice sind unser Anspruch."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Partnerschaft",
    description: "Wir sehen uns als langfristigen Partner unserer Kunden auf dem Weg zum digitalen Erfolg."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Wachstum",
    description: "Wir wachsen gemeinsam mit unseren Kunden und entwickeln uns stetig weiter."
  }
];

export function AboutUs() {
  const logoRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);

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
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
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
              Digitale Visionen verwirklichen
            </h1>
            <p 
              className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Als innovative Digitalagentur verbinden wir kreatives Design mit technischer Exzellenz. 
              Gemeinsam gestalten wir die digitale Zukunft unserer Kunden.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-[#feefde]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  {/* SVG Logo with animation */}
                  <div 
                    ref={logoRef}
                    className="logo-container w-full h-full flex items-center justify-center"
                  >
                    <svg width="284.9699195673648" height="237.59999999999997" viewBox="0 0 350 291.82027396523716" className="w-full h-full">
                      <defs id="SvgjsDefs1381"></defs>
                      <g id="SvgjsG1382" featurekey="monogramFeature-0" transform="matrix(21.875,0,0,21.875,110,-218.75)" fill="#000000">
                        <path d="M4 20 l2 0 l0 -10 l-6 0 l0 10 l2 0 l0 -8 l2 0 l0 8 z"></path>
                      </g>
                      <g id="SvgjsG1383" featurekey="Ua4uQk-0" transform="matrix(3.632756128185408,0,0,3.632756128185408,-3.705410315343238,218.43859740431895)" fill="#000000">
                        <path d="M7.4 9.44 c1.94 0 3.92 1.3 3.92 4.6 l0 5.96 l-3.16 0 l0 -5.74 c0 -1.58 -0.54 -2.08 -1.54 -2.08 c-1.42 0 -2.24 1.38 -2.44 1.98 l0 5.84 l-3.16 0 l0 -10.4 l3.16 0 l0 1.8 c0.2 -0.5 1.26 -1.96 3.22 -1.96 z M18.4 9.42 c2.36 0 5.66 1.78 5 6.48 l-7.26 0 c0.36 1.08 1.3 1.64 2.56 1.64 c1.28 0 1.68 -0.28 2.4 -0.58 l1.74 1.68 c-0.92 0.9 -2.16 1.56 -4.26 1.56 c-2.58 0 -5.66 -1.78 -5.66 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M18.4 12.120000000000001 c-0.9 0 -1.82 0.52 -2.22 1.56 l4.42 0 c-0.32 -1.04 -1.3 -1.56 -2.2 -1.56 z M30.36 9.42 c2.36 0 5.48 1.78 5.48 5.42 c0 3.66 -3.12 5.36 -5.48 5.36 s-5.48 -1.7 -5.48 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M30.36 12.2 c-1.2 0 -2.42 0.92 -2.42 2.64 c0 1.66 1.22 2.58 2.42 2.58 s2.44 -0.92 2.44 -2.58 c0 -1.72 -1.24 -2.64 -2.44 -2.64 z M42.42 8.26 c-0.9 0 -0.88 0.82 -0.88 1.02 l0 0.32 l2.16 0 l0 2.6 l-2.16 0 l0 7.8 l-3.18 0 l0 -7.8 l-1.42 0 l0 -2.6 l1.42 0 l0 -0.32 c0 -3.22 2.42 -3.62 3.68 -3.62 c1 0 1.98 0.22 2.72 0.7 l-1.06 2.18 c-0.58 -0.22 -0.8 -0.28 -1.28 -0.28 z M52.00000000000001 9.44 c0.28 0 0.56 0 0.82 0.06 l0 3.02 c-0.24 -0.06 -0.52 -0.06 -0.72 -0.06 c-1.92 0 -3.46 1.38 -3.62 3.3 l0 4.24 l-3.16 0 l0 -10.4 l3.16 0 l0 2.54 c0.48 -1.56 1.68 -2.7 3.52 -2.7 z M61.92 9.6 l3.16 0 l0 10.4 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -0.96 z M59.7 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M81.02 9.44 c2.22 0 4.18 1.44 4.18 4.96 l0 5.6 l-3.16 0 l0 -5.5 c0 -1.32 -0.56 -2.32 -2.02 -2.32 c-1.22 0 -2.04 1.08 -2.28 2.04 l0 5.78 l-3.16 0 l0 -5.5 c0 -1.32 -0.82 -2.32 -2.02 -2.32 c-1.3 0 -2.08 0.88 -2.28 2.04 l0 5.78 l-3.16 0 l0 -10.4 l3.16 0 l0 1.9 c0.04 -0.48 1.06 -2.06 3.1 -2.06 c1.5 0 2.94 0.8 3.8 2.26 c0.24 -0.56 1.44 -2.26 3.84 -2.26 z M92.28 9.42 c2.36 0 5.66 1.78 5 6.48 l-7.26 0 c0.36 1.08 1.3 1.64 2.56 1.64 c1.28 0 1.68 -0.28 2.4 -0.58 l1.74 1.68 c-0.92 0.9 -2.16 1.56 -4.26 1.56 c-2.58 0 -5.66 -1.78 -5.66 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M92.28 12.120000000000001 c-0.9 0 -1.82 0.52 -2.22 1.56 l4.42 0 c-0.32 -1.04 -1.3 -1.56 -2.2 -1.56 z"></path>
                      </g>
                    </svg>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-black rounded-2xl -z-10 opacity-10"></div>
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-black rounded-2xl -z-10 opacity-5"></div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-black">Unsere Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Wir streben danach, die führende Digitalagentur der Schweiz zu sein, die durch
                  innovative Lösungen und exzellentes Design digitale Erlebnisse schafft, die begeistern
                  und Unternehmen nachhaltig erfolgreich machen.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-black">Unsere Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Jeden Tag arbeiten wir daran, unseren Kunden durch massgeschneiderte digitale Lösungen
                  einen echten Mehrwert zu bieten. Wir verbinden dabei technische Innovation mit
                  kreativem Design und strategischer Beratung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flip-card-container h-[300px]"
              >
                <div className="flip-card">
                  {/* Front of card */}
                  <div className="flip-card-front bg-dark-200 p-8 rounded-2xl">
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="text-[#feefde] mb-6 transform transition-transform duration-300 group-hover:scale-110">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="flip-card-back bg-[#feefde] p-8 rounded-2xl">
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <h3 className="text-xl font-bold mb-4 text-black">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#feefde]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Bereit für Ihren digitalen Erfolg?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen und Ihr Unternehmen in die Zukunft führen.
          </p>
          <a 
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-colors text-lg"
          >
            Kontaktieren Sie uns <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}