import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Navigation_Links } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-transparent backdrop-blur-sm py-2 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Name / Logo */}
        <a href="#" className="text-lg font-bold uppercase text-white">
          <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            Nagaraj Gundurao
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm text-white">
          {Navigation_Links.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="hover:text-pink-300 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenu3Line className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <ul className="mt-4 flex flex-col gap-4 px-4 py-4 lg:hidden bg-black/80 rounded-md text-white">
          {Navigation_Links.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block py-2 text-lg hover:text-pink-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
