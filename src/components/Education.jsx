import { useEffect, useRef } from "react";
import { EDUCATION } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".edu-card").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl text-white">
          Education
        </h2>
        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="edu-card rounded-xl border border-purple-300/20 p-6 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="mb-2 text-lg lg:text-2xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-md font-medium lg:text-xl text-pink-300">
                {edu.institution}
              </h4>
              {edu.duration && (
                <p className="text-sm text-gray-400">{edu.duration}</p>
              )}
              {edu.description && (
                <p className="mt-4 text-gray-300">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
