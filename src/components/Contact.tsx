import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "work.alok.thakur@gmail.com",
      link: "mailto:work.alok.thakur@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 9871902201",
      link: "tel:+919871902201"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "New Delhi, India",
      link: "https://maps.app.goo.gl/newdelhi"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 dark:text-gray-200"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;