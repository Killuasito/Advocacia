'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaUser, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />, 
      title: "Endereço", 
      content: ["Rua João de Abreu, N° 141, Box 31", "Parque Itamarati, Itapevi, SP"],
      map: true 
    },
    { icon: <FaPhone />, title: "Telefone", content: ["(11) 95157-3924"] },
    { icon: <FaEnvelope />, title: "Email", content: ["wemersondejesus.wp@gmail.com"] },
    { 
      social: [
        { icon: <FaInstagram className="mr-2" />, name: "Instagram", url: "https://instagram.com/advogadowemersonteixeira", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500" },
        { icon: <FaFacebookF className="mr-2" />, name: "Facebook", url: "https://facebook.com/share/1B7PCzeH31/?mibextid=wwXlfr", color: "bg-blue-600" }
      ]
    },
  ]

  return (
    <section id="contact" className="relative py-24 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:text-center mb-20"
        >
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Contato</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Entre em Contato
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Estamos à disposição para atender suas necessidades
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-yellow-500" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome Completo"
                    className="pl-12 w-full h-12 rounded-xl border-2 border-gray-700/50 bg-gray-800/50 text-white placeholder-gray-400 focus:bg-gray-800 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-yellow-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu Email"
                    className="pl-12 w-full h-12 rounded-xl border-2 border-gray-700/50 bg-gray-800/50 text-white placeholder-gray-400 focus:bg-gray-800 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Sua Mensagem"
                    className="w-full rounded-xl border-2 border-gray-700/50 bg-gray-800/50 text-white placeholder-gray-400 focus:bg-gray-800 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300 p-4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center h-12 px-6 border-2 border-yellow-500 rounded-xl text-gray-900 bg-yellow-500 hover:bg-yellow-400 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title || `social-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col space-y-4"
                  >
                    {info.title && (
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-3.5 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                          {info.content.map((line, i) => (
                            <p key={i} className="text-gray-300 leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {info.social && (
                      <div className="flex flex-col space-y-3 w-full mt-2">
                        {info.social.map((social, i) => (
                          <a 
                            key={i} 
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.color} text-white px-5 py-3 rounded-lg flex items-center justify-center font-medium hover:opacity-90 transition-opacity`}
                          >
                            {social.icon}
                            {social.name}
                          </a>
                        ))}
                      </div>
                    )}
                    
                    {info.map && (
                      <div className="w-full h-48 md:h-56 mt-4 rounded-xl overflow-hidden">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0894077795585!2d-46.93313502488342!3d-23.529049060397233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0207090071d9%3A0xf21bd58e4e57cb35!2sR.%20Jo%C3%A3o%20de%20Abreu%2C%20141%20-%20Parque%20Itamarati%2C%20Itapevi%20-%20SP%2C%2006680-030!5e0!3m2!1spt-BR!2sbr!4v1692551066757!5m2!1spt-BR!2sbr"
                          className="w-full h-full border-0"
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Localização do Escritório"
                        ></iframe>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}