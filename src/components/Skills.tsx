import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { 
    category: 'Programming Languages', 
    items: ['JavaScript', 'TypeScript', 'C++', 'HTML', 'CSS'],
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    category: 'Mobile Development', 
    items: ['React Native', 'Expo'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    category: 'Frontend', 
    items: ['React', 'Next.js'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    category: 'Backend', 
    items: ['Node.js', 'Express.js'],
    gradient: 'from-orange-500 to-red-500'
  },
  { 
    category: 'Database', 
    items: ['MongoDB'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  { 
    category: 'Tools', 
    items: ['Git', 'VS Code', 'Responsive Design'],
    gradient: 'from-pink-500 to-rose-500'
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white p-6 rounded-xl shadow-lg transform-gpu"
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    className={`bg-gradient-to-r ${skillGroup.gradient} text-white px-3 py-1 rounded-full text-sm`}
                  >
                    {skill}
                  </motion.span>
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