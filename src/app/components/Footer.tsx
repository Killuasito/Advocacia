'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBalanceScale } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/advogadowemersonteixeira' },
    { name: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com/share/1B7PCzeH31/?mibextid=wwXlfr' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black via-black to-black pt-16 pb-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaBalanceScale className="text-yellow-500 text-4xl" />
              <h3 className="text-white text-2xl font-medium border-l-2 border-yellow-500 pl-3">
                Dr. Wemerson Texeira de Jesus
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Comprometidos com a excelência jurídica e a satisfação dos nossos clientes, 
              oferecendo soluções jurídicas personalizadas e eficientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-yellow-500/30 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-yellow-500 text-lg" />
                  <span className="text-sm text-gray-400">Rua João de Abreu, N° 141, Box 31 - Parque Itamarati, Itapevi - SP</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-yellow-500/30 transition-colors duration-300">
                  <FaPhone className="text-yellow-500 text-lg" />
                  <span className="text-sm text-gray-400">(11) 95157-3924</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-yellow-500/30 transition-colors duration-300">
                  <FaEnvelope className="text-yellow-500 text-lg" />
                  <span className="text-sm text-gray-400">wemersondejesus.wp@gmail.com</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800/50 h-full p-3">
                <h3 className="text-white text-base font-semibold border-b border-gray-800/50 pb-2 mb-3">Links Rápidos</h3>
                <ul className="space-y-2">
                  {['Sobre Nós', 'Áreas de Atuação', 'Contato'].map((item) => (
                    <li key={item}>
                      <Link 
                        href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                        className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center space-x-2 group text-base"
                      >
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800/50 h-full p-3">
                <h3 className="text-white text-base font-semibold border-b border-gray-800/50 pb-2 mb-3">Redes Sociais</h3>
                <div className="flex flex-col space-y-3 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-white transform hover:scale-110 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800/50"
        >
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Tiago da Silva Ferreira. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}