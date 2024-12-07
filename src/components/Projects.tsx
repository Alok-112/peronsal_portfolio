import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Expense Tracker App',
    description: 'A React Native app for tracking daily expenses with features like adding, editing, and categorizing expenses.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
    tags: ['React Native', 'Expo', 'AsyncStorage'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Weather App',
    description: 'Built using React Native and OpenWeather API, displays current weather conditions and forecasts.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
    tags: ['React Native', 'API Integration', 'Geolocation'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Task Manager',
    description: 'A task management app with features like to-do lists, reminders, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
    tags: ['React Native', 'Redux', 'Notifications'],
    color: 'from-emerald-500 to-teal-500'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu"
            >
              <div className="relative h-48 overflow-hidden group">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1 }}
                      className={`bg-gradient-to-r ${project.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r ${project.color}`}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r ${project.color}`}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;