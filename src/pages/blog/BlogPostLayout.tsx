import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

interface BlogPostLayoutProps {
  post: BlogPost;
}

export function BlogPostLayout({ post }: BlogPostLayoutProps) {
  return (
    <div className="pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-[#feefde] hover:text-[#feefde]/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Blogübersicht
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-sm mb-6">
            <span className="bg-[#feefde] text-black px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString('de-CH')}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#feefde] prose-a:no-underline hover:prose-a:text-[#feefde]/80 prose-strong:text-white prose-ul:text-gray-300 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}