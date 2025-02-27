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

export const Software = () => {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] min-h-screen flex items-center justify-center relative cursor-default"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8C2703] to-[#F28A2E] bg-clip-text text-transparent leading-right text-center mx-50">
          Software
        </h2>
        <section>
          <div
            id="logo_clients"
            className="p-2 transition-all grid grid-cols-1 md:grid-cols-5 max-w-auto mx-auto"
          >
            <div className="p-6 align-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={AE_logo}
                alt="Flying Beaver logo"
              />
            </div>
            <div className="p-6 align-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={PS_logo}
                alt="Marc Lumer Productions logo"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={PR_logo}
                alt="Zoochosis logo"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={Maya_logo}
                alt="Zoochosis logo"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm my-2"
                src={ZB_logo}
                alt="Zoochosis logo"
              />
            </div>
            <div className="p-6 align-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={SP_logo}
                alt="Flying Beaver logo"
              />
            </div>
            <div className="p-6 align-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={Unity_logo}
                alt="Marc Lumer Productions logo"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={nuke_logo}
                alt="Zoochosis logo"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm"
                src={tvpaint_logo}
                alt="Zoochosis logo"
              />
            </div>
            <div className="p-6 items-center hover:-translate-y-1 transition-all">
              <img
                className="items-center w-sm my-2"
                src={reaper_logo}
                alt="Zoochosis logo"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
