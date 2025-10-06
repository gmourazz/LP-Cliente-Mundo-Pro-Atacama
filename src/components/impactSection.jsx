// src/components/impactSection.jsx
import React from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';

export default function ImpactSection() {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  // imagem mobile
  const MOBILE_IMG = '/img/taolegalatacamamobile.png';

  const onEnter = () => {
    if (prefersReducedMotion) {
      controls.set({ opacity: 1, y: 0 });
    } else {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      });
    }
  };

  return (
    <section className="relative w-full h-[520px] md:h-[900px] overflow-hidden bg-transparent">
      {/* BG DESKTOP (imagem atual) */}
      <motion.div
        className="absolute inset-0 z-0 hidden md:block"
        initial={{ opacity: 0, y: -120 }}
        animate={controls}
        viewport={{ amount: 0.4, once: false }}
        onViewportEnter={onEnter}
        onViewportLeave={() => controls.set({ opacity: 0, y: -120 })}
        aria-hidden="true"
      >
        <img
          src="/img/taolegalatacama.png"   /* imagem atual SOMENTE DESKTOP */
          alt="tao legal desktop"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* BG MOBILE (preenche a área, sem bordas) */}
      <motion.div
        className="absolute inset-0 z-0 md:hidden"
        initial={{ opacity: 0, y: -120 }}
        animate={controls}
        viewport={{ amount: 0.4, once: false }}
        onViewportEnter={onEnter}
        onViewportLeave={() => controls.set({ opacity: 0, y: -120 })}
        aria-hidden="true"
      >
        <img
          src={MOBILE_IMG}
          alt="tao legal mobile"
          className="
            w-full h-full
            object-cover object-center
            scale-[1.08]    /* ajuste fino do zoom; altere se quiser */
            will-change-transform select-none
          "
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* (Overlay removido) */}

      {/* Conteúdo */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="
              font-extrabold text-white tracking-[-0.01em]
              leading-[1.05] md:leading-[1.08]
              mb-1 md:mb-2
            "
            style={{
              fontFamily: '"Work Sans", sans-serif',
              fontSize: 'clamp(22px, 4.2vw, 48px)',
            }}
          >
            {/* Título opcional */}
          </h2>

          <p
            className="
              mx-auto text-white/90
              mt-1 md:mt-2
              max-w-[680px]
              leading-[1.18] md:leading-[1.22]
              tracking-[-0.005em]
            "
            style={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: 'clamp(12px, 1.8vw, 15px)',
            }}
          >
            {/* Texto opcional */}
          </p>
        </div>
      </div>
    </section>
  );
}
