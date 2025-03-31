
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      institution: "Malla Reddy University",
      degree: "B. Tech",
      duration: "2023-2027",
      location: "Hyderabad"
    },
    {
      institution: "NRI Jr College",
      degree: "IPE(Intermediate)",
      duration: "2021-2023",
      location: "Hyderabad"
    },
    {
      institution: "Vashista Model High School",
      degree: "SSC-Board",
      duration: "2020-2021",
      location: "Hyderabad"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-green-600 font-medium text-sm uppercase tracking-wider"
          >
            My Academic Background
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            <span className="gradient-text">Education</span> Journey
          </motion.h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="timeline-container"
          >
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="glass-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-900">{item.institution}</h3>
                  <h4 className="text-green-600 font-medium mt-1">{item.degree}</h4>
                  
                  <div className="flex flex-wrap mt-4 gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green-500" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
