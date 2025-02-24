import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  DollarSign,
  School as Pool,
  Dumbbell,
  Home,
  Waves,
  Search,
  Filter,
  X,
} from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Serene Villa Retreat",
    location: "Lonavala, Maharashtra",
    price: 850000,
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    features: ["Pool", "Gym", "Smart Home", "Mountain View"],
    beds: 6,
    baths: 7,
    sqft: 8500,
  },
  {
    id: 2,
    title: "Bayfront Luxury Mansion",
    location: "Alibaug, Maharashtra",
    price: 1400000,
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    features: ["Pool", "Smart Home", "Sea View"],
    beds: 5,
    baths: 6,
    sqft: 7200,
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Mumbai, Maharashtra",
    price: 650000,
    type: "penthouse",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    features: ["Gym", "Smart Home"],
    beds: 4,
    baths: 4.5,
    sqft: 4800,
  },
  {
    id: 4,
    title: "Ultra-Modern Apartment",
    location: "Bangalore, Karnataka",
    price: 420000,
    type: "apartment",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    features: ["Gym", "Smart Home"],
    beds: 3,
    baths: 3,
    sqft: 3200,
  },
  {
    id: 5,
    title: "Hillside Estate",
    location: "Ooty, Tamil Nadu",
    price: 1700000,
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    features: ["Pool", "Gym", "Smart Home", "Mountain View"],
    beds: 8,
    baths: 10,
    sqft: 12000,
  },
];

const PropertiesPage = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 25000000]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const features = [
    { name: "Pool", icon: <Pool className="w-4 h-4" /> },
    { name: "Gym", icon: <Dumbbell className="w-4 h-4" /> },
    { name: "Smart Home", icon: <Home className="w-4 h-4" /> },
    { name: "Sea View", icon: <Waves className="w-4 h-4" /> },
  ];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  useEffect(() => {
    let results = [...properties];

    // Filter by type
    if (selectedType !== "all") {
      results = results.filter((property) => property.type === selectedType);
    }

    // Filter by price range
    results = results.filter(
      (property) =>
        property.price >= priceRange[0] && property.price <= priceRange[1]
    );

    // Filter by features
    if (selectedFeatures.length > 0) {
      results = results.filter((property) =>
        selectedFeatures.every((feature) => property.features.includes(feature))
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query)
      );
    }

    console.log("Filtered results:", results); // For debugging
    console.log("Active filters:", {
      selectedType,
      priceRange,
      selectedFeatures,
      searchQuery,
    }); // For debugging

    setFilteredProperties(results);
  }, [selectedType, priceRange, selectedFeatures, searchQuery]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">
              Discover Your Dream Property
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our curated collection of luxury properties
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search properties by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
          />
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-gold"
          >
            {isFilterOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Filter className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Filters */}
        <motion.div
          initial={false}
          animate={{
            height: isFilterOpen ? "auto" : 0,
            opacity: isFilterOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`overflow-hidden ${isFilterOpen ? "mb-8" : ""}`}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-gold"
                >
                  <option value="all">All Properties</option>
                  <option value="villa">Villas</option>
                  <option value="apartment">Apartments</option>
                  <option value="penthouse">Penthouses</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: {formatPrice(priceRange[1])}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000000"
                  step="1000000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full"
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features
                </label>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <button
                      key={feature.name}
                      onClick={() => toggleFeature(feature.name)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                        selectedFeatures.includes(feature.name)
                          ? "bg-primary-gold text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {feature.icon}
                      {feature.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredProperties.length} properties
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="property-card bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link to={`/properties/${property.id}`}>
                <div className="relative h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-gold text-white px-4 py-2 rounded-full">
                    {formatPrice(property.price)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft.toLocaleString()} sq.ft</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600"
            >
              <p className="text-xl mb-4">
                No properties found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSelectedType("all");
                  setPriceRange([0, 25000000]);
                  setSelectedFeatures([]);
                  setSearchQuery("");
                }}
                className="text-primary-gold hover:text-primary-gold/80 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
