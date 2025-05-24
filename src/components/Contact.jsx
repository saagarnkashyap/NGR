// import { CONTACT } from "../constants";
// import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section id="contact" className="px-6 py-12 text-white text-center">
//       <h2 className="text-3xl font-bold mb-6">Contact</h2>
//       <div className="space-y-6 text-lg text-gray-300 max-w-xl mx-auto">

//         {/* Address */}
//         <p className="flex items-center justify-center gap-2">
//           <FaMapMarkerAlt className="text-pink-300" />
//           {CONTACT.address}
//         </p>

//         {/* Emails */}
//         {CONTACT.email.split(",").map((email, index) => (
//           <p key={index} className="flex items-center justify-center gap-2">
//             <FaEnvelope className="text-pink-300" />
//             <a
//               href={`mailto:${email.trim()}`}
//               className="underline hover:text-pink-400"
//             >
//               {email.trim()}
//             </a>
//           </p>
//         ))}

//         {/* Phone numbers */}
//         {CONTACT.phoneNo.split(",").map((phone, index) => (
//           <p key={index} className="flex items-center justify-center gap-2">
//             <FaPhoneAlt className="text-pink-300" />
//             <a
//               href={`tel:${phone.trim().replace(/[^+\d]/g, "")}`}
//               className="underline hover:text-pink-400"
//             >
//               {phone.trim()}
//             </a>
//           </p>
//         ))}

//         {/* LinkedIn */}
//         {CONTACT.linkedin && (
//           <p className="flex items-center justify-center gap-2">
//             <FaLinkedin className="text-pink-300" />
//             <a
//               href={CONTACT.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-pink-400"
//             >
//               View LinkedIn Profile
//             </a>
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useEffect, useRef } from "react";
import { CONTACT } from "../constants";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".contact-line").forEach((el) => {
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
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} className="px-6 py-12 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="space-y-6 text-lg text-gray-300 max-w-xl mx-auto">

        {/* Address */}
        <p className="contact-line flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-pink-300" />
          {CONTACT.address}
        </p>

        {/* Emails */}
        {CONTACT.email.split(",").map((email, index) => (
          <p key={index} className="contact-line flex items-center justify-center gap-2">
            <FaEnvelope className="text-pink-300" />
            <a
              href={`mailto:${email.trim()}`}
              className="underline hover:text-pink-400"
            >
              {email.trim()}
            </a>
          </p>
        ))}

        {/* Phone numbers */}
        {CONTACT.phoneNo.split(",").map((phone, index) => (
          <p key={index} className="contact-line flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-pink-300" />
            <a
              href={`tel:${phone.trim().replace(/[^+\d]/g, "")}`}
              className="underline hover:text-pink-400"
            >
              {phone.trim()}
            </a>
          </p>
        ))}

        {/* LinkedIn */}
        {CONTACT.linkedin && (
          <p className="contact-line flex items-center justify-center gap-2">
            <FaLinkedin className="text-pink-300" />
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-400"
            >
              View LinkedIn Profile
            </a>
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
