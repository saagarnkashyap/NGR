import { PROFILE } from "../constants";

const About = () => {
  return (
    <section id="about" className="px-6 py-12 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">About</h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-lg text-center leading-relaxed">
        {PROFILE?.subheading || "Experienced operations leader with 25+ years in manufacturing, supply chain, and engineering strategy across global firms."}
      </p>
    </section>
  );
};

export default About;
