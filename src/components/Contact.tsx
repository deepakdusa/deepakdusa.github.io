
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Deepaki",
      link: "https://github.com/Deepaki143"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Deepak Kumar",
      link: "https://www.linkedin.com/in/deepak-kumar-159125327/"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "deepakdusa07@gmail.com",
      link: "mailto:deepakdusa07@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8106722473",
      link: "tel:+918106722473"
    }
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-green-600 font-medium text-sm uppercase tracking-wider"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            <span className="gradient-text">Contact</span> Me
          </motion.h2>
          <div className="section-divider"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group contact-icon"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                    <span className="text-green-600">{item.icon}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-gray-800 font-medium group-hover:text-green-600 transition-colors duration-300">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Email"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Message"
                ></textarea>
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full py-3 px-6 rounded-lg gradient-bg text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 btn-animated"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
