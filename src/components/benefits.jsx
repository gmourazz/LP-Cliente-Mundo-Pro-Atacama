import React from "react";
import { motion } from "framer-motion";

/* ========= Cores ========= */
const ORANGE = "#FD4F0D";
const ORANGE_SOFT = "rgba(253, 79, 13, 0.6)";

/* ========= Animações ========= */
const popIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06 },
  }),
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, when: "beforeChildren" } },
};

const hoverFx = { y: -6, scale: 1.02 };
const tapFx = { scale: 0.98 };

/* ========= Card ========= */
const Card = ({ item, index }) => {
  const isAlimentacao = item.id === "alimentacao";

  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={hoverFx}
      whileTap={tapFx}
      className={`w-[320px] p-4 text-center flex flex-col items-center ${
        isAlimentacao ? "h-[280px]" : "h-[220px]"
      } md:w-[344px] md:h-[240px] md:p-4`}
      style={{
        backgroundColor: "#F2EA86",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
      }}
    >
      <div className="mb-2 md:mb-2">
        <img
          src={item.iconSrc}
          alt={typeof item.title === "string" ? item.title : "benefício"}
          className="w-11 h-11 md:w-14 md:h-10 object-contain"
        />
      </div>

      <h3
        className="mb-3 font-extrabold text-[30px] leading-[1.05]"
        style={{ color: ORANGE, fontFamily: '"Work Sans", sans-serif' }}
      >
        {item.title}
      </h3>

      <p
        className="text-[12px] leading-[1.15] md:text-[12px] md:leading-[1.18]"
        style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
      >
        {item.description}
      </p>
    </motion.div>
  );
};

