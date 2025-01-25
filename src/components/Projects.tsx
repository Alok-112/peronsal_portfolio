import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ShoppingCart, LayoutDashboard, Palette } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern online shopping experience with product filtering, cart management, and secure checkout',
    image: 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
    tags: ['React', 'Redux', 'Tailwind', 'Stripe'],
    color: 'from-blue-600 to-cyan-500',
    icon: <ShoppingCart className="w-6 h-6 text-white" />
  },
  {
    title: 'Dashboard Analytics',
    description: 'Interactive data visualization dashboard with real-time metrics and reporting features',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'AWS'],
    color: 'from-purple-600 to-pink-500',
    icon: <LayoutDashboard className="w-6 h-6 text-white" />
  },
  {
    title: 'Portfolio Builder',
    description: 'Responsive portfolio generator with theme customization and CMS integration',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
    tags: ['React', 'Framer Motion', 'Sanity.io', 'SCSS'],
    color: 'from-red-500 to-orange-400',
    icon: <Palette className="w-6 h-6 text-white" />
  }
];

// Color mapping for tags
const tagColors: { [key: string]: string } = {
  'React': 'from-blue-600 to-cyan-500',
  'Redux': 'from-purple-600 to-pink-500',
  'Tailwind': 'from-cyan-500 to-blue-500',
  'Stripe': 'from-violet-600 to-indigo-500',
  'Next.js': 'from-gray-800 to-gray-600',
  'TypeScript': 'from-blue-600 to-cyan-600',
  'Chart.js': 'from-yellow-600 to-amber-500',
  'AWS': 'from-orange-500 to-red-500',
  'Framer Motion': 'from-pink-500 to-purple-500',
  'Sanity.io': 'from-red-500 to-orange-400',
  'SCSS': 'from-pink-500 to-rose-400'
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Creations
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform-gpu border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10`} />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className={`p-2 rounded-lg backdrop-blur-sm bg-gradient-to-br ${project.color}`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">{project.title}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                {/* Colorful Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${
                        tagColors[tag] || 'from-gray-600 to-gray-400'
                      } text-white shadow-sm hover:shadow-md transition-all`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium">Source Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Want to see more? Check out my complete portfolio on
          </p>
          <motion.a
            href="https://github.com/alok-112"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            <Github size={20} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;