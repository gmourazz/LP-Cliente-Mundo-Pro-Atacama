import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const teamPhotos = [
    { label: "Funcionário 1", src: "/img/funcionarios/funcionarioum.png" },
    { label: "Funcionário 2", src: "/img/funcionarios/funcionariodois.png" },
    { label: "Funcionário 3", src: "/img/funcionarios/funcionariotres.png" },
    { label: "Funcionário 4", src: "/img/funcionarios/funcionarioquatro.png" },
    { label: "Funcionário 5", src: "/img/funcionarios/funcionariocinco.png" },
    { label: "Funcionário 6", src: "/img/funcionarios/funcionarioseis.png" },
    { label: "Funcionário 7", src: "/img/funcionarios/funcionariosete.png" },
    { label: "Funcionário 8", src: "/img/funcionarios/funcionariooito.png" },
    { label: "Funcionário 9", src: "/img/funcionarios/funcionarionove.png" },
    { label: "Funcionário 10", src: "/img/funcionarios/funcionariodez.png" },
    { label: "Funcionário 11", src: "/img/funcionarios/funcionarioonze.png" },
    { label: "Funcionário 12", src: "/img/funcionarios/funcionariodoze.png" },
    { label: "Funcionário 13", src: "/img/funcionarios/funcionariotreze.png" },
    {
      label: "Funcionário 14",
      src: "/img/funcionarios/funcionarioquatorze.png",
    },
    { label: "Funcionário 15", src: "/img/funcionarios/funcionarioquinze.png" },
  ];

  const cards = [
    {
      imgSrc: "/img/beneficios/nossojeito.png",
      title: "Nosso jeito de realizar sonhos",
      description:
        "Aqui você fala com gente de verdade. A gente cuida da sua viagem como se fosse nossa. Você só precisa fazer as malas.",
    },
    {
      imgSrc: "/img/beneficios/suporte.png",
      title: "Suporte 24h",
      description:
        "Aqui na Mundo Pró não tem 'boa viagem e tchau'. Acompanhamos você em cada passo.",
    },
    {
      imgSrc: "/img/beneficios/cifrao.png",
      title: "Viaje mais, pagando menos",
      description:
        "A gente não trabalha com pacotes que parecem bons demais pra ser verdade. O menor preço é garantido porque pesquisamos tudo, com esforço e inteligência, até achar a melhor opção de verdade.",
    },
  ];

  return (
    <section
      id="sobre"
      className="relative overflow-visible pt-16 md:pt-20 pb-0"
      style={{
        backgroundColor: "#FD4F0D",
        fontFamily: '"Roboto Mono", monospace',
      }}
    >
      {/* faixa clara decorativa à esquerda */}
      <div
        aria-hidden
        className="absolute top-0 left-0 h-full"
        style={{ width: 8, background: "rgba(255,255,255,0.35)" }}
      />

      <div className="container relative mx-auto px-4">
        {/* ===== topo (texto) ===== */}
        <div className="grid md:grid-cols-2 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-left font-extrabold leading-[1.02] md:leading-tight text-[32px] sm:text-[36px] md:text-[55px]"
              style={{
                color: "#FFFFFF",
                fontFamily: '"Work Sans", sans-serif',
              }}
            >
              Cuidamos de tudo.
              <br />
              Você só fica com a parte boa:
              <br />
              Fazer as malas e ir!
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 md:mt-0"
          >
            <div
              className="space-y-3 md:space-y-4 text-[12px] md:text-[15px] leading-[1.28] md:leading-[1.35]"
              style={{ color: "#F9F2E1", letterSpacing: "0.1px" }}
            >
              <p>
                "A Mundo Pró nasceu da nossa inquietação. Já trabalhávamos com
                turismo, mas sentíamos que faltava algo para entregar uma
                experiência que saísse da rotina de uma agência tradicional.
                Focamos em criar uma identidade própria, com o objetivo de
                propor algo diferente, não encontrávamos espaço para isso."
              </p>
              <p>
                "A vontade de crescer e de ser referência no turismo foi o
                combustível para a gente. Fez nascer o desejo em nós: criar uma
                agência com o nosso jeito, com conteúdo verdadeiramente
                conectado com quem viaja."
              </p>
              <p>
                "Com cuidado real e atenção aos detalhes, transformamos o modo
                como as pessoas enxergam o ato de viajar. Hoje, seguimos
                crescendo com propósito, leveza e consistência."
              </p>
            </div>
            <div className="mt-4 md:mt-4 flex justify-end">
              <img
                src="/img/beneficios/assinatura.png"
                alt="Assinatura"
                className="h-[20px] md:h-[26px] w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* ===== título "Sobre nós" MICROAJUSTADO PARA MOBILE ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-[10] font-extrabold text-right pr-0 md:pr-4 text-[36px] sm:text-[50px] md:text-[100px] leading-[1] mb-0 mt-8 md:mt-0"
          style={{ color: "#F9F2E1", fontFamily: '"Work Sans", sans-serif' }}
        >
          Sobre nós
        </motion.h2>
      </div>

      {/* ===== BALÃO bege ===== */}
      <div className="relative z-[5] mt-0 md:mt-10">
        <div
          className="
            relative
            px-6 sm:px-8 md:px-12
            pt-8 md:pt-12
            pb-12 md:pb-20
            mx-4 md:mx-8 lg:mx-16
            overflow-visible
          "
          style={{
            backgroundColor: "#F9F2E1",
            borderRadius: "48px 48px 0 0",
          }}
        >
          {/* M decorativo — atrás do conteúdo, como no print */}
          {/* Desktop */}
          <img
            src="/img/beneficios/M.png"
            alt="Marca Mundo Pró"
            className="hidden md:block absolute left-6 -top-40 w-[402px] h-[250px] object-contain opacity-60 pointer-events-none select-none z-0"
            onError={(e) => {
              e.currentTarget.src = "/img/beneficios/M.png";
            }}
          />
          {/* Mobile (menor) */}
          <img
            src="/img/beneficios/M.png"
            alt=""
            className="md:hidden absolute left-3 -top-40 w-[100px] h-[300px] object-contain opacity-50 pointer-events-none select-none z-0"
            onError={(e) => {
              e.currentTarget.src = "/img/beneficios/M.png";
            }}
          />

          {/* Conteúdo fica acima do M */}
          {/* Fotos equipe */}
          <div className="relative z-[10]">
            {/* MOBILE: fileiras 3/2/3/2/3/2 */}
            <div className="md:hidden flex flex-col items-center">
              <div className="flex justify-center gap-12 mb-4">
                {teamPhotos.slice(0, 3).map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-white"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-12 mb-4">
                {teamPhotos.slice(3, 5).map((p, idx) => (
                  <motion.div
                    key={idx + 3}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (idx + 3) * 0.03 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-white"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-12 mb-4">
                {teamPhotos.slice(5, 8).map((p, idx) => (
                  <motion.div
                    key={idx + 5}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (idx + 5) * 0.03 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-white"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-12 mb-4">
                {teamPhotos.slice(8, 10).map((p, idx) => (
                  <motion.div
                    key={idx + 8}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (idx + 8) * 0.03 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-white"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-12 mb-4">
                {teamPhotos.slice(10, 13).map((p, idx) => (
                  <motion.div
                    key={idx + 10}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (idx + 10) * 0.03 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-white"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-12">
                {teamPhotos.slice(13, 15).map((p, idx) => (
                  <motion.div
                    key={idx + 13}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (idx + 13) * 0.03 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-white"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            {/* DESKTOP */}
            <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8">
              {teamPhotos.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-white"
                  title={p.label}
                >
                  <img
                    src={p.src}
                    alt={p.label}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 relative z-[10]">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6 md:p-8 rounded-[26px] md:rounded-2xl"
                style={{ backgroundColor: "#A0D3F1" }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <img
                    src={card.imgSrc}
                    alt=""
                    className="w-[42px] h-[42px] md:w-[70px] md:h-[70px] object-contain shrink-0"
                  />
                  <div className="flex-1">
                    <h4
                      className="mb-2 md:mb-5 font-extrabold"
                      style={{
                        color: "#AC0039",
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 22,
                        lineHeight: 1.05,
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      className="text-[12px] md:text-[15px] leading-[1.22] md:leading-[1.35]"
                      style={{ color: "#222223", letterSpacing: "0.1px" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
