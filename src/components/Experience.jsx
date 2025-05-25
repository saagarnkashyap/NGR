import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  const experiences = [
    {
      year: "2016–Present",
      role: "Director, Product Ops Management",
      company: "Western Digital",
      description: [
        "Built and scaled the Product Operations Centre of Excellence in Bangalore",
        "Led over 60 NPI programs across retail and OEM segments",
        "Streamlined supply chain and governance processes, achieving consistent cost savings",
        "Fast-tracked to executive tier in 8 months for strategic impact",
      ],
      technologies: ["Product Ops", "NPI", "Governance", "Cost Optimization"],
    },
    {
      year: "2011–2016",
      role: "Manager, Supply Chain Operations",
      company: "Cisco Systems",
      description: [
        "Directed 12 high-impact programs, enhanced compliance and multi-sourcing strategies",
        "Led cost-saving initiatives yielding over $3M in risk mitigation and $800K in inventory reduction",
        "Received Cisco Achievement Program (CAP) award",
      ],
      technologies: ["Supply Chain", "Risk Mitigation", "Multi-sourcing"],
    },
    {
      year: "2006–2011",
      role: "Operations Analyst Manager",
      company: "Cypress Semiconductors",
      description: [
        "Improved supply chain data accuracy from 81.2% to 99.3%",
        "Reduced subcontractor charges by over $3M",
        "Led global SCM knowledge transfers from the US and Philippines to India",
      ],
      technologies: ["SCM", "Data Accuracy", "Training"],
    },
    {
      year: "1996–2006",
      role: "Manufacturing & Production Leadership Roles",
      company: "Corry Micronics, Solectron, Milestone, SPR Auto",
      description: [
        "Held key roles in manufacturing and production",
        "Built expertise in process control, PPC, and team leadership",
      ],
      technologies: ["Process Control", "PPC", "Team Leadership"],
    },
  ];

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray(".exp-block").forEach((el) => {
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
  }, experienceRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-16 px-4 mx-auto max-w-4xl text-white"
    >
      <h2 className="mb-12 text-center text-3xl font-medium">Experience</h2>
      <div className="flex flex-col space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp-block flex flex-col sm:flex-row items-start justify-between gap-4"
          >
            <div className="w-full sm:w-1/4 text-stone-300 text-sm lg:text-lg">
              {exp.year}
            </div>

            <div className="w-full sm:w-3/4">
              <h3 className="mb-2 text-lg lg:text-2xl font-semibold">
                {exp.role}{" "}
                <span className="bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                  @ {exp.company}
                </span>
              </h3>

              <ul className="mb-4 list-disc pl-5 text-sm lg:text-base text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


