import DS_illu from "/src/assets/images/deathStrandingInspiredDoodle.png";
import doberman_illu from "/src/assets/images/doberman.png";
import eva_illu from "/src/assets/images/eva01_fanart.png";
import malenia_illu from "/src/assets/images/maleniaFanart.png";
import mushroom_illu from "/src/assets/images/mushroomGuy.png";
import tiger_illu from "/src/assets/images/tiger.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#0d0d0d] min-h-screen flex items-center justify-center relative cursor-default"
    >
      <RevealOnScroll>
        <div>
          <h2 className="mt-10 text-5xl font-bold mb-8 bg-gradient-to-r from-[#8C2703] to-[#F28A2E] bg-clip-text text-transparent leading-right text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={DS_illu}
                alt="Death Stranding inspired illustration"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={doberman_illu}
                alt="Death Stranding inspired illustration"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={eva_illu}
                alt="Death Stranding inspired illustration"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={malenia_illu}
                alt="Death Stranding inspired illustration"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={mushroom_illu}
                alt="Death Stranding inspired illustration"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={tiger_illu}
                alt="Death Stranding inspired illustration"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
