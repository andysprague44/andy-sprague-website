import { motion } from "framer-motion";
import { Rocket, Clock, Zap, Coffee, Code2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Main Coming Soon Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative mb-12"
          >
            {/* Background animated elements */}
            <div className="absolute -top-20 -left-20 text-8xl opacity-10 animate-bounce">
              🚀
            </div>
            <div className="absolute -top-16 -right-16 text-6xl opacity-10 animate-pulse">
              ⭐
            </div>
            <div className="absolute top-40 left-10 text-4xl opacity-10 animate-spin" style={{ animationDuration: '8s' }}>
              ✨
            </div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              Coming Soon!
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              🎨 Portfolio Under Construction 🎨
            </motion.p>
          </motion.div>

          {/* Fun Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { 
                icon: <Code2 className="h-8 w-8" />, 
                title: "Coding Magic", 
                desc: "✨ Building awesome projects",
                emoji: "👨‍💻",
                delay: 0.2
              },
              { 
                icon: <Coffee className="h-8 w-8" />, 
                title: "Caffeine Powered", 
                desc: "☕ Fueled by coffee & creativity",
                emoji: "☕",
                delay: 0.4
              },
              { 
                icon: <Sparkles className="h-8 w-8" />, 
                title: "Polish Mode", 
                desc: "🎭 Making it pixel perfect",
                emoji: "✨",
                delay: 0.6
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: card.delay, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 bg-white/70 backdrop-blur-sm border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3 
                      }}
                    >
                      {card.emoji}
                    </motion.div>
                    <div className="flex justify-center mb-3 text-primary">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium">Portfolio Loading...</span>
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            
            <div className="max-w-md mx-auto bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "73%" }}
                transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">73% Complete - Coming Very Soon!</p>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed border-yellow-300"
          >
            <motion.div 
              className="text-4xl mb-4"
              animate={{ 
                rotate: [0, 15, -15, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 2 
              }}
            >
              🎯
            </motion.div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Great Things Are Coming!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm putting the finishing touches on some amazing projects. 
              Think <strong>AI magic</strong>, <strong>climate tech innovation</strong>, 
              and <strong>scalable solutions</strong> that make a real difference! 🌟
            </p>
            
            {/* Call to Action */}
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  Get Notified When It's Ready! 🔔
                </motion.span>
              </Button>
            </motion.div> */}
          </motion.div>

          {/* Fun Footer */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <p className="text-muted-foreground">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💡
              </motion.span>
              {" "}Meanwhile, check out my{" "}
              <a href="/about" className="text-primary hover:underline font-medium">
                About page
              </a>
              {" "}to learn more about me!{" "}
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                🚀
              </motion.span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;