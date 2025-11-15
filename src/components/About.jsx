import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Lightbulb, Code, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const strengths = [
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Meticulous attention to detail in every project',
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Creative solutions to complex problems',
    },
    {
      icon: Code,
      title: 'Tech-Savvy',
      description: 'Strong foundation in ML, AI, and web development',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Genuine enthusiasm for continuous learning',
    },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Motivated and detail-oriented <strong className="text-gray-900 dark:text-white">AI/ML Software Engineer (Fresher)</strong> with 
              strong foundations in machine learning, Python, and web development. Passionate about 
              building innovative and user-friendly applications using React, Tailwind CSS, and modern 
              technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Eager to apply analytical thinking and creativity to solve real-world problems while 
              continuously learning and growing. I thrive on challenges and enjoy working on projects 
              that make a meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                AI/ML Engineer
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                Web Developer
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <strength.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

