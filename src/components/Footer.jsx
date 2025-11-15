import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/RAMYA2927',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/padala-ramya-4263a833b/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:ramyapadala192@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              © {currentYear} Padala Ramya. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center md:justify-start gap-2">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-blue-600 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

