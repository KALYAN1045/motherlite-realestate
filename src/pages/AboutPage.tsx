import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Home, Star } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: <Home className="w-8 h-8" />,
      value: "500+",
      label: "Luxury Properties",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "1000+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "50+",
      label: "Industry Awards",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Emma Williams",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
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
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">
              About Motherlite Homes
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Crafting exceptional living experiences since 2008
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair text-center mb-8">Our Story</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4">
            <p>
              Founded in 2008, Motherlite Homes has established itself as a
              premier luxury real estate company, specializing in exceptional
              properties that redefine sophisticated living.
            </p>
            <p>
              Our commitment to excellence and attention to detail has earned us
              the trust of discerning clients worldwide, making us the preferred
              choice for those seeking extraordinary homes.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transform transition duration-300"
            >
              <div className="text-primary-gold mb-4 flex justify-center items-center">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-primary-gold text-white rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-playfair text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-playfair mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
