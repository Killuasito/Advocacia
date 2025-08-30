"use client"
import { motion } from "framer-motion";
import { FaBriefcase, FaHandshake, FaUserTie } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaBriefcase className="h-6 w-6" />,
      title: "Experiência em Direito Trabalhista",
      description:
        "Especialização em casos trabalhistas complexos e resultados expressivos para nossos clientes.",
    },
    {
      icon: <FaHandshake className="h-6 w-6" />,
      title: "Atendimento Personalizado",
      description:
        "Cada processo é único. Oferecemos soluções personalizadas com atendimento dedicado.",
    },
    {
      icon: <FaUserTie className="h-6 w-6" />,
      title: "Negociações Estratégicas",
      description:
        "Expertise em acordos e negociações, com foco em resultados positivos para nossos clientes.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-gray-800"
    >
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
          className="lg:text-center"
        >
          <h2 className="text-base text-yellow-500 font-medium tracking-wide uppercase">
            Sobre Nós
          </h2>
          <p className="mt-2 text-4xl tracking-tight text-white sm:text-5xl font-medium">
            Tradição em Direito Trabalhista
          </p>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 lg:mx-auto leading-relaxed tracking-wide">
            Nosso escritório é especializado em oferecer soluções eficazes <br/>
            para questões trabalhistas, sempre com o foco principal no interesse dos nossos clientes. <br/>
            Buscamos uma solução rápida e eficiente, garantindo o cumprimento de todos os prazos <br/>
            e adotando as estratégias jurídicas mais adequadas para cada caso, a fim de alcançar o melhor resultado possível.
          </p>
        </motion.div>

        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
              >
                <dt className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white transform transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <p className="ml-4 text-lg font-medium text-white transition-colors duration-300 group-hover:text-yellow-500">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-4 text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8">
            Valores do Nosso Escritório
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 italic bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 max-w-4xl mx-auto rounded-lg border border-gray-700/50 leading-relaxed">
            &quot;Para mim, a integridade é o fundamento da advocacia. <br />
            Construimos nossa credidiblidade e reputação através da conduta ética e
            da total transparência. <br />
            Acredito que o verdadeiro sucesso profissional esta na maneira como
            conduzimos cada passo a passo do nosso trabalho, <br />
            desde o primeiro atendimento aos nossos clientes até o resultado da
            final.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}