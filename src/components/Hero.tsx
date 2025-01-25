import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      href: 'https://github.com/alok-112',
      icon: <Github />,
      color: 'hover:text-purple-400',
      bg: 'hover:bg-purple-600/20',
    },
    {
      href: 'https://linkedin.com/in/alok-thakur',
      icon: <Linkedin />,
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-600/20',
    },
    {
      href: 'mailto:work.alok.thakur@gmail.com',
      icon: <Mail />,
      color: 'hover:text-red-400',
      bg: 'hover:bg-red-600/20',
    },
  ];

  const techStackColors = {
    React: 'from-blue-600 to-cyan-500',
    TypeScript: 'from-cyan-600 to-blue-500',
    'Next.js': 'from-purple-600 to-pink-500',
    'Node.js': 'from-green-600 to-emerald-500',
    MongoDB: 'from-red-600 to-orange-500',
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-gradient-to-r from-blue-800/30 to-purple-800/30 animate-gradient-flow" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-16"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Alok Ranjan Thakur
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting immersive digital experiences through
            <span className="block mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
              React & Modern Web Technologies
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-xl hover:shadow-purple-500/50 transition-all"
            >
              View Projects
              <span className="text-lg">🚀</span>
            </motion.a>

            <motion.a
              href="Alok_Resume.pdf"
              download="Alok_Resume.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-7 py-3.5 border-2 border-purple-400/30 bg-gray-800/80 text-purple-200 rounded-full backdrop-blur-md hover:bg-gray-700 transition-colors"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </div>

          {/* Colorful Tech Stack */}
          <div className="mt-12 mb-16 flex flex-wrap justify-center gap-4 opacity-90">
            {(
              [
                'React',
                'TypeScript',
                'Next.js',
                'Node.js',
                'MongoDB',
              ] as (keyof typeof techStackColors)[]
            ).map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                className={`px-5 py-2.5 bg-gradient-to-br ${techStackColors[tech]} rounded-full shadow-lg hover:shadow-xl transition-all cursor-default`}
                whileHover={{ y: -3, scale: 1.05, rotate: 2 }}
              >
                <span className="text-gray-100 text-base font-medium">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Colorful Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`p-3 rounded-full transition-colors ${link.bg} ${link.color}`}
              >
                {React.cloneElement(link.icon, {
                  className: 'w-7 h-7 text-gray-300 transition-colors',
                })}
              </motion.a>
            ))}
          </motion.div>

          {/* Latest Project Preview */}
          <motion.div
            className="relative group mt-20 mx-auto max-w-3xl bg-gray-900/70 rounded-2xl p-8 backdrop-blur-lg border border-white/10 shadow-2xl hover:border-purple-500/30 transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">
              Latest Project
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              Social Media Dashboard with Real-time Analytics
            </p>
            <div className="mockup-window bg-gray-900 border border-white/10">
              <div className="flex justify-center bg-gray-800 p-6">
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/eey3sjlp2hcpw9nbxh1c.jpg"
                  alt="Social Media Dashboard Preview"
                  className="rounded-lg shadow-xl transform group-hover:scale-[1.02] transition-transform object-cover w-full h-64"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://placehold.co/800x450/1a1a1a/fff?text=Dashboard+Preview&font=roboto';
                    target.alt = 'Dashboard Preview Placeholder';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
