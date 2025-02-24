import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Luxury Real Estate in 2024",
      excerpt: "Discover the emerging trends shaping the luxury real estate market in 2024 and beyond...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Market Trends"
    },
    {
      id: 2,
      title: "Designing the Perfect Smart Home",
      excerpt: "Explore the latest smart home technologies that are revolutionizing luxury living...",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Home Design"
    },
    {
      id: 3,
      title: "Investment Opportunities in Beverly Hills",
      excerpt: "An in-depth analysis of the Beverly Hills luxury real estate market and investment potential...",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      author: "Emma Williams",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Investment"
    }
  ];

  const categories = [
    "Market Trends",
    "Home Design",
    "Investment",
    "Luxury Living",
    "Architecture",
    "Interior Design"
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Our Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Insights and Updates from the World of Luxury Real Estate
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary-gold text-white px-4 py-2 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-playfair mb-4">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary-gold transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <div className="flex items-center text-gray-600 text-sm mb-4 space-x-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-gold hover:text-primary-gold/80 transition-colors"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-playfair mb-6">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category.toLowerCase()}`}
                      className="flex items-center justify-between text-gray-600 hover:text-primary-gold transition-colors"
                    >
                      <span>{category}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-playfair mb-6">Featured Posts</h3>
              <div className="space-y-6">
                {blogPosts.slice(0, 2).map((post) => (
                  <div key={post.id} className="flex space-x-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-playfair mb-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-primary-gold transition-colors">
                          {post.title}
                        </Link>
                      </h4>
                      <div className="text-sm text-gray-600">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;