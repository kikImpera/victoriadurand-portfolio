import { RevealOnScroll } from "../RevealOnScroll";
import title from "/src/assets/images/Anim_Name_1.gif";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-[#0d0d0d] min-h-screen flex items-center justify-center relative cursor-default"
    >
      <RevealOnScroll>
        <div className="text-center px-4">
          <img
            className="items-center w-7xl"
            src={title}
            alt="Victoria Durand Logo"
          />
          <h1 className="text-[#688C86] mb-8 max-w-4xl mx-auto text-5xl font-semibold">
            Here to problem solve and create beautiful art.
          </h1>
          <p className="text-gray-100 text-2xl mb-8 max-w-4xl mx-auto">
            Victoria (Vic) is a French artist based in Montreal. After studying
            animation, they started looking for a job in the feature animation
            and video games industries.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#688C86] text-[#0d0d0d] py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5"
            >
              {" "}
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#688C86]/200 text-white py-3 px-6 rounded font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#688C86]/10"
            >
              {" "}
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
