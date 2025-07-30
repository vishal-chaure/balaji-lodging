import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

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
            <h1 className="text-5xl font-bold mb-6">{t.about.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-4 bg-muted/20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.about.mission}
                </p>
                
                <div className="space-y-4">
                  {t.about.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600"
                  alt="Hotel exterior"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Spiritual Significance */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Spiritual & Cultural Significance</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Aashadhi Yatra</h3>
                  <p className="text-muted-foreground">
                    Experience the sacred pilgrimage of Aashadhi Yatra, where millions of devotees 
                    gather to seek blessings from Lord Vithoba. Our hotel provides comfortable 
                    accommodation during this auspicious time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Chandrabhaga River</h3>
                  <p className="text-muted-foreground">
                    Take a peaceful walk to the holy Chandrabhaga river, where pilgrims perform 
                    sacred rituals and find spiritual solace. The river's serene waters offer 
                    a perfect setting for meditation and reflection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}