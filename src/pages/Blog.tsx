import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'webdesign-2025',
    title: 'Webdesign 2025: Wie sieht eine erfolgreiche Website aus?',
    excerpt: 'Ihre Website ist oft das erste, was potenzielle Kunden von Ihnen sehen – und der erste Eindruck zählt. Gutes Webdesign ist deshalb wichtiger denn je. Hier erfahren Sie, worauf es ankommt.',
    category: 'Webdesign',
    date: '2025-01-11',
    readTime: '3 min'
  },
  {
    id: 'seo-2025',
    title: 'SEO 2025: Wie Sie Ihre Website nach vorne bringen',
    excerpt: 'SEO verändert sich ständig, und was vor ein paar Jahren funktioniert hat, reicht heute oft nicht mehr aus. 2025 geht es mehr denn je darum, die Suchmaschinenoptimierung an die Bedürfnisse der Nutzer anzupassen.',
    category: 'SEO',
    date: '2025-01-11',
    readTime: '3 min'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Webdesign: Best Practices für mobile Nutzer',
    excerpt: 'Wie Sie Ihre Website für alle Geräte optimieren und ein nahtloses Nutzererlebnis schaffen.',
    category: 'Webdesign',
    date: '2025-01-06',
    readTime: '3 min'
  },
  {
    id: 'google-ads',
    title: 'Google Ads: Strategien für höhere Conversion Rates',
    excerpt: 'Praktische Tipps zur Optimierung Ihrer Google Ads Kampagnen und Steigerung der Conversion Rate.',
    category: 'Google Ads',
    date: '2025-01-05',
    readTime: '4 min'
  },
  {
    id: 'branding-guide',
    title: 'Der ultimative Branding Guide für Startups und KMU',
    excerpt: 'Von der Logoentwicklung bis zur visuellen Identität: So bauen Sie eine starke Marke auf.',
    category: 'Branding',
    date: '2025-01-02',
    readTime: '4 min'
  },
  {
    id: 'web-performance',
    title: 'Web Performance: So verbessern Sie die Ladezeiten Ihrer Website',
    excerpt: 'Technische Optimierungen und Best Practices für bessere Website-Performance.',
    category: 'Entwicklung',
    date: '2025-02-20',
    readTime: '4 min'
  }
];

export function Blog() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#feefde]/10" />
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle , rgba(254, 239, 222, 0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(254, 239, 222, 0.3) 0%, transparent 70%)' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Aktuelle Einblicke, Trends und Expertenwissen aus der Welt des Webdesigns,
              der digitalen Strategie und des Online-Marketings.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-dark-200 rounded-2xl overflow-hidden hover:bg-dark-300 transition-colors duration-300"
              >
                <article className="p-8">
                  <div className="flex items-center space-x-4 text-sm mb-6">
                    <span className="bg-[#feefde] text-black px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[#feefde] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('de-CH')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <span className="text-[#feefde] inline-flex items-center">
                      Weiterlesen <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}