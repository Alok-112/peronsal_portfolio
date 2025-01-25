import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'GitHub', href: 'https://github.com/alok-112', icon: <Github /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/alok-thakur', icon: <Linkedin /> },
    { name: 'Email', href: 'mailto:work.alok.thakur@gmail.com', icon: <Mail /> },
    { name: 'WhatsApp', href: 'https://wa.me/+91987190221', icon: <MessageSquare /> },
    { name: 'Portfolio', href: '#', icon: <Globe /> }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alok Thakur
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Crafting digital excellence</p>
            <div className="flex space-x-4">
              {footerLinks.slice(0, 3).map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Explore</h4>
            <ul className="space-y-2">
              {['Projects', 'Skills', 'About', 'Blog'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-400 cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400">New Delhi, India</p>
            <p className="text-gray-600 dark:text-gray-400">work.alok.thakur@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">+91 9871902201</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Connect</h4>
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          © {new Date().getFullYear()} Alok Ranjan Thakur. All rights reserved.
          <div className="mt-2">
            Built with ❤️ using React & Tailwind
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;