const Benefits = () => {
  // Itens individuais (com id único)
  const items = {
    passagem: {
      id: "passagem",
      iconSrc: "/img/beneficios/passagem-aerea.png",
      title: (
        <>
          Passagem <br /> Aérea
        </>
      ),
      description: (
        <>
          Brasil / Calama / Brasil.
          <br />
          Saídas de:
          <br />
          BH/POA/GRU/CWB/FLN;
        </>
      ),
    },
    hospedagem: {
      id: "hospedagem",
      iconSrc: "/img/beneficios/hospedagem.png",
      title: "Hospedagem",
      description: <>5 noites em San Pedro do Atacama.</>,
    },
    assistencia: {
      id: "assistencia",
      iconSrc: "/img/beneficios/assistencia.png",
      title: "Assistência",
      description: (
        <>
          Acompanhamento pré-viagem
          <br />e durante a viagem 24Hrs.
        </>
      ),
    },
    alimentacao: {
      id: "alimentacao",
      iconSrc: "/img/beneficios/alimentacao.png",
      title: "Alimentação",
      description: (
        <>
          <strong>Café da manhã nos hotéis.</strong>
          <br />
          - O passeio de Piedras Rojas:
          <br />
          inclui café da manhã e almoço.
          <br />
          - Tour astronômico e passeio
          <br />
          Vallecito inclui snacks.
          <br />
          - O passeio das Lagunas de Baltinache
          <br />
          inclui café da manhã se o tour for de manhã
          <br />
          ou snacks se o passeio for à tarde.
        </>
      ),
    },
    passeios: {
      id: "passeios",
      iconSrc: "/img/beneficios/passeios.png",
      title: "Passeios",
      description: (
        <>
          - Tour Astronômico;
          <br />
          - Passeio Vallecito;
          <br />
          - Passeio Pedras Rojas e
          <br />
          Lagunas Altiplânicas;
          <br />- Lagunas Escondidas de Baltinache;
        </>
      ),
    },
    transfer: {
      id: "transfer",
      iconSrc: "/img/beneficios/transfer.png",
      title: "Transfer",
      description: (
        <>
          Transfer do aeroporto de
          <br />
          Calama até o hotel em San
          <br />
          Pedro, e do hotel de San
          <br />
          Pedro ao aeroporto de
          <br />
          Calama;
        </>
      ),
    },
    franquia: {
      id: "franquia",
      iconSrc: "/img/beneficios/bagagem.png",
      title: (
        <>
          Franquia de <br /> Bagagem
        </>
      ),
      description: (
        <>
          1 Item pessoal;
          <br />1 Bagagem de mão até 10Kg.
        </>
      ),
    },
    semPreocupacao: {
      id: "semPreocupacao",
      iconSrc: "/img/beneficios/sem-preocupacao.png",
      title: (
        <>
          Viaje sem <br /> Preocupação
        </>
      ),
      description: (
        <>
          Preenchimento de formulários
          <br />
          necessários é conosco.
        </>
      ),
    },
    seguro: {
      id: "seguro",
      iconSrc: "/img/beneficios/seguro-viagem.png",
      title: (
        <>
          Seguro <br /> Viagem
        </>
      ),
      description: (
        <>
          Plano de $ 15.000 para
          <br />
          despesas médicas.
        </>
      ),
    },
  };

  // Ordem (3x3) — e deduplicação defensiva por id
  const benefitsOrdered = [
    items.passagem,
    items.hospedagem,
    items.assistencia,
    items.alimentacao,
    items.passeios,
    items.transfer,
    items.franquia,
    items.semPreocupacao,
    items.seguro,
  ];
  const seen = new Set();
  const benefitsUnique = benefitsOrdered.filter((it) => {
    if (seen.has(it.id)) return false;
    seen.add(it.id);
    return true;
  });

  // imagens (desktop e mobile)
  const srcDesktop = "/img/imagembenefits.png";
  const srcMobile = "/img/imagembenefitsmobile.png";

  return (
    <section
      id="viagem"
      className="py-12 md:py-16 no-shadows"
      style={{ backgroundColor: "#A0D3F1", fontFamily: '"Roboto Mono", monospace' }}
    >
      <style>{`
        /* ZERA QUALQUER SOMBRA / FILTER DO BLOCO E DESCENDENTES */
        .no-shadows, .no-shadows * {
          box-shadow: none !important;
          text-shadow: none !important;
          filter: none !important;
        }
        .rounded-image { border-radius: 18px; }
      `}</style>

      <div className="container">
        {/* Linha laranja ACIMA da imagem (suave) */}
        <div className="flex justify-center mb-6">
          <div
            style={{
              width: 1250,
              maxWidth: "100%",
              height: 2,
              backgroundColor: "rgba(253, 79, 13, 0.4)",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Container principal da imagem com faixa azul */}
        <div className="relative">
          {/* Faixa azul atrás do texto ATACAMA */}
          <div 
            className="absolute top-0 left-0 w-full h-24 md:h-32 z-10"
            style={{ 
              backgroundColor: '#A0D3F1',
              marginTop: '-1px'
            }}
          />
          
          {/* Imagem topo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 mx-auto mb-6 md:mb-8"
            style={{ width: 870, height: 344, maxWidth: "100%" }}
          >
            <img
              src={srcDesktop}
              alt="Atacama — imagem de abertura"
              className="hidden md:block w-full h-full object-cover rounded-image"
            />
            <img
              src={srcMobile}
              alt="Atacama — imagem de abertura (mobile)"
              className="block md:hidden w-full h-auto object-cover rounded-image"
            />
          </motion.div>
        </div>

        {/* ===== Bloco laranja Duração — CENTRALIZADO ===== */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="mb-12 -mt-6 md:mt-0"
          >
            <div
              className="flex items-center justify-center gap-3 px-5"
              style={{
                width: "280px",
                height: "72px",
                backgroundColor: ORANGE,
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/img/tempo.png"
                alt=""
                className="w-[42px] h-[36px] md:w-[54px] md:h-[44px] object-contain"
              />
              <span
                className="font-extrabold text-[16px] md:text-[22px]"
                style={{ color: "#FAF3E1", fontFamily: '"Work Sans", sans-serif', lineHeight: 1 }}
              >
                Duração: 6 dias
              </span>
            </div>
          </motion.div>
        </div>

        {/* TÍTULO + TEXTO (1) */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center text-[30px] md:text-[45px]"
          style={{ color: ORANGE, fontFamily: '"Work Sans", sans-serif', fontWeight: 800, lineHeight: 1.02 }}
        >
          <strong>Viva intensamente o Atacama</strong>
        </motion.h2>

        {/* MOBILE: quebras de linha visuais */}
        <div
          className="block md:hidden mt-3 mb-10 text-center text-[12px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p>Nosso pacote de viagem inclui passeios pelas</p>
          <p>principais paisagens da região, visita a águas</p>
          <p>termais e contato com a cultura local.</p>
          <p>A experiência conta com hospedagem confortável</p>
          <p>e acompanhamento de guias especializados para</p>
          <p>tornar a viagem mais completa.</p>
        </div>

        {/* DESKTOP: parágrafo único */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="hidden md:block mt-6 mb-20 text-center text-[18px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p>Nosso pacote de viagem inclui passeios pelas principais paisagens</p>
          <p>da região, visita a águas termais e contato com a cultura local.</p>
          <p>A experiência conta com hospedagem confortável e acompanhamento</p>
          <p>de guias especializados para tornar a viagem mais completa.</p>
        </motion.div>

        {/* LINHA (entre textos) */}
        <div className="flex justify-center mb-10">
          <div
            style={{
              width: 1250,
              maxWidth: "100%",
              height: 2,
              backgroundColor: ORANGE_SOFT,
              borderRadius: 2,
            }}
          />
        </div>

        {/* TÍTULO + TEXTO (2) */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center text-[30px] md:text-[45px]"
          style={{ color: ORANGE, fontFamily: '"Work Sans", sans-serif', fontWeight: 800, lineHeight: 1.02 }}
        >
          <strong>Mergulhe na Experiência Atacama</strong>
        </motion.h3>

        <div
          className="block md:hidden mt-3 mb-8 text-center text-[12px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p>Explore o Atacama sem preocupações!</p>
          <p>Nosso pacote de viagem exclusivo</p>
          <p>oferece diversos serviços selecionados</p>
          <p>para tornar sua viagem incrível!</p>
        </div>

        <div
          className="hidden md:block mt-8 mb-10 text-center text-[18px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p>Explore o Atacama sem preocupações! Nosso pacote de viagem exclusivo</p>
          <p>oferece diversos serviços selecionados para tornar sua viagem incrível!</p>
        </div>

        {/* Grade cards amarelos beneficios */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-stretch gap-x-10 md:gap-x-10 gap-y-10 md:gap-y-6 mb-8"
        >
          {benefitsUnique.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </motion.div>

        {/* Pacote Não Inclui */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3
            className="mb-4 md:mb-6"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontWeight: 800,
              fontSize: 35,
              lineHeight: 1.05,
            }}
          >
            Pacote Não Inclui
          </h3>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center max-w-4xl mx-auto">
            {[
              { text: "Passeios não descritos", iconSrc: "/img/beneficios/padlock.png" },
              { text: "Demais serviços", iconSrc: "/img/beneficios/Group.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={popIn}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={hoverFx}
                whileTap={tapFx}
                className="flex items-center justify-start text-left"
                style={{
                  width: "320px",
                  height: "120px",
                  backgroundColor: "#AC0039",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center gap-2.5 md:gap-6 w-full">
                  <img src={item.iconSrc} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  <p
                    className="tracking-[-0.01em]"
                    style={{ color: "#F9F2E1", fontFamily: '"Work Sans", sans-serif', fontWeight: 800, fontSize: 20, lineHeight: 1.15 }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;