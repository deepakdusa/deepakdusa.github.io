
import { motion } from 'framer-motion';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  PenTool, 
  Globe, 
  Smartphone 
} from 'lucide-react';

interface Skill {
  category: string;
  icon: JSX.Element;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      icon: <Code className="w-7 h-7 text-green-600" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML", level: 95 },
      ]
    },
    {
      category: "Web Development",
      icon: <Globe className="w-7 h-7 text-green-600" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
      ]
    },
    {
      category: "UI/UX Design",
      icon: <PenTool className="w-7 h-7 text-green-600" />,
      skills: [
        { name: "UI/UX", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "Tailwind CSS", level: 75 },
      ]
    },
    {
      category: "Database",
      icon: <Database className="w-7 h-7 text-green-600" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-green-600 font-medium text-sm uppercase tracking-wider"
          >
            What I Can Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <div className="section-divider"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillCategory, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {skillCategory.icon}
                <h3 className="text-xl font-semibold ml-3">{skillCategory.category}</h3>
              </div>
              
              <div className="space-y-5">
                {skillCategory.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className="skill-bar"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
