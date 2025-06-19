
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="inline-block px-4 py-1.5 bg-green-50 rounded-full"
            >
              <span className="text-green-700 font-medium text-sm">Software Developer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Hello, I'm <span className="gradient-text">Deepak Kumar</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-gray-600 text-xl max-w-lg"
            >
              I am passionate about designing digital experiences that are both visually stunning and intuitive, 
              and always strive to create designs that delight and engage users.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full gradient-bg text-white shadow-md hover:shadow-lg transition-all duration-300 btn-animated"
              >
                Get in Touch
              </a>
              <a 
                href="/public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 rounded-full bg-white border border-green-200 text-gray-800 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          > 
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-green-300/30 rounded-full animate-pulse-subtle"></div>
              <img 
                src="\public\images\1682498048996.jpg" 
                alt="Deepak Kumar" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <button 
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-gray-500 hover:text-green-600 transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-float" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
