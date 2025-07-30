import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600", title: "Delux AC Room" },
    { url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600", title: "Delux Non-AC Room" },
    { url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600", title: "Hotel Exterior" },
    { url: "https://images.unsplash.com/photo-1469474968028-56623f02e429?w=600", title: "Nearby Mountains" },
    { url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600", title: "Chandrabhaga River" },
    { url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600", title: "Evening View" },
    { url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600", title: "Room Interior" },
    { url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600", title: "Comfortable Beds" },
    { url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600", title: "Modern Architecture" },
    { url: "https://images.unsplash.com/photo-1469474968028-56623f02e429?w=600", title: "Scenic Surroundings" },
    { url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600", title: "Peaceful Waters" },
    { url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600", title: "Night Sky" }
  ];

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
            <h1 className="text-5xl font-bold mb-6">{t.gallery.title}</h1>
            <p className="text-xl text-muted-foreground">
              {t.gallery.subtitle}
            </p>
          </div>
        </motion.section>

        {/* Gallery Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}