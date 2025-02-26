import "/src/index.css";
import { RevealOnScroll } from "../RevealOnScroll";
import ammus_treasures_01 from "/src/assets/images/hq720.jpg";
import ammus_treasures_02 from "/src/assets/images/ammus.png";
import nda_icon from "/src/assets/images/nda_icon.png";
import MLP_logo from "/src/assets/images/Marc-Lumer-Productions_logo.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0d0d0d] min-h-screen flex items-center space-evenly justify-center relative cursor-default "
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="grid grid-cols-1 md:grid-cols-1 p-1 text-5xl text-overflow font-bold mb-8 bg-gradient-to-r from-[#8C2703] to-[#F28A2E] bg-clip-text text-transparent leading-right text-center mx-50">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-1 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#688C86] hover:shadow-[0_2px_8px_rgba(71,103,108,0.1)] transition-all">
              <div className="flex flex-wrap justify-between space-around gap-6">
                <h3 className="text-3xl font-bold my-2">Ammu's Treasures</h3>
                <a href="https://www.marclumerproductions.com/" target="_blank">
                  <img
                    className="items-center w-sm"
                    src={MLP_logo}
                    style={{ width: 70, height: 70 }}
                    alt="Marc Lumer Productions logo"
                  />
                </a>
              </div>
              <p className="text-gray-100 text-xl">
                I was an editor/compositing artist on this project for about 4
                months. I took over the job of the previous editor. My job
                consisted of preparing the videos for their release on Youtube
                and archiving every assets.{" "}
              </p>
              <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 align-center transition-all">
                  <a>
                    <img
                      className="w-sm"
                      src={ammus_treasures_01}
                      alt="Ammu's Treasures Thumbnail"
                    />
                  </a>
                </div>
                <div className="p-6 align-center transition-all">
                  <a>
                    <img
                      className="w-sm"
                      src={ammus_treasures_02}
                      alt="Ammu's Treasures Thumbnail"
                    />
                  </a>
                </div>
              </section>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Editing",
                  "Motion Design",
                  "Compositing",
                  "Organization",
                  "Rendering",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#688C86] text-bg-[#688C86] text-[#0d0d0d] font-semibold py-1 px-3 rounded-full text-4xs transition mx-1 hover:translate-y-0.25 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://youtube.com/playlist?list=PL99iP524_1OoX_bR4JiaQ3DxdumeaOPMk&si=9syMViU1zEeRatxC"
                  target="_blank"
                  className="text-[#F28A2E] hover:text-white transition-colors text-xl my-4 mx-10"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
            {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#688C86] hover:shadow-[0_2px_8px_rgba(71,103,108,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-100 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Skill01", "Skill02", "Skill03", "Skill04"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-[#688C86] text-bg-[#688C86] text-[#0d0d0d] font-semibold py-1 px-3 rounded-full text-sm transition mx-1 hover:translate-y-0.25 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#Project01"
                  className="text-[#F28A2E] hover:text-white transition-colors my-4 mx-10"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#688C86] hover:shadow-[0_2px_8px_rgba(71,103,108,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-100 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Skill01", "Skill02", "Skill03", "Skill04"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-[#688C86] text-bg-[#688C86] text-[#0d0d0d] font-semibold py-1 px-3 rounded-full text-sm transition mx-1 hover:translate-y-0.25 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#Project01"
                  className="text-[#F28A2E] hover:text-white transition-colors my-4 mx-10"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>*/}
            <div className="flex flex-wrap max-w-auto mx-60 justify-content p-2 items-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#688C86] hover:shadow-[0_2px_8px_rgba(71,103,108,0.1)] transition-all">
              <img
                id="nda_icon"
                style={{ width: 80, height: 80 }}
                src={nda_icon}
                alt="NDA Icon"
              />
              <p className="text-center text-gray-100 text-xl font-semibold">
                Other projects are currently under NDA.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
