import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Layout, Server, Database, Wrench } from 'lucide-react';

const skills = [
  { 
    category: 'Programming Languages', 
    items: ['JavaScript', 'TypeScript', 'C++', 'HTML', 'CSS'],
    icon: <Code className="w-6 h-6" />,
    gradient: 'from-blue-600 to-cyan-500'
  },
  { 
    category: 'Mobile Development', 
    items: ['React Native', 'Expo', 'Android Studio', 'Xcode'],
    icon: <Smartphone className="w-6 h-6" />,
    gradient: 'from-emerald-600 to-teal-500'
  },
  { 
    category: 'Frontend', 
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
    icon: <Layout className="w-6 h-6" />,
    gradient: 'from-purple-600 to-pink-500'
  },
  { 
    category: 'Backend', 
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
    icon: <Server className="w-6 h-6" />,
    gradient: 'from-orange-600 to-red-500'
  },
  { 
    category: 'Database', 
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
    icon: <Database className="w-6 h-6" />,
    gradient: 'from-indigo-600 to-blue-500'
  },
  { 
    category: 'Tools', 
    items: ['Git', 'VS Code', 'Docker', 'Figma'],
    icon: <Wrench className="w-6 h-6" />,
    gradient: 'from-pink-600 to-rose-500'
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="skills">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-repeat dark:opacity-10" />
  <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent" />

  <div className="container mx-auto px-4 relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
    >
      Technical Expertise
    </motion.h2>

    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skillGroup, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.03,
            y: -5,
            transition: { type: "spring", stiffness: 300 }
          }}
          className="group relative bg-gray-800 dark:bg-gray-700 p-6 rounded-2xl shadow-2xl border border-gray-700 hover:shadow-3xl transition-all"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
          
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${skillGroup.gradient} shadow-lg`}>
              {skillGroup.icon}
            </div>
            <div>
              <h3 className={`text-2xl font-bold bg-gradient-to-br ${skillGroup.gradient} bg-clip-text text-transparent`}>
                {skillGroup.category}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillGroup.items.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1.5 text-sm font-medium rounded-full bg-gray-700/50 dark:bg-gray-600 border border-gray-600/30 dark:border-gray-500 backdrop-blur-sm hover:bg-gradient-to-br ${skillGroup.gradient} hover:text-white hover:border-transparent transition-all`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Animated tech stack */}
    <motion.div 
      className="mt-20 flex justify-center gap-4 flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'AWS'].map((tech, index) => (
        <motion.div
          key={tech}
          animate={{ 
            y: [0, -15, 0],
            transition: {
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="px-4 py-2 bg-gray-700 dark:bg-gray-800 border-2 border-gray-600 rounded-full shadow-lg backdrop-blur-sm hover:shadow-xl transition-all"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
            {tech}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

  );
};

export default Skills;