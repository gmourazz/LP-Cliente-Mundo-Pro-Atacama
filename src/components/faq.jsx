import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Quebra por parágrafos e aplica tipografia
  const renderAnswer = (text, small = false) => {
    const parts = String(text).split(/\n\s*\n/);
    return parts.map((chunk, i) => (
      <p
        key={i}
        style={{
          color: "#000000",
          fontSize: small ? "11px" : "14px",
          textAlign: "center",
          lineHeight: 1.35,
          letterSpacing: "0.1px",
          marginTop: i === 0 ? 0 : "1.25em",
        }}
      >
        {chunk}
      </p>
    ));
  };

  const faqs = [
    { 
      question: "Essa viagem é em excursão?", 
      answer: "Não, nossa viagem não é em grupo fechado, o que significa que você terá a liberdade de explorar e aproveitar cada momento conforme suas preferências. Durante os passeios, você estará acompanhado por um guia especializado que irá fornecer informações e orientações, garantindo uma experiência enriquecedora. Além disso, você terá a oportunidade de interagir e conhecer outras pessoas que também estão participando dos passeios." 
    },
    { 
      question: "Os ingressos estão inclusos?", 
      answer: "Dos passeios inclusos no pacote, apenas Lagunas Escondidas de Baltinache (10.000 pesos chilenos por pessoa) NÃO ESTÁ INCLUSO NO PACOTE. O ingresso deverá ser pago EM ESPÉCIE no dia do passeio. Os ingressos de Piedras Rojas/Lagunas Altiplânicas estão inclusos no pacote." 
    },
    { 
      question: "Que dinheiro devo levar?", 
      answer: "Você pode levar dólar para trocar por pesos chilenos nas casas de câmbio de San Pedro de Atacama. Cartões de crédito também são muito bem aceitos em restaurantes e mercados." 
    },
    { 
      question: "Os transportes até pontos turísticos estão inclusos?", 
      answer: "Sim, todos os passeios descritos incluem transporte desde o hotel." 
    },
    { 
      question: "O pacote inclui transfer do aeroporto ao hotel?", 
      answer: "Sim, os voos chegam em Calama. De Calama até San Pedro são 100 km. O transfer de chegada e saída está incluso." 
    },
    { 
      question: "Há alguma restrição de idade para participar das atividades no Deserto do Atacama?", 
      answer: "Em geral, não há restrição de idade específica para participar das atividades no Deserto do Atacama. No entanto, algumas atividades podem exigir um nível mínimo de condicionamento físico e mobilidade, principalmente as que envolvem caminhadas ou esforço físico mais intenso." 
    },
    { 
      question: "Qual o gasto médio com alimentação?", 
      answer: "Em geral, considerando refeições em restaurantes simples, é possível estimar um gasto médio de cerca de 7.000 a 20.000 pesos chilenos por pessoa por refeição. Esse valor pode ser maior em restaurantes mais sofisticados ou com opções gourmet." 
    },
    { 
      question: "Como funciona o suporte da agência durante a viagem?", 
      answer: "Viajar com a Mundo Pró é certeza de satisfação. Aqui você tem suporte 24h durante a viagem. Estaremos à disposição para tornar sua viagem perfeita." 
    },
    { 
      question: "É possível personalizar o itinerário do pacote de acordo com as preferências do cliente?", 
      answer: "Sim, podemos aumentar ou diminuir noites no Atacama. Também é possível incluir Santiago na viagem, visitando a cidade por alguns dias antes ou depois do Atacama.\n\nTambém é possível incluir outros passeios no pacote. Tour Astronômico e Geysers El Tatio são dois passeios muito famosos na região." 
    },
    { 
      question: "Quais são os documentos necessários para viajar para o Atacama?", 
      answer: "Passaporte válido ou RG com menos de 10 anos de emissão. Cartão de entrada e saída (Tarjeta de Entrada y Salida): Ao chegar no aeroporto, você receberá um cartão de entrada e saída, que é um documento migratório. Preencha-o corretamente e mantenha-o em um local seguro, pois será necessário apresentá-lo ao deixar o país." 
    },
    { 
      question: "Qual é a melhor época do ano para visitar o Atacama?", 
      answer: "De Março a Novembro. Nesse período, as temperaturas são mais amenas e a quantidade de chuvas é menor, proporcionando condições ideais para explorar as belezas do deserto. Durante o verão, especialmente nos meses de dezembro a março, o Atacama pode ser bastante quente, com temperaturas acima dos 30°C." 
    },
    { 
      question: "Quais são os métodos de pagamento aceitos para o pacote de viagem?", 
      answer: "10x sem juros no cartão de crédito." 
    },
    { 
      question: "Mas moro longe da agência, como vou fazer o pagamento?", 
      answer: "Não se preocupe. Nosso atendimento é 100% online e seguro." 
    },
  ];

  return (
    <section
      id="duvidas"
      className="py-10 no-shadows"
      style={{ backgroundColor: "#A0D3F1", fontFamily: '"Roboto Mono", monospace' }}
    >
      <style>{`
        .no-shadows, .no-shadows * { box-shadow:none !important; text-shadow:none !important; filter:none !important; }
      `}</style>

      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        {/* Cabeçalho Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/img/beneficios/question.png" alt="Dúvidas frequentes" className="w-[72px] h-[72px] object-contain" />
            <h2 className="font-extrabold leading-tight" style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', fontSize: "65px" }}>
              Dúvidas Frequentes
            </h2>
          </div>
        </motion.div>

        {/* Cabeçalho Mobile */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="md:hidden mb-5 px-3">
          <div className="flex items-center gap-3">
            <img src="/img/beneficios/question.png" alt="Dúvidas frequentes" className="w-12 h-12 object-contain" />
            <h2 className="font-extrabold leading-[1] text-[35px]" style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif' }}>
              Dúvidas
              <br /> Frequentes
            </h2>
          </div>
        </motion.div>

        {/* Lista Desktop */}
        <div className="space-y-4 mx-auto hidden md:block" style={{ width: "1154px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="rounded-2xl overflow-hidden" style={{ width: "1154px" }}>
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative flex items-center justify-center text-center"
                  style={{ backgroundColor: "#FD4F0D", width: "1154px", height: "80px", paddingLeft: "24px", paddingRight: "56px" }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="block" style={{ color: "#FFFFFF", fontFamily: '"Work Sans", sans-serif', fontWeight: 700, fontSize: "25px" }}>
                    {faq.question}
                  </span>

                  <div className="absolute" style={{ right: "16px", top: "50%", transform: "translateY(-50%)", color: "#FFFFFF" }}>
                    {isOpen ? <ChevronUp className="w-7 h-7" aria-hidden="true" /> : <ChevronDown className="w-7 h-7" aria-hidden="true" />}
                  </div>
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ backgroundColor: "#FFF2A6", width: "1154px", overflow: "hidden" }}
                    >
                      <div className="h-full w-full flex items-center justify-center px-6 py-4">
                        <div className="w-full" style={{ maxWidth: "920px" }}>
                          {renderAnswer(faq.answer)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Lista Mobile */}
        <div className="md:hidden px-4 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="rounded-2xl overflow-hidden">
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full flex items-center justify-between px-4 h-14 rounded-2xl"
                  style={{ backgroundColor: "#FD4F0D" }}
                  aria-expanded={isOpen}
                  aria-controls={`m-faq-content-${index}`}
                >
                  <span className="text-left font-bold" style={{ color: "#FFFFFF", fontFamily: '"Work Sans", sans-serif', fontSize: "14px", lineHeight: 1.1 }}>
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-white" aria-hidden="true" /> : <ChevronDown className="w-5 h-5 text-white" aria-hidden="true" />}
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`m-faq-content-${index}`}
                      key="m-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden rounded-2xl"
                      style={{ backgroundColor: "#FFF2A6" }}
                    >
                      <div className="px-4 py-3">
                        <div className="text-[#000]">{renderAnswer(faq.answer, true)}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;