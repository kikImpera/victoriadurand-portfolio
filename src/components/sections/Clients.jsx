import Zoochosis_logo from "/src/assets/images/Zoochosis_logo.png";
import flying_beaver_logo from "/src/assets/images/flying_beaver_logo.png";
import MLP_logo from "/src/assets/images/Marc-Lumer-Productions_logo.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Clients = () => {
  return (
    <section
      id="clients"
      className="bg-[#0d0d0d] min-h-screen flex items-center justify-center relative cursor-default"
    >
      <RevealOnScroll>
        <section className="max-w-4xl mx-auto px-4 ">
          <div>
            <h2 className="mt-10 text-5xl font-bold mb-8 bg-gradient-to-r from-[#8C2703] to-[#F28A2E] bg-clip-text text-transparent leading-right text-center">
              Clients
            </h2>
            <section>
              <div className=" rounded-xl p-8 border-white/10 border transition-all">
                <p className="text-gray-100 text-center text-2xl font-semibold">
                  Here you can find my most recent clients and a link to their
                  website!
                </p>
              </div>
              <div
                id="logo_clients"
                className="p-2 transition-all grid grid-cols-1 md:grid-cols-3 max-w-auto mx-auto"
              >
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <a href="http://www.zoochosis.com/" target="_blank">
                    <img
                      className="items-center w-sm"
                      src={Zoochosis_logo}
                      alt="Zoochosis logo"
                    />
                  </a>
                </div>
                <div className="p-6 align-center hover:-translate-y-1 transition-all">
                  <a
                    href="https://www.marclumerproductions.com/"
                    target="_blank"
                  >
                    <img
                      className="items-center w-sm"
                      src={MLP_logo}
                      alt="Marc Lumer Productions logo"
                    />
                  </a>
                </div>
                <div className="p-6 align-center hover:-translate-y-1 transition-all">
                  <a
                    href="https://www.flyingbeavers.ca/presskit//"
                    target="_blank"
                  >
                    <img
                      className="items-center w-sm"
                      src={flying_beaver_logo}
                      alt="Flying Beaver logo"
                    />
                  </a>
                </div>
              </div>
            </section>
            <div></div>
          </div>
        </section>
      </RevealOnScroll>
    </section>
  );
};
