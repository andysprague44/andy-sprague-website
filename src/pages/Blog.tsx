import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Coffee, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative mb-12"
          >
            <div className="absolute -top-16 -left-16 text-6xl opacity-10 animate-pulse">
              📝
            </div>
            <div className="absolute -top-12 -right-20 text-5xl opacity-10 animate-bounce">
              💭
            </div>
            <div className="absolute top-32 left-8 text-4xl opacity-10 animate-spin" style={{ animationDuration: '8s' }}>
              ✍️
            </div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[hsl(212,84%,20%)] to-[hsl(177,84%,32%)] bg-clip-text text-transparent"
              style={{ 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Blog
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              📚 Words & Ideas in Transit 📚
            </motion.p>
          </motion.div> */}

          {/* Fun Status Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { 
                icon: <BookOpen className="h-8 w-8" />, 
                title: "Content Migration", 
                desc: "📦 Moving my thoughts here",
                emoji: "📚",
                delay: 0.2
              },
              { 
                icon: <Coffee className="h-8 w-8" />, 
                title: "Coffee Powered", 
                desc: "☕ Writing fuel never stops",
                emoji: "☕",
                delay: 0.4
              },
              { 
                icon: <PenTool className="h-8 w-8" />, 
                title: "Ideas Flowing", 
                desc: "💡 Always thinking & writing",
                emoji: "✍️",
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
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 bg-white/70 backdrop-blur-sm border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{ 
                        rotate: [0, 8, -8, 0],
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
          </div> */}

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed border-[hsl(177,84%,32%)]/30 mb-12"
          >
            <motion.div 
              className="text-5xl mb-6"
              animate={{ 
                rotate: [0, 12, -12, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              🚚
            </motion.div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Blog Migration in Progress!
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm in the process of moving my blog here, but for now you can check out my writing 
              and thoughts on my current blog.
            </p>
            
            {/* Call to Action */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-[hsl(212,84%,20%)] to-[hsl(177,84%,32%)] hover:from-[hsl(212,84%,15%)] hover:to-[hsl(177,84%,27%)] text-white font-bold py-3 px-8 rounded-full shadow-lg"
              >
                <a 
                  href="https://andysprague.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    Visit My Current Blog
                  </motion.span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Coming Features */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Coming Soon to This Space:
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                // "🌱 Climate Tech Insights",
                "💻 Engineering Deep Dives", 
                // "🚀 Startup Lessons",
                "🔧 Technical Tutorials",
                "💭 Random Thoughts"
              ].map((item, index) => (
                <motion.span
                  key={item}
                  className="px-3 py-1 bg-white/60 rounded-full border border-primary/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Fun Footer */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <p className="text-muted-foreground">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📖
              </motion.span>
              {" "}Meanwhile, explore my{" "}
              <a href="/about" className="text-primary hover:underline font-medium">
                About page
              </a>
              {" "}or{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                get in touch
              </a>
              {" "}to chat about ideas!{" "}
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                💬
              </motion.span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 