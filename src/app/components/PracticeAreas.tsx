'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaHeartbeat, FaMask, FaExclamationTriangle, FaExchangeAlt, 
  FaUserSlash, FaBabyCarriage, FaClock, FaFileSignature, 
  FaUserTie, FaHandHoldingUsd, FaDoorOpen, FaExclamation, 
  FaMoneyBillWave, FaFileInvoiceDollar, FaTimes 
} from 'react-icons/fa'

export default function PracticeAreas() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const areas = [
    {
      title: "Acidente de Trabalho e Doença Ocupacional",
      detailedDescription: "Quando um trabalhador sofre um acidente enquanto está exercendo sua função ou desenvolve uma doença causada pelas condições do trabalho, ele tem alguns direitos garantidos. Entre eles estão a estabilidade no emprego por um período, benefícios pagos pelo INSS e, em certos casos, o direito de receber uma indenização pelos prejuízos sofridos.",
      icon: <FaHeartbeat className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Adicional de Insalubridade e Periculosidade",
      detailedDescription: "Profissionais que trabalham em ambientes com substâncias ou condições prejudiciais à saúde (insalubridade), ou que enfrentam riscos que podem colocar sua vida em perigo (periculosidade), têm direito a receber um valor extra no salário. Esse adicional varia de acordo com o nível de risco envolvido e é definido com base em um laudo técnico especializado.",
      icon: <FaMask className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Assédio Moral e Sexual no Ambiente de Trabalho",
      detailedDescription: "São atitudes abusivas e repetitivas que geram desconforto, humilhação ou sofrimento psicológico ao trabalhador. No caso do assédio sexual, há envolvimento de comportamentos com conotação sexual sem consentimento. Ambos os tipos de assédio violam a dignidade da pessoa e podem ser denunciados judicialmente, com possibilidade de compensação por danos.",
      icon: <FaExclamationTriangle className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Desvio e Acúmulo de Função",
      detailedDescription: "O desvio de função acontece quando o empregado passa a realizar atividades que não estão previstas em seu contrato de trabalho. Já o acúmulo ocorre quando ele assume várias funções ao mesmo tempo, sem receber um aumento proporcional no salário. Em ambos os casos, o trabalhador pode ter direito a uma compensação financeira.",
      icon: <FaExchangeAlt className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Demissão por Discriminação",
      detailedDescription: "Acontece quando o desligamento do trabalhador é motivado por preconceitos relacionados à sua raça, gênero, orientação sexual, religião, estado de saúde ou deficiência. Nesses casos, é possível buscar na Justiça a anulação da demissão, com direito à reintegração ao cargo ou ao recebimento de uma indenização.",
      icon: <FaUserSlash className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Direito à Estabilidade da Gestante",
      detailedDescription: "A mulher que descobre estar grávida tem o direito de manter seu emprego desde o momento em que a gravidez é confirmada até cinco meses depois do nascimento do bebê. Esse direito é garantido pela Constituição, mesmo que ela não tenha informado o empregador sobre a gestação logo no início.",
      icon: <FaBabyCarriage className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Trabalho Extra e Turno da Noite",
      detailedDescription: "A legislação define um limite para a jornada de trabalho. Quando o funcionário trabalha além desse limite, ele tem direito a receber pelo menos 50% a mais por cada hora extra. Já quem trabalha à noite, entre 22h e 5h, recebe um valor adicional, conforme o que está previsto em leis ou acordos feitos entre empresa e sindicato.",
      icon: <FaClock className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Vínculo de Emprego Mesmo Sem Registro",
      detailedDescription: "Mesmo que o contrato de trabalho não esteja formalizado na carteira, a relação de emprego pode ser reconhecida quando há prestação contínua de serviços, com subordinação e pagamento. Esse reconhecimento garante ao trabalhador todos os direitos previstos na CLT e também os benefícios da Previdência Social.",
      icon: <FaFileSignature className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "O que é Pejotização",
      detailedDescription: "Pejotização acontece quando uma empresa contrata uma pessoa como se fosse uma empresa (PJ), mesmo que ela exerça funções típicas de um empregado com carteira assinada. Se essa pessoa trabalha de forma contínua, recebe pagamento regular, segue ordens da empresa e realiza o serviço pessoalmente, pode ser reconhecido o vínculo empregatício — mesmo que o contrato seja como PJ.",
      icon: <FaUserTie className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Reintegração no Emprego",
      detailedDescription: "Em situações específicas, como a demissão de uma gestante, de um funcionário que sofreu acidente ou de um representante da CIPA, a Justiça do Trabalho pode determinar que o trabalhador seja readmitido. Essa medida garante a estabilidade no emprego e a continuidade do contrato de trabalho.",
      icon: <FaHandHoldingUsd className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Rescisão/Encerramento do Contrato de Trabalho",
      detailedDescription: "Quando o vínculo empregatício chega ao fim — seja por decisão do trabalhador ou da empresa — a legislação garante o pagamento das verbas proporcionais devidas. Isso inclui aviso prévio, férias (tanto vencidas quanto proporcionais), 13o salário, saldo de salário e o FGTS, conforme o tipo de desligamento ocorrido.",
      icon: <FaDoorOpen className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Rescisão Indireta/Quando o Empregador Comete Falta Grave",
      detailedDescription: "A rescisão indireta acontece quando o patrão age de forma grave e incorreta — como atrasar salários com frequência, praticar assédio ou colocar o trabalhador em situações de risco. Nesses casos, o funcionário pode entrar com pedido na Justiça para encerrar o contrato e, se o juiz concordar, ele tem direito a receber todas as verbas como se tivesse sido demitido sem justa causa.",
      icon: <FaExclamation className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Salários por Fora/Pagamentos Não Registrados",
      detailedDescription: "Isso ocorre quando parte do salário é paga sem registro, sem que os devidos encargos sejam recolhidos. Essa prática é proibida por lei e pode levar a ações judiciais para que os valores não declarados sejam reconhecidos e incorporados aos direitos do trabalhador.",
      icon: <FaMoneyBillWave className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Verbas Rescisórias",
      detailedDescription: "Quando o contrato de trabalho chega ao fim, o trabalhador tem direito a receber alguns pagamentos obrigatórios. Esses valores podem incluir: aviso prévio, férias (usadas e proporcionais), 13° salário, multa de 40% sobre o FGTS, entre outros. A lei garante que esses cálculos sejam feitos corretamente e que o pagamento seja realizado conforme o tipo de desligamento.",
      icon: <FaFileInvoiceDollar className="w-8 h-8 text-yellow-500" />
    }
  ]

  return (
    <section id="practice" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:text-center mb-16"
        >
          <h2 className="text-base text-yellow-500 font-medium tracking-wide uppercase">
            Áreas de Atuação
          </h2>
          <p className="mt-2 text-4xl tracking-tight text-white sm:text-5xl font-medium">
            Especialidades em Direito do Trabalho
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto leading-relaxed tracking-wide">
            Oferecemos serviços especializados em todas as áreas do Direito do Trabalho, 
            com profissionais experientes e abordagem moderna para relações trabalhistas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div 
                className={`h-full bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedCard(index)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.8, rotateY: 90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.8, rotateY: 90 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-gray-900 max-w-2xl w-full rounded-xl p-8 border border-yellow-500/50 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedCard(null)}
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-lg">
                    {areas[selectedCard].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-500">
                    {areas[selectedCard].title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {areas[selectedCard].detailedDescription}
                  </p>
                  
                  <div className="pt-4 flex justify-end">
                    <button 
                      className="px-6 py-2 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                      onClick={() => setSelectedCard(null)}
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}