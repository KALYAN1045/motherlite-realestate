import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ReactPlayer from "react-player";
import { ChevronDown, Award, Key, Home, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <Award className="w-12 h-12 text-primary-gold" />,
      title: "Luxury Properties",
      description: "Curated collection of the world's most prestigious estates",
    },
    {
      icon: <Key className="w-12 h-12 text-primary-gold" />,
      title: "Exclusive Access",
      description: "Private viewings and personalized property consultations",
    },
    {
      icon: <Home className="w-12 h-12 text-primary-gold" />,
      title: "Premium Locations",
      description: "Prime real estate in the most sought-after neighborhoods",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary-gold" />,
      title: "Global Reach",
      description: "International portfolio of exceptional properties",
    },
  ];

  const featuredProperties = [
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      title: "Modern Skyline Penthouse",
      price: "130 Cr.",
      location: "Indira Nagar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      title: "Oceanfront Villa",
      price: "180 Cr.",
      location: "Kundanhalli",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Estate",
      price: "100 Cr.",
      location: "Jubilee Hills",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <ReactPlayer
              url="https://youtu.be/lpzEd8gpWVM?feature=shared"
              playing
              loop
              muted
              width="100%"
              height="100%"
              className="react-player"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                objectFit: "cover",
              }}
              config={{
                youtube: {
                  playerVars: {
                    start: 10,
                    end: 63,
                    showinfo: 0,
                    controls: 0,
                    modestbranding: 1,
                    autoplay: 1,
                    mute: 1,
                    rel: 0,
                    playsinline: 1,
                  },
                },
              }}
            />
          </div>
          <div className="absolute inset-0 video-overlay" />
        </div>

        {/* Static image for medium and small screens */}
        <div
          className="absolute inset-0 w-full h-full lg:hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
         <div className="absolute inset-0 bg-black/40" />
        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair text-center mb-6 leading-tight"
          >
            Discover Luxury Living
            <br />
            with Motherlite Homes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center mb-8 max-w-2xl"
          >
            Experience unparalleled luxury in the most prestigious locations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/properties"
              className="px-8 py-3 bg-primary-gold text-white rounded hover:bg-primary-gold/90 transition-colors duration-300 text-lg"
            >
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white rounded hover:bg-white/10 transition-colors duration-300 text-lg"
            >
              Book a Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="py-20 bg-[#ece6dd]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-playfair text-center mb-16 mt-10"
          >
            The Epitome of Luxury Real Estate
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-playfair mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Featured Properties */}
          <motion.div variants={fadeInUp} className="mb-20">
            <h2 className="text-4xl font-playfair text-center mb-16">
              Featured Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProperties.map((property, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-playfair mb-2">
                        {property.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">{property.location}</span>
                        <span className="text-primary-gold text-xl">
                          {property.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center rounded-2xl p-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 text-white">
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">
                Find Your Dream Home Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us guide you through our exclusive collection of luxury
                properties
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-primary-gold text-white rounded-lg hover:bg-primary-gold/90 transition-colors duration-300 text-lg"
              >
                Schedule a Private Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
