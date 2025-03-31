
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <span className="text-2xl font-bold gradient-text">Deepak kumar</span>
          </div>
          
          <p className="text-gray-600 text-center max-w-md">
            A passionate software developer focused on creating beautiful and functional digital experiences.
          </p>
          
          <div className="flex space-x-8 mt-6">
            <a 
              href="https://github.com/Deepaki143" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/dusa-deepak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:deepakdusa07@gmail.com" 
              className="text-gray-500 hover:text-green-600 transition-colors duration-300"
            >
              Email
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 w-full text-center">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              © {currentYear} D.Deepak Kumar Made with 
              <Heart className="w-4 h-4 text-green-600 mx-1" fill="currentColor" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
