import { useEffect } from "react";
import name_navbar from "/src/assets/images/Name_Navbar.gif";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[#080808] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between space-between items-center h-16">
          <a href="#home">
            <img
              src={name_navbar}
              alt="Victoria Durand Logo"
              className="w-sm hover:scale-102 cursor-pointer"
            />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white font-bold text-lg hover:scale-105 transition-colors"
            >
              {""}
              Home{""}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white hover:scale-105 transition-colors"
            >
              {""}
              About{""}
            </a>
            {/* <a
              href="#gallery"
              className="text-gray-300 hover:text-white hover:scale-105 transition-colors"
            >
              Gallery{""}
            </a>  */}

            <a
              href="#projects"
              className="text-gray-300 hover:text-white hover:scale-105 transition-colors"
            >
              {""}
              Projects{""}
            </a>

            {/*<a
              href="#clients"
              className="text-gray-300 hover:text-white hover:scale-105 transition-colors"
            >
              {""}
              Clients{""}
            </a>*/}
            <a
              href="#contact"
              className="text-[#F28A2E] hover:scale-105
                transition-colors border-white/10 border px-4 py-2 rounded-4xl text-center font-semibold"
            >
              {""}
              Contact{""}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
