/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about-me" className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-yellow-500 rounded-lg blur opacity-25"></div>
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-700/50 shadow-2xl aspect-[4/5]">
                <img 
                  src="/fotoadvogado.jpg" 
                  alt="Dr. Wemerson Texeira de Jesus"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-bold text-white">Dr. Wemerson Texeira de Jesus</h3>
                <p className="text-yellow-500 font-medium">Advogado Trabalhista</p>
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-base text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Sobre Mim
            </h2>
            <h3 className="text-3xl font-bold text-white mb-6">
              Dedicação e excelência na advocacia trabalhista
            </h3>
            <div className="prose prose-lg prose-invert mb-6">
              <p className="text-gray-300">
                Eu sou Wemerson, casado, advogado a 2 anos, com atuação de trabalho na área a mais de 9
anos, dedicado, honesto, confiável, transparente e determinado, sempre no intuito de garantir
o melhor trabalho e desempenho em todas as atuações.
              </p>
              <p className="text-gray-300">
                O direito para mim é dar voz a quem não consegue falar, lutar por alguém que não tem força
para lutar, e com esse pensamento e dedicação, trabalho com garra e satisfação tanto no
atendimento quanto nos resultados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}