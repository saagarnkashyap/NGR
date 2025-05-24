import { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightDownLine } from "@remixicon/react";
import nagaraj from "../assets/nagaraj.png";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subheading", {
        y: 30,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".hero-text", {
        opacity: 0,
        y: 20,
        delay: 0.6,
        duration: 1,
      });

      gsap.from(".hero-btn", {
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power1.out",
});

      gsap.from(".hero-img", {
        opacity: 0,
        y: 40,
        delay: 1.2,
        duration: 1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 flex min-h-screen flex-col items-center justify-center gap-6 text-center"
    >
      {/* Name & Title */}
      <div className="mt-10 sm:mt-16">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-bold tracking-tight">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading mt-2 bg-gradient-to-b from-pink-300 to-purple-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl tracking-tight">
          {PROFILE.title}
        </h2>
      </div>

      {/* Subheading */}
      <p className="hero-text max-w-3xl mt-4 px-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-gray-300">
        {PROFILE.subheading}
      </p>

        {/* Resume Button */}
        <a
        href="/Nagaraja_Gundurao_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-pink-200/50 px-6 py-3 text-sm sm:text-base font-medium tracking-tight text-white hover:bg-pink-200 hover:text-black transition-all duration-200"
      >
        Download Resume <RiArrowRightDownLine size={20} />
      </a>

      {/* PFP Image (original placement & size) */}
      <img src={nagaraj} alt="Nagaraj" className="hero-img w-[300px] sm:w-[300px]" />
    </section>
  );
};

export default Hero;




