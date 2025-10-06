import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const INNER_PHOTO = "/img/atacamaimagemheader.png";
  const OUTER_FRAME = "/img/molduraaviao.png";
  const TAGLINE_IMG = "/img/taolegalheaderonepage.png";

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: "#222223" }}
    >
      <style>{`
        .hero-shell { padding-top: clamp(20px, 5vw, 36px); padding-bottom: clamp(18px, 4vw, 30px); }

        .frame-wrap { position: relative; width: clamp(240px, 45vw, 520px); aspect-ratio: 3/4; }
        .inner-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; clip-path: inset(14% 18% 17% 18% round 12px); z-index: 1; }
        .outer-frame { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; z-index: 2; pointer-events: none; }

        .tagline { position: absolute; left: clamp(12px, 4vw, 48px); bottom: clamp(12px, 4vw, 42px); width: clamp(140px, 22vw, 320px); height: auto; z-index: 3; pointer-events: none; }
        @media (max-width: 767px){ .tagline{ left:12px; bottom:14px; width:min(52vw,240px);} }

        /* ===== Marquee ===== */
        @keyframes marqueeX { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
        @keyframes marqueeMobile { 0%{transform:translate3d(0,0,0);} 100%{transform:translate3d(-33.3333%,0,0);} }

        .marquee-desktop { position: absolute; left:0; right:0; bottom:-16px; overflow:hidden; pointer-events:none; z-index: 1; }
        .marquee-track { display:flex; width:200%; animation: marqueeX 14s linear infinite; }
        .marquee-track > span { flex:0 0 50%; white-space:nowrap; }

        .marquee-mobile { position:absolute; left:8px; right:8px; bottom:-12px; overflow:hidden; pointer-events:none; z-index: 1; }
        .marquee-mobile__inner { display:flex; width:300%; animation: marqueeMobile 6s linear infinite; will-change:transform; }
        .marquee-mobile__group { flex:0 0 33.3333%; display:flex; align-items:center; white-space:nowrap; }

        @media (prefers-reduced-motion: reduce){
          .marquee-track, .marquee-mobile__inner { animation:none !important; }
        }
      `}</style>

      <div className="container mx-auto max-w-[1280px] px-4 md:px-8 hero-shell">
        <div className="w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="frame-wrap"
          >
            <img src={INNER_PHOTO} alt="Vista pela janela do avião" className="inner-photo" />
            <img src={OUTER_FRAME} alt="Moldura da janela de avião" className="outer-frame" />
          </motion.div>
        </div>
      </div>

      {/* Tagline imagem */}
      <img
        src={TAGLINE_IMG}
        alt="Tão legal que quase nem parece agência"
        className="tagline"
      />

      {/* ===== Marquee Mobile ===== */}
      <div className="md:hidden marquee-mobile">
        <div className="marquee-mobile__inner" aria-hidden="true">
          {[0,1,2].map((i)=>(
            <div className="marquee-mobile__group" key={i}>
              <span
                className="font-bold leading-none"
                style={{
                  color: "#A0D3F1",
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: "clamp(2.5rem, 18vw, 4rem)",
                }}
              >
                <strong>
                  ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
                </strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Marquee Desktop ===== */}
      <div className="hidden md:block marquee-desktop">
        <div className="marquee-track" aria-hidden="true">
          {[0,1].map((i)=>(
            <span
              key={i}
              className="font-bold leading-none"
              style={{
                color: "#A0D3F1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(2rem, 5vw, 5rem)",
              }}
            >
              <strong>
                ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
              </strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
