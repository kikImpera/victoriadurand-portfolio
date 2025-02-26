import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#0d0d0d] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out    
                        ${
                          menuOpen
                            ? "h-screen opacity-98 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }
                     `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-bold text-white hover:scale-110 my-4 transform transition-transform duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }
        `}
      >
        {""}
        Home{""}
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-white hover:scale-110 my-4 transform transition-transform duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }
        `}
      >
        {""}
        About{""}
      </a>
      {/*<a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-white hover:scale-110 my-4 transform transition-transform duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }
        `}
      >
        {""}
        Gallery{""}
      </a>  */}

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-white hover:scale-110 my-4 transform transition-transform duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }
        `}
      >
        {""}
        Projects{""}
      </a>

      {/*<a
        href="#clients"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-white hover:scale-110 my-4 transform transition-transform duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }
        `}
      >
        {""}
        Clients{""}
      </a>*/}
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-bold text-[#F28A2E] hover:scale-110 my-4 transform transition-transform duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }
        `}
      >
        {""}
        Contact{""}
      </a>
    </div>
  );
};
