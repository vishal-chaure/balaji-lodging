import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Bed, 
  Wifi, 
  Car, 
  Bath, 
  Star, 
  MapPin, 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800", 
    "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800",
    "https://images.unsplash.com/photo-1469474968028-56623f02e429?w=800",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800"
  ];

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.testimonials.reviews.length]);

  const roomIcons = {
    bed: <Bed className="h-5 w-5" />,
    bath: <Bath className="h-5 w-5" />,
    wifi: <Wifi className="h-5 w-5" />,
    parking: <Car className="h-5 w-5" />
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1469474968028-56623f02e429?w=1920)`
        }}
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/rooms">{t.hero.cta}</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Rooms Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.rooms.title}</h2>
            <p className="text-xl text-muted-foreground">{t.rooms.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Delux AC Room */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-cover bg-center" 
                   style={{ backgroundImage: `url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600)` }}>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{t.rooms.deluxAC.name}</h3>
                  <span className="text-2xl font-bold text-primary">{t.rooms.deluxAC.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {t.rooms.deluxAC.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {Object.values(roomIcons)[index]}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delux Non-AC Room */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-cover bg-center" 
                   style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600)` }}>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{t.rooms.deluxNonAC.name}</h3>
                  <span className="text-2xl font-bold text-primary">{t.rooms.deluxNonAC.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {t.rooms.deluxNonAC.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {Object.values(roomIcons)[index]}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Gallery Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-muted/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.gallery.title}</h2>
            <p className="text-xl text-muted-foreground">{t.gallery.subtitle}</p>
          </div>
          
          <div className="relative">
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src={galleryImages[currentImageIndex]}
                alt="Hotel Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Slider */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          </div>
          
          <Card className="p-8">
            <CardContent className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(t.testimonials.reviews[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl italic mb-6">
                "{t.testimonials.reviews[currentTestimonial].text}"
              </blockquote>
              <cite className="text-lg font-semibold">
                - {t.testimonials.reviews[currentTestimonial].name}
              </cite>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Nearby Places */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-muted/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.nearbyPlaces.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.nearbyPlaces.places.map((place, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex items-center justify-between p-0">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">{place.name}</h3>
                      <p className="text-sm text-muted-foreground">{place.time}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={place.mapLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}