import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Wifi, Car, Bath, Tv, Thermometer, Coffee } from "lucide-react";

export default function Rooms() {
  const { t } = useLanguage();

  const roomFeatures = {
    ac: [
      { icon: <Bed className="h-5 w-5" />, text: "King Size Bed" },
      { icon: <Bath className="h-5 w-5" />, text: "Private Bathroom with Hot Water" },
      { icon: <Wifi className="h-5 w-5" />, text: "Free Wi-Fi" },
      { icon: <Car className="h-5 w-5" />, text: "Free Parking" },
      { icon: <Tv className="h-5 w-5" />, text: "32-inch LCD TV" },
      { icon: <Thermometer className="h-5 w-5" />, text: "Air Conditioning" },
      { icon: <Coffee className="h-5 w-5" />, text: "Tea/Coffee Maker" }
    ],
    nonAc: [
      { icon: <Bed className="h-5 w-5" />, text: "Queen Size Bed" },
      { icon: <Bath className="h-5 w-5" />, text: "Private Bathroom with Hot Water" },
      { icon: <Wifi className="h-5 w-5" />, text: "Free Wi-Fi" },
      { icon: <Car className="h-5 w-5" />, text: "Free Parking" },
      { icon: <Tv className="h-5 w-5" />, text: "28-inch LCD TV" },
      { icon: <Coffee className="h-5 w-5" />, text: "Tea/Coffee Maker" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t.rooms.title}</h1>
            <p className="text-xl text-muted-foreground">
              {t.rooms.subtitle}
            </p>
          </div>
        </motion.section>

        {/* Rooms Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Delux AC Room */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-80 md:h-auto bg-cover bg-center" 
                     style={{ backgroundImage: `url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800)` }}>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold">{t.rooms.deluxAC.name}</h2>
                    <span className="text-3xl font-bold text-primary">{t.rooms.deluxAC.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Enjoy ultimate comfort in our spacious Delux AC room, perfect for a relaxing stay 
                    with modern amenities and air conditioning for year-round comfort.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {roomFeatures.ac.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {feature.icon}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Delux Non-AC Room */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold">{t.rooms.deluxNonAC.name}</h2>
                      <span className="text-3xl font-bold text-primary">{t.rooms.deluxNonAC.price}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Experience comfortable accommodation in our well-ventilated Delux Non-AC room, 
                      offering excellent value with all essential amenities for a pleasant stay.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {roomFeatures.nonAc.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          {feature.icon}
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <div className="order-1 md:order-2 h-80 md:h-auto bg-cover bg-center" 
                     style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800)` }}>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Additional Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-4 bg-muted/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Room Policies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Check-in</h3>
                <p className="text-muted-foreground">2:00 PM onwards</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Check-out</h3>
                <p className="text-muted-foreground">12:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cancellation</h3>
                <p className="text-muted-foreground">Free cancellation 24 hours prior</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}