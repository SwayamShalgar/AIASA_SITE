import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Users,
  Lightbulb,
  Award,
  Rocket,
  Globe,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredAnimation,
  StaggeredItem,
  ScaleOnHover,
} from "@/components/ui/animated-components";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AIASA
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are a premier organization dedicated to advancing artificial
            intelligence and data science through groundbreaking research,
            innovative education, and vibrant community building. Join us in
            shaping the future of technology.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Mission
              </h3>
              <p className="text-muted-foreground">
                To foster innovation and excellence in AI and data science
                research and applications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading platform for AI and data science collaboration
                and knowledge sharing.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Community
              </h3>
              <p className="text-muted-foreground">
                Building a diverse community of researchers, students, and
                industry professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Promoting cutting-edge research and innovative solutions in AI
                and data science.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Impact
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              Since our establishment, AIASA has been at the forefront of AI and
              data science advancement, fostering collaboration between academia
              and industry, and contributing to groundbreaking research that
              shapes the future of technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">70+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Created
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">
                  Events Hosted
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">
                  Grabed the Prices
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
