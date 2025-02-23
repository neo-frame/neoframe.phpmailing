import React from 'react';
import { MapPin, Mail, Phone, Check, X } from 'lucide-react';

const services = [
  "Webdesign & Entwicklung",
  "Online-Shops",
  "Webapplikationen", 
  "Logo & Branding",
  "Videografie & Fotografie",
  "SEO & Google Ads"
];

export function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    service: '',
    message: '',
    antiRobot: false,
    termsAccepted: false
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaderDone, setIsLoaderDone] = React.useState(false);
  const formRef = React.useRef<HTMLDivElement>(null);
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({
    message: ''
  });
  const [submitError, setSubmitError] = React.useState('');

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
            setIsFormVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const isFormValid = React.useMemo(() => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.company.trim() !== '' &&
      formData.service !== '' &&
      formData.message.trim().length >= 15 &&
      formData.antiRobot &&
      formData.termsAccepted
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);

      try {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch('https://neoframe.ch/contact.php', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (result.status === "success") {
          setIsSubmitted(true);
          setShowSuccessPopup(true);
          document.body.style.overflow = "hidden";
          form.reset();
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            website: '',
            service: '',
            message: '',
            antiRobot: false,
            termsAccepted: false
          });
        } else {
          setSubmitError(result.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    document.body.style.overflow = 'auto';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'message') {
      if (value.trim().length < 15) {
        setFormErrors(prev => ({
          ...prev,
          message: 'Die Nachricht muss mindestens 15 Zeichen lang sein'
        }));
      } else {
        setFormErrors(prev => ({ ...prev, message: '' }));
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const getInputClass = (isTextArea = false) => `
    w-full px-4 py-3 
    ${isSubmitted ? 'bg-dark-300' : 'bg-dark-200'} 
    border border-dark-300 
    rounded-xl text-white 
    placeholder-gray-400 
    ${!isSubmitted && 'focus:ring-2 focus:ring-[#feefde] focus:border-transparent'} 
    transition-all duration-200
    ${isSubmitted ? 'cursor-not-allowed opacity-80' : ''}
    ${isTextArea ? 'resize-none' : ''}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="pt-16">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg transform scale-95 opacity-0 animate-[scale-in_0.3s_ease-out_forwards]">
            <div className="relative bg-[#feefde] rounded-3xl p-8 text-center">
              <button
                onClick={closeSuccessPopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-[#feefde]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                Nachricht erfolgreich gesendet!
              </h3>
              <p className="text-gray-700 mb-8">
                Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.
              </p>
              
              <button
                onClick={closeSuccessPopup}
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

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
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Lassen Sie uns zusammenarbeiten
            </h1>
            <p 
              className={`text-lg sm:text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Haben Sie Fragen oder möchten Sie ein Projekt mit uns starten?
              Kontaktieren Sie uns - wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#feefde]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`bg-black p-8 md:p-12 rounded-3xl shadow-xl transform transition-all duration-700 ${
                isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
            >
              <h2 className="text-2xl font-bold mb-8 text-white">
                {isSubmitted ? 'Ihre Nachricht wurde gesendet' : 'Kontaktieren Sie uns'}
              </h2>

              {submitError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                  {submitError}
                </div>
              )}

              <form 
                action="contact.php"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitted}
                      className={getInputClass()}
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitted}
                      className={getInputClass()}
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted}
                    className={getInputClass()}
                    placeholder="max.mustermann@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Unternehmen *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted}
                    className={getInputClass()}
                    placeholder="Musterfirma GmbH"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                    Aktuelle Website (falls vorhanden)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    disabled={isSubmitted}
                    placeholder="https://"
                    className={getInputClass()}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Gewünschte Dienstleistung *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted}
                    className={getInputClass()}
                  >
                    <option value="" className="bg-dark-200">Bitte wählen</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-dark-200">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted}
                    rows={6}
                    className={getInputClass(true)}
                    placeholder="Beschreiben Sie Ihr Projekt... (min. 15 Zeichen)"
                  ></textarea>
                  {formErrors.message && !isSubmitted && (
                    <p className="mt-2 text-sm text-red-400">{formErrors.message}</p>
                  )}
                </div>

                {!isSubmitted && (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="antiRobot"
                        name="antiRobot"
                        checked={formData.antiRobot}
                        onChange={handleCheckboxChange}
                        disabled={isSubmitted}
                        className="h-5 w-5 rounded border-dark-300 text-[#feefde] focus:ring-[#feefde]"
                      />
                      <label htmlFor="antiRobot" className="ml-3 text-sm text-gray-300">
                        Ich bin kein Roboter *
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleCheckboxChange}
                        disabled={isSubmitted}
                        className="h-5 w-5 rounded border-dark-300 text-[#feefde] focus:ring-[#feefde]"
                      />
                      <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-300">
                        Ich akzeptiere die <a href="#" className="text-[#feefde] hover:underline">Datenschutzerklärung</a> *
                      </label>
                    </div>
                  </div>
                )}

                {!isSubmitted && (
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 relative ${
                        isFormValid && !isSubmitting
                          ? 'bg-[#feefde] text-black hover:bg-[#feefde]/90'
                          : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Wird gesendet...
                        </span>
                      ) : isFormValid ? (
                        'Jetzt unverbindliches Angebot anfordern'
                      ) : (
                        'Bitte füllen Sie alle erforderlichen Felder aus'
                      )}
                    </button>
                    <p className="mt-4 text-sm text-gray-400 text-center">
                      * Pflichtfelder
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <div 
                className={`bg-black p-8 md:p-12 rounded-3xl shadow-xl mb-8 transform transition-all duration-700 delay-200 ${
                  isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
              >
                <h2 className="text-2xl font-bold mb-8 text-white">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#feefde] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-white">Adresse</h3>
                      <p className="text-gray-400">
                        8106 Adlikon bei Regensdorf<br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#feefde] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-white">E-Mail</h3>
                      <a href="mailto:kontakt@neoframe.ch" className="text-gray-400 hover:text-[#feefde] transition-colors">
                        kontakt@neoframe.ch
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#feefde] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-white">Telefon</h3>
                      <a href="tel:+41764152905" className="text-gray-400 hover:text-[#feefde] transition-colors">
                        +41 76 415 29 05
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div 
                className={`rounded-3xl overflow-hidden shadow-xl h-[400px] transform transition-all duration-700 delay-400 ${
                  isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.8891673559547!2d8.45931937678773!3d47.45931509550755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900758c4190de5%3A0x4eb43a8be976b4d0!2s8106%20Adlikon%20b.%20Regensdorf!5e0!3m2!1sde!2sch!4v1710644151234!5m2!1sde!2sch"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}