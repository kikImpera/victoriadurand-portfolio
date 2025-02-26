import Zoochosis_logo from "/src/assets/images/Zoochosis_logo.png";
import flying_beaver_logo from "/src/assets/images/flying_beaver_logo.png";
import MLP_logo from "/src/assets/images/Marc-Lumer-Productions_logo.png";
import AE_logo from "/src/assets/images/Adobe_After_Effects_CC_icon.svg.png";
import PS_logo from "/src/assets/images/Adobe_Photoshop_CC_icon.svg.png";
import PR_logo from "/src/assets/images/Adobe_Premiere_Pro_CC_icon.svg.png";
import Maya_logo from "/src/assets/images/autodesk-maya-logo-F485ED50BF-seeklogo.com.png";
import ZB_logo from "/src/assets/images/212-2123446_zbrush-zbrush-icon-png-transparent-png.png";
import SP_logo from "/src/assets/images/adobe-substance-3d-painter-icon.png";
import Unity_logo from "/src/assets/images/unity-game-engine-icon.png";
import nuke_logo from "/src/assets/images/icons8-nuke-480.png";
import tvpaint_logo from "/src/assets/images/Logo_TVPaint.png";
import reaper_logo from "/src/assets/images/icons8-reaper-480.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const editingSkills = [
    "Editing",
    "Compositing",
    "Illustration",
    "Animation",
    "3D Modeling",
    "Rigging",
  ];
  const twoDimensionSkills = ["Illustrations", "Animation"];
  const threeDimensionSkills = ["Modeling", "Rigging"];
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] min-h-screen flex items-center justify-center relative cursor-default"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8C2703] to-[#F28A2E] bg-clip-text text-transparent leading-right text-center mx-50">
            About Me
          </h2>
          <section>
            <section className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-100 mb-6 text-center text-xl">
                I am a dynamic visual artist with a diverse portfolio showcasing
                expertise in multiple domains. My notable achievements include
                successful collaborations that enhance creative vision and
                execution. I am passionate about leveraging artistic skills to
                drive impactful projects within collaborative settings.
              </p>
            </section>
            <section>
              <div className="items-center">
                <div className="rounded-xl p-6 items-center">
                  <h3 className="text-3xl font-bold mb-6 text-center">
                    Skills
                  </h3>
                  <section className="flex flex-wrap gap-2 justify-center">
                    {editingSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-[#688C86] text-bg-[#688C86] text-[#0d0d0d] font-semibold py-1 px-3 rounded-full text-lg hover:bg-[#688C86]/100 hover:shadow-[0_2px_8px_rgba(71,103,108,0.2)] hover:text-white transition cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </section>
                </div>
              </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-4xl font-bold mb-4 bg-[#F28A2E] bg-clip-text text-transparent text-center">
                  {" "}
                  Education{" "}
                </h3>
                <ul>
                  <li>
                    <p className="text-2xl font-semibold">
                      AEC NTL.1J - Réalisation D'un Film D'animation Numérique
                    </p>
                    <p className="text-sm text-[#F28A2E]">2019 - 2022</p>
                    <p className="text-xl bg-[#688C86] bg-clip-text text-transparent">
                      Rubika
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-4xl font-bold mb-4 bg-[#D9753B] bg-clip-text text-transparent text-center">
                  {" "}
                  Work Experience{" "}
                </h3>
                <div className="space-y-4 text-gray-100">
                  <div>
                    <h4 className="text-2xl">
                      <strong>Editor</strong>
                      <p className="text-sm text-[#D9753B]">Present </p>
                    </h4>
                    <p className="bg-[#688C86] bg-clip-text text-transparent mb-6 text-xl">
                      Zoochosis
                    </p>
                    <div>
                      <h4 className="text-2xl">
                        <strong>3D Consultant</strong>
                        <p className="text-sm text-[#D9753B]">
                          May 2024 - Present
                        </p>
                      </h4>
                      <p className="bg-[#688C86] bg-clip-text text-transparent mb-6 text-xl">
                        Flying Beaver{" "}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl">
                        <strong>Editor/Compositing Artist</strong>
                        <p className="text-sm text-[#D9753B]">
                          June 2023 - Present
                        </p>
                      </h4>
                      <p className="bg-[#688C86] bg-clip-text text-transparent mb-6 text-xl">
                        Marc Lumer Productions
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl">
                        <strong>LQA Tester</strong>
                        <p className="text-sm text-[#D9753B]">
                          February 2023 - June 2023
                        </p>
                      </h4>
                      <p className="bg-[#688C86] bg-clip-text text-transparent mb-6 text-xl">
                        {" "}
                        Keywords Studios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-3xl font-bold mt-4 text-center pt-5">
              Clients
            </h3>
            <div
              id="logo_clients"
              className=" transition-all grid grid-cols-1 md:grid-cols-3 max-w-auto mx-auto"
            >
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
              <div className="p-6 align-center hover:-translate-y-1 transition-all">
                <a href="https://www.marclumerproductions.com/" target="_blank">
                  <img
                    className="items-center w-sm"
                    src={MLP_logo}
                    alt="Marc Lumer Productions logo"
                  />
                </a>
              </div>
              <div className="p-6 items-center hover:-translate-y-1 transition-all">
                <a href="http://www.zoochosis.com/" target="_blank">
                  <img
                    className="items-center w-sm"
                    src={Zoochosis_logo}
                    alt="Zoochosis logo"
                  />
                </a>
              </div>
            </div>
          </section>
          <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all p-6 items-center">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Software Proficiency
            </h3>
            <section className="flex flex-wrap gap-2 justify-center">
              <div
                id="logo_software"
                className="p-2 transition-all grid grid-cols-1 md:grid-cols-5 max-w-auto mx-auto"
              >
                <div className="p-6 align-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={AE_logo}
                    alt="After Effects logo"
                  />
                </div>
                <div className="p-6 align-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={PS_logo}
                    alt="Photoshop logo"
                  />
                </div>
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={PR_logo}
                    alt="Premiere Pro logo"
                  />
                </div>
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={Maya_logo}
                    alt="Maya logo"
                  />
                </div>
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm my-2"
                    src={ZB_logo}
                    alt="ZBrush logo"
                  />
                </div>
                <div className="p-6 align-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={SP_logo}
                    alt="Substance Painter logo"
                  />
                </div>
                <div className="p-6 align-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={Unity_logo}
                    alt="Unity logo"
                  />
                </div>
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm"
                    src={nuke_logo}
                    alt="Nuke logo"
                  />
                </div>
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm my-10"
                    src={tvpaint_logo}
                    alt="TVPaint logo"
                  />
                </div>
                <div className="p-6 items-center hover:-translate-y-1 transition-all">
                  <img
                    className="items-center w-sm my-2"
                    src={reaper_logo}
                    alt="Reaper logo"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
