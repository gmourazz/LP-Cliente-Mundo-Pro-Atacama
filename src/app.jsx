import React from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import TravelPackage from "./components/travelPackage";
import ImpactSection from "./components/impactSection";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import AboutUs from "./components/aboutUs";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/scrollToTopButton";
import FloatingWpp from "./components/floatingWhatsApp";

export default function App() {
  const wppPhone = "5554991831562";
  const wppMsg =
    "Olá! Estou navegando na página da viagem para o Atacama e gostaria de tirar uma dúvida!";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <TravelPackage />
        <ImpactSection />
        <Pricing />
        <FAQ />
        <AboutUs />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />

      {/* Setinha para MOBILE - aparece só em mobile */}
      <div className="block md:hidden">
        <ScrollToTopButton 
          threshold={40} 
          bottom={10} 
          right={18} 
        />
      </div>

      {/* Setinha para DESKTOP - aparece só em desktop */}
      <div className="hidden md:block">
        <ScrollToTopButton 
          threshold={80} 
          bottom={30} 
          right={32} 
        />
      </div>

      <FloatingWpp
        phone={wppPhone}
        message={wppMsg}
        imageSrc="/img/logowpp.png"
        // Configurações para DESKTOP
        size={58}
        right={26}
        bottom={30}
        safeBottomBump={60}
        imageScale={1.15}
        imageShiftX={0}
        imageShiftY={-2}
        // Configurações para MOBILE
        mobileSize={50}
        mobileRight={15}
        mobileBottom={6}
        mobileSafeBottomBump={60}
        mobileImageScale={1.05}
        mobileImageShiftX={0}
        mobileImageShiftY={-2}
      />
    </div>
  );
}