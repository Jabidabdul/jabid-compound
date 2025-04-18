import compoundMobileImagePNG from "../../assets/compound-mobile.png";
import compoundMobileImageSVG from "../../assets/compound-mobile.svg";
import { Navbar } from "../../components";
import batterMobileSvg from "../../assets/batter-mobile.svg";
import chargesMobileSvg from "../../assets/charges-mobile.svg";
import congratulationsTiltSvg from "../../assets/congratulations-tilt.svg";
import batterMobilePNG from "../../assets/frame-3.png";
import chargesMobilePNG from "../../assets/frame-4.png";
import congratulationsTiltPNG from "../../assets/frame-5.png";
import "./style.scss";
const LandingPage = () => {
  return (
    <>
      <div className="landing-page-mobile block min-h-screen bg-[#070707] overflow-hidden h-screen">
        {/* Background glow effects */}
        <div className="absolute bg-[#683dff] opacity-70 blur-[156px] w-[300px] h-[200px] -top-[40px] right-[20px] rotate-[0deg] z-1" />
        {/* <div className="absolute bg-[#683dff] opacity-40 blur-[286px] w-[400px] h-[500px] -bottom-[255px] right-[85px] rotate-[0deg] z-1" /> */}

        {/* Navbar */}
        <Navbar
          className={
            "navbar-mobile flex flex-row h-[8vh] justify-between items-end px-8 max-w-[540px] mx-auto relative z-10"
          }
          imgClassName={"h-5"}
        />

        {/* Main content */}
        <div className="relative h-[calc(100vh-8vh)] flex flex-col items-center justify-center px-6 pt-10">
          <h1 className="animate-text-from-bottom text-white text-3xl font-light leading-0.5 mb-2 text-center z-10">
            earn <span className="text-[#683dff] font-semibold">3x more</span>
          </h1>
          <h2 className="animate-text-from-bottom text-white text-3xl font-light mb-6 text-center z-10">
            than your bank.
          </h2>
          <p className="animate-text-from-bottom text-gray-400 text-[12px] mb-12 text-center z-10">
            save with your{" "}
            <span className="text-white font-medium">favorite brand.</span>
          </p>

          {/* Stacked cards container */}
          <div className="relative w-full mt-[20px] max-w-[320px] h-[300px] mb-8">
            <img
              src={congratulationsTiltPNG}
              alt="Congratulations"
              className="animate-slide-top absolute top-0 left-0 w-full h-auto z-30 translate-y-0"
            />
            <img
              src={batterMobilePNG}
              alt="Batter"
              className="animate-slide-second absolute top-0 left-0 w-full h-auto z-20 translate-y-18"
            />
            <img
              src={chargesMobilePNG}
              alt="Charges"
              className="animate-slide-first absolute top-0 w-[88%] left-[18px] h-auto z-10 translate-y-38"
            />
          </div>

          {/* CTA Button */}
          <button className="absolute text-pop-up-button-mobile bg-[#683dff] text-white bottom-25 text-xl px-4 rounded-full hover:bg-[#5d3dd6] transition-colors z-40">
            START SAVING
          </button>
        </div>
      </div>
      <div className="landing-page hidden relative min-h-screen bg-[#070707] overflow-hidden h-screen">
        {/* Background Glow */}
        {/* <div className="absolute bg-[#683dff] opacity-40 blur-[188px] w-[300px] h-100 sm:w-[400px] sm:h-[500px] top-[-150px] left-[20px] sm:left-[60px] md:left-[200px] z-0" /> */}
        <div className="absolute bg-[#683dff] opacity-40 blur-[166px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] -top-[300px] sm:-top-[100px] left-5 sm:left-[40px] md:left-[200px] rotate-[0deg] z-1" />
        <div className="absolute bg-[#683dff] opacity-40 blur-[286px] w-[400px] h-[500px] -bottom-[255px] right-[85px] rotate-[0deg] z-1" />
        {/* Navbar */}
        <Navbar
          className={
            "navbar sm:flex h-[20vh] justify-between items-center px-[50px] max-w-[1400px] mx-auto py-8 relative z-10"
          }
          imgClassName={"h-12"}
        />

        {/* Main Content */}
        <main className="max-w-[1400px] mx-auto h-screen flex flex-row justify-between md:gap-0">
          {/* Left - Phone Image */}
          <div className="relative w-[45%] flex justify-center sm:justify-end">
            <img
              src={compoundMobileImagePNG}
              alt="Compound Mobile App"
              className="image-bounce-in-up group-hover:animate-none absolute h-[85vh] bottom-20 sm:bottom-25 sm:-right-17 z-1"
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-[55%] flex flex-row items-start justify-start sm:justify-start  md:items-left text-center md:text-left space-y-6">
            <div className="text-center md:pt-[18vh] lg:pt[25vh]">
              <h1 className="text-bounce-in-left delay-1000 text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1] font-[300] text-white font-display">
                earn{" "}
                <span className="text-[rgb(21,83,255)] font-semibold">
                  3x more
                </span>
                <br />
                than your bank.
              </h1>
              <p className="text-bounce-in-right leading-[1] text-gray-400 text-sm sm:text-xl pt-10">
                save with your{" "}
                <span className="text-white font-medium">favorite brand.</span>
              </p>
              <div className="mt-15">
                <button className="text-pop-up-button bg-[#683dff] text-white text-xl sm:text-3xl px-8 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#5d3dd6] transition-colors">
                  START SAVING
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
