import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Maximize,
  Calendar,
  Phone,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ReactPlayer from "react-player";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock property data (in a real app, this would come from an API)
  const property = {
    id: 1,
    title: "Villa Serenity",
    location: "Beverly Hills",
    price: "12,500,000",
    description:
      "Experience unparalleled luxury in this stunning Beverly Hills estate. This architectural masterpiece seamlessly blends indoor and outdoor living with expansive glass walls, infinity pool, and breathtaking city views.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
    videoUrl: "https://www.youtube.com/watch?v=wsQBs_QRexA",
    features: ["Pool", "Gym", "Smart Home", "Sea View"],
    details: {
      beds: 6,
      baths: 7,
      sqft: "8,500",
      built: 2022,
    },
    amenities: [
      "Infinity Pool",
      "Home Theater",
      "Wine Cellar",
      "Smart Home System",
      "Private Gym",
      "Spa",
      "Outdoor Kitchen",
      "4-Car Garage",
    ],
    floorPlans: [
      {
        title: "Ground Floor",
        image: "/G-floor.jpg",
        description: "Main living areas, kitchen, and entertainment spaces",
      },
      {
        title: "First Floor",
        image: "/1-floor.jpg",
        description: "Master suite and additional bedrooms",
      },
      {
        title: "Second Floor",
        image: "/2-floor.jpg",
        description: "Additional guest rooms and study",
      },
    ],
    projectGallery: [
      {
        image:
          "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
        title: "Exterior View",
      },
      {
        image:
          "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Pool Area",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1682889762731-375a6b22d794?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Garden",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1675615667682-eb53c1b7d92e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Living Room",
      },
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev: number) =>
      prev === property.projectGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev: number) =>
      prev === 0 ? property.projectGallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <ReactPlayer
          url={property.videoUrl}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 0, modestbranding: 1 },
            },
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-playfair mb-4"
            >
              {property.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-xl">{property.location}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-playfair mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {property.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-primary-gold" />
                  <div className="text-sm text-gray-600">Bedrooms</div>
                  <div className="font-semibold">{property.details.beds}</div>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-primary-gold" />
                  <div className="text-sm text-gray-600">Bathrooms</div>
                  <div className="font-semibold">{property.details.baths}</div>
                </div>
                <div className="text-center">
                  <Maximize className="w-6 h-6 mx-auto mb-2 text-primary-gold" />
                  <div className="text-sm text-gray-600">Square Feet</div>
                  <div className="font-semibold">{property.details.sqft}</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary-gold" />
                  <div className="text-sm text-gray-600">Year Built</div>
                  <div className="font-semibold">{property.details.built}</div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {property.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-playfair mb-6">Luxury Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-playfair mb-6">Floor Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {property.floorPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {plan.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <a
                    href="/floor.pdf"
                    download="floor-plans.pdf"
                    className="flex items-center space-x-2 bg-primary-gold text-white px-6 py-3 rounded-lg hover:bg-primary-gold/90 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Complete Floor Plans</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Project Gallery Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-playfair mb-6">Project Gallery</h2>
              <div className="relative">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <motion.img
                    key={currentImageIndex}
                    src={property.projectGallery[currentImageIndex].image}
                    alt={property.projectGallery[currentImageIndex].title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {property.projectGallery.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      currentImageIndex === index
                        ? "ring-2 ring-primary-gold"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-24 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-3xl font-playfair mb-4">
                <DollarSign className="inline-block w-8 h-8 text-primary-gold" />
                {property.price}
              </div>
              <button className="w-full bg-primary-gold text-white py-3 rounded-lg mb-4 hover:bg-primary-gold/90 transition-colors">
                Schedule a Viewing
              </button>
              <button className="w-full border-2 border-primary-gold text-primary-gold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-gold/10 transition-colors">
                <Phone className="w-5 h-5" />
                <span>Contact Agent</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
