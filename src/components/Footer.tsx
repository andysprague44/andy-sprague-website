import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section className="bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            I'm looking for opportunities with early-stage startups where I can make a real impact. 
            Let's discuss how we can work together.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer; 