import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, MessageSquare } from 'lucide-react';

const Header = () => {
  const name = "Alok ".split("");
  const title = "Frontend Architect".split("");

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 shadow-lg py-4 border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Name Container */}
          <div className="flex items-center gap-4">
            {/* Animated Logo Symbol */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                className="text-transparent stroke-current"
              >
                <motion.path
                  d="M 20 20 L 80 20 L 80 80 L 20 80 Z"
                  fill="none"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="stroke-purple-400"
                />
                <motion.path
                  d="M 30 50 L 50 30 L 70 50 L 50 70 Z"
                  fill="none"
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="stroke-blue-400"
                />
              </svg>
            </motion.div>

            {/* Name & Title */}
            <div className="flex flex-col">
              <motion.div
                className="flex gap-[2px]"
                initial="hidden"
                animate="visible"
              >
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ 
                      delay: index * 0.05 + 0.3,
                      type: 'spring', 
                      stiffness: 300 
                    }}
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                className="flex gap-1"
                initial="hidden"
                animate="visible"
              >
                {title.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ 
                      delay: index * 0.03 + 0.8,
                      type: 'spring', 
                      stiffness: 200 
                    }}
                    className="text-sm font-medium text-gray-400"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Social Links with Different Colors */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <SocialLink 
              href="https://github.com/alok-112" 
              icon={<Github />} 
              className="hover:text-purple-400"
            />
            <SocialLink 
              href="https://linkedin.com/in/alok-thakur" 
              icon={<Linkedin />} 
              className="hover:text-blue-400"
            />
            <SocialLink 
              href="mailto:work.alok.thakur@gmail.com" 
              icon={<Mail />} 
              className="hover:text-red-400"
            />
            <SocialLink 
              href="https://wa.me/+91987190221" 
              icon={<MessageSquare />} 
              className="hover:text-green-400"
            />
            <SocialLink 
              href="#" 
              icon={<Globe />} 
              className="hover:text-teal-400"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  className 
}: { 
  href: string; 
  icon: React.ReactNode;
  className?: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className={`text-gray-400 transition-colors ${className}`}
  >
    {icon}
  </motion.a>
);

export default Header;