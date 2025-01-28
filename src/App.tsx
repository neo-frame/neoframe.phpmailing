import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Services } from './pages/Services';
import { Affiliate } from './pages/Affiliate';
import { AboutUs } from './pages/AboutUs';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Neotype } from './pages/Neotype';
import { WebDesign2025 } from './pages/blog/WebDesign2025';
import { SEO2025 } from './pages/blog/SEO2025';
import { GoogleAds } from './pages/blog/GoogleAds';
import { ResponsiveDesign } from './pages/blog/ResponsiveDesign';
import { BrandingGuide } from './pages/blog/BrandingGuide';
import { WebPerformance } from './pages/blog/WebPerformance';
import { Home } from './pages/Home';
import { Loader } from './components/Loader';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location]);

  React.useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Loader />
      {!isLoading && <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dienstleistungen" element={<Services />} />
          <Route path="/partner" element={<Affiliate />} />
          <Route path="/ueber-uns" element={<AboutUs />} />
          <Route path="/projekte" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/webdesign-2025" element={<WebDesign2025 />} />
          <Route path="/blog/seo-2025" element={<SEO2025 />} />
          <Route path="/blog/google-ads" element={<GoogleAds />} />
          <Route path="/blog/responsive-design" element={<ResponsiveDesign />} />
          <Route path="/blog/branding-guide" element={<BrandingGuide />} />
          <Route path="/blog/web-performance" element={<WebPerformance />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/neotype" element={<Neotype />} />
        </Routes>
      </main>

      {!isLoading && <Footer />}
    </div>
  );
}

export default App;