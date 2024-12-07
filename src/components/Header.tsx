import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, MessageSquare } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            Alok Ranjan Thakur
          </motion.h1>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <SocialLink href="https://github.com/alok-112" icon={<Github />} />
            <SocialLink href="https://linkedin.com/in/alok-thakur" icon={<Linkedin />} />
            <SocialLink href="mailto:work.alok.thakur@gmail.com" icon={<Mail />} />
            <SocialLink href="https://wa.me/+91987190221" icon={<MessageSquare />} />
            <SocialLink href="#" icon={<Globe />} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-600 hover:text-blue-600 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Header;