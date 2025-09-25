import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Lightbulb, Award, Rocket, Globe, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggeredAnimation, StaggeredItem, ScaleOnHover } from "@/components/ui/animated-components";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "To foster innovation and excellence in AI and data science research and applications.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading platform for AI and data science collaboration and knowledge sharing.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a diverse community of researchers, students, and industry professionals.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Promoting cutting-edge research and innovative solutions in AI and data science.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const stats = [
    { value: "70+", label: "Active Members", icon: Users },
    { value: "20+", label: "Projects Created", icon: Rocket },
    { value: "20+", label: "Events Hosted", icon: Globe },
    { value: "40+", label: "Awards Won", icon: Award }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/30 rounded-full"
          animate={{
            scale: [1, 20, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
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

        <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" staggerDelay={0.15}>
          {features.map((item, index) => (
            <StaggeredItem key={item.title}>
              <ScaleOnHover scale={1.05}>
                <Card className="text-center group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border-border/50 hover:border-primary/30 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardContent className="pt-10 pb-8 px-6 relative z-10">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggeredItem>
          ))}
        </StaggeredAnimation>

        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <motion.h3 
                className="text-4xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our <span className="text-primary">Impact</span>
              </motion.h3>
              <motion.p 
                className="text-lg text-foreground/80 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Since our establishment, AIASA has been at the forefront of AI and data science advancement, 
                fostering collaboration between academia and industry, and contributing to groundbreaking research 
                that shapes the future of technology.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/30 group-hover:border-primary/50 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground text-center">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Growing stronger every day</span>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;