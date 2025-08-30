'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAngleDown, FaQuestionCircle } from 'react-icons/fa'
import Script from 'next/script'

export default function FAQ() {
  const faqItems = [
    {
      question: "Quanto tempo tem de estabilidade após a gravidez?",
      answer: "A estabilidade gestacional vai desde a confirmação da gestação, até 05 meses após o parto."
    },
    {
      question: "O que é dispensa discriminatória?",
      answer: "É a demissão baseada em preconceito, doença ou condição pessoal. Podendo gerar direito a reintegração ou indenização por danos."
    },
    {
      question: "Quando a doença é considerada ocupacional?",
      answer: "Quando está ligada diretamente ás condições do ambiente ou atividade laboral, o trabalhador pode ter direito á estabilidade e benefícios previdenciários."
    },
    {
      question: "Quando cabe reintegração ao emprego?",
      answer: "Quando a demissão ocorre de forma ilegal, como funcionário membros da cipa, gestantes ou que sofreram acidente de trabalho."
    },
    {
      question: "Qual a diferença entre insalubridade e periculosidade?",
      answer: "Insalubridade: exposição a agentes nocivos a saúde (ruído, calor, produtos químicos e biológicos). Já a Periculosidade: risco de vida (explosivos, eletricidade, inflamáveis e etc.)."
    },
    {
      question: "Quem tem direito a rescisão indireta?",
      answer: "Todo funcionário tem direito a ingressa pedindo a rescisão indireta quando: o empregador comete faltas graves (falta de pagamento de salários, falta do pagamento do FGTS, etc.)"
    },
    {
      question: "Como funciona a rescisão de contrato de trabalho?",
      answer: "A rescisão contratual ocorre tanto por inciativa do empregador, quanto por iniciativa do empregado, sendo as modalidades (sem justa causa, com justa causa ou rescisão indireta)."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-black">
      {/* Structured data for FAQ */}
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-yellow-500 font-medium tracking-wide uppercase">
            Dúvidas Frequentes
          </h2>
          <p className="mt-2 text-4xl tracking-tight text-white font-medium">
            Perguntas & Respostas
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block h-1 w-40 rounded-full bg-yellow-500"></span>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Esclarecemos as principais dúvidas sobre processos trabalhistas e seus direitos.
            Caso sua dúvida não esteja aqui, entre em contato conosco.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-5 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center space-x-3">
                  <FaQuestionCircle className="text-yellow-500 flex-shrink-0" />
                  <span className="text-lg font-medium text-white">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaAngleDown className="text-yellow-500 text-xl" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-3 border-t border-gray-700/50 mt-2">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Ainda tem dúvidas? Entre em contato diretamente com nosso escritório
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-base font-medium rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  )
}
