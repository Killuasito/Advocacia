'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBalanceScale, FaBars, FaTimes, FaGavel, FaFileContract, FaUserFriends, FaClipboardList, FaQuestionCircle } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { useState, useEffect } from 'react'
    
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Sobre', href: '#about', icon: <FaBalanceScale className="inline-block mr-2" /> },
    { name: 'Áreas de Atuação', href: '#practice', icon: <BsFillBriefcaseFill className="inline-block mr-2" /> },
    { name: 'FAQ', href: '#faq', icon: <FaQuestionCircle className="inline-block mr-2" /> },
    { name: 'Contato', href: '#contact', icon: <IoMdMail className="inline-block mr-2" /> },
  ]

  const backgroundIcons = [
    { Icon: FaGavel, style: { top: '15%', left: '10%', opacity: 0.05, transform: 'rotate(-15deg)' }, hideOnMobile: false },
    { Icon: FaFileContract, style: { top: '45%', right: '8%', opacity: 0.05, transform: 'rotate(15deg)' }, hideOnMobile: true },
    { Icon: FaUserFriends, style: { bottom: '20%', left: '15%', opacity: 0.05, transform: 'rotate(10deg)' }, hideOnMobile: false },
    { Icon: FaClipboardList, style: { top: '30%', right: '25%', opacity: 0.05, transform: 'rotate(-10deg)' }, hideOnMobile: true },
  ]

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
      {/* Background Icons */}
      {backgroundIcons.map(({ Icon, style, hideOnMobile }, index) => (
        <div
          key={index}
          className={`absolute text-white ${hideOnMobile ? 'hidden sm:block' : ''}`}
          style={{
            ...style,
            width: '20vw', // Responsive width
            height: '20vw', // Responsive height
            maxWidth: '12rem',
            maxHeight: '12rem',
            minWidth: '6rem',
            minHeight: '6rem',
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-screen">
          {/* Fixed Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
            isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center"
                >
                  <FaBalanceScale className="text-yellow-500 text-3xl sm:text-4xl flex-shrink-0" />
                  <div className="border-l-2 border-yellow-500 pl-2 ml-2">
                    <span className="text-white text-base md:text-2xl tracking-wide font-medium leading-tight block">
                      Dr. Wemerson
                    </span>
                    <span className="text-white text-xs md:text-base tracking-wide hidden sm:block">
                      Advogado Trabalhista
                    </span>
                  </div>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-yellow-500 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center"
                      >
                        {item.icon}
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.div 
                  className="md:hidden"
                  whileTap={{ scale: 0.9 }}
                >
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-yellow-500 transition-colors duration-300 p-2"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                  </button>
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isMenuOpen ? 'auto' : 0,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="md:hidden overflow-hidden"
              >
                <motion.div className="mt-4 bg-gray-900/95 rounded-lg p-4 border border-gray-700/50">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 text-white hover:text-yellow-500 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="bg-gray-800/70 p-2 rounded-lg flex items-center justify-center w-8 h-8">
                            {React.cloneElement(item.icon, { className: "text-yellow-500 text-sm" })}
                          </div>
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </nav>

          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl tracking-tight text-white sm:text-6xl md:text-7xl font-medium">
              <span className="block">Excelência e Compromisso</span>
              <span className="block text-yellow-500 mt-2">em Advocacia</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl tracking-wide leading-relaxed">
              Defendendo seus direitos com dedicação e profissionalismo!
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-base font-medium tracking-wide rounded-none text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out md:text-lg md:px-12 uppercase"
              >
                Agende uma Consulta
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}