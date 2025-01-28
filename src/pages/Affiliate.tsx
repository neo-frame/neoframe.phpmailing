import React from 'react';
import { ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

export function Affiliate() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isContentVisible, setIsContentVisible] = React.useState(false);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContentVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
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
              Partnerprogramm
            </h1>
            <p 
              className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Verdienen Sie CHF 100.- für jede erfolgreiche Vermittlung eines Website-Projekts.
              Werden Sie Teil unseres Partnernetzwerks und profitieren Sie von unserer Expertise.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-[#feefde]" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className={`text-3xl font-bold text-center mb-16 text-black transform transition-all duration-700 ${
              isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            So funktioniert's
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Empfehlen",
                description: "Empfehlen Sie neoframe an Ihr Netzwerk weiter. Nennen Sie uns einfach direkt als Kontakt."
              },
              {
                step: 2,
                title: "Projekt",
                description: "Sobald Ihr Kontakt ein Projekt mit uns startet und die Website erfolgreich umgesetzt wird, qualifizieren Sie sich für die Provision."
              },
              {
                step: 3,
                title: "Verdienen",
                description: "Sie erhalten CHF 100.- für jede erfolgreiche Vermittlung. Die Auszahlung erfolgt nach Projektabschluss und Zahlungseingang."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm transform transition-all duration-700 ${
                  isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-black text-[#feefde] rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Attraktive Provision",
                description: "CHF 100.- pro erfolgreicher Vermittlung, ohne Limit nach oben. Ab einer Projektgrösse von CHF 5000 kann der Provisonsbetrag erhöht werden."
              },
              {
                title: "Einfache Abwicklung",
                description: "Unkomplizierte Vermittlung und transparente Provisionszahlung."
              },
              {
                title: "Professionelle Betreuung",
                description: "Ihre Kontakte sind bei uns in besten Händen."
              },
              {
                title: "Keine Verpflichtungen",
                description: "Sie entscheiden selbst, wie aktiv Sie vermitteln möchten."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start"
              >
                <CheckCircle2 className="w-6 h-6 text-[#feefde] flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 bg-[#feefde]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-black">Bedingungen</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
            <div className="space-y-6">
              {[
                "Die Provision wird nur bei erfolgreicher Projektumsetzung und nach vollständigem Zahlungseingang ausgezahlt.",
                "Der vermittelte Kontakt darf in den letzten 6 Monaten nicht bereits mit uns in Verbindung gestanden haben.",
                "Die Vermittlung muss vor dem ersten Kontakt zwischen dem Interessenten und neoframe erfolgen.",
                "Die Provision gilt für alle Website-Projekte, es gibt kein Mindestvolumen."
              ].map((term, index) => (
                <div key={index} className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-[#000000] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-600">{term}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Jetzt Partner werden</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute und verdienen Sie mit jeder erfolgreichen Vermittlung.
          </p>
          <a 
            href="mailto:kontakt@neoframe.ch?subject=Partnerprogramm%20Anfrage"
            className="inline-flex items-center px-8 py-4 bg-[#feefde] text-black rounded-full hover:bg-[#feefde]/90 transition-colors"
          >
            Partner werden <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}