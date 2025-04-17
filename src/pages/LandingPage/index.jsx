import compoundMobileImagePNG from "../../assets/compound-mobile.png";
import compoundMobileImageSVG from "../../assets/compound-mobile.svg";
import { Navbar } from "../../components";
import "./style.scss";
const LandingPage = () => {
  return (
    <>
      <div className="landing-page-mobile block min-h-screen bg-[#070707] overflow-hidden h-screen">
        {/* mobile UI */}
        <div className="absolute bg-[#683dff] opacity-40 blur-[166px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] -top-[300px] sm:-top-[100px] left-5 sm:left-[40px] md:left-[200px] rotate-[0deg] z-1" />
        <div className="absolute bg-[#683dff] opacity-40 blur-[286px] w-[400px] h-[500px] -bottom-[255px] right-[85px] rotate-[0deg] z-1" />
        <Navbar
          className={
            "navbar-mobile flex flex-col h-[10vh] justify-between items-center max-w-full mx-auto  relative z-10"
          }
          imgClassName={"h-5"}
        />
        {/* <div className="w-full flex flex-row items-center">
          <div className="text-center md:pt-[15vh] lg:pt[25vh]">
            <h1 className="text-bounce-in-left delay-1000 text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-[300] text-white font-display">
              earn <span className="text-[#704bff] font-semibold">3x more</span>
              <br />
              than your bank.
            </h1>
            <p className="text-bounce-in-right text-gray-400 text-sm sm:text-xl pt-10">
              save with your{" "}
              <span className="text-white font-medium">favorite brand.</span>
            </p>
            <div className="mt-15">
              <button className="text-pop-up-button bg-[#683dff] text-white text-xl sm:text-3xl px-8 sm:px-10 py-3 sm:py-3.5 rounded-full hover:bg-[#5d3dd6] transition-colors">
                START SAVING
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="landing-page hidden relative min-h-screen bg-[#070707] overflow-hidden h-screen">
        {/* Background Glow */}
        {/* <div className="absolute bg-[#683dff] opacity-40 blur-[188px] w-[300px] h-100 sm:w-[400px] sm:h-[500px] top-[-150px] left-[20px] sm:left-[60px] md:left-[200px] z-0" /> */}
        <div className="absolute bg-[#683dff] opacity-40 blur-[166px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] -top-[300px] sm:-top-[100px] left-5 sm:left-[40px] md:left-[200px] rotate-[0deg] z-1" />
        <div className="absolute bg-[#683dff] opacity-40 blur-[286px] w-[400px] h-[500px] -bottom-[255px] right-[85px] rotate-[0deg] z-1" />
        {/* Navbar */}
        <Navbar
          className={
            "navbar sm:flex h-[20vh] justify-between items-end px-[50px] max-w-[1400px] mx-auto py-8 relative z-10"
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
            <div className="text-center md:pt-[20vh] lg:pt[25vh]">
              <h1 className="text-bounce-in-left delay-1000 text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1] font-[300] text-white font-display">
                earn{" "}
                <span className="text-[#704bff] font-semibold">3x more</span>
                <br />
                than your bank.
              </h1>
              <p className="text-bounce-in-right text-gray-400 text-sm sm:text-xl pt-10">
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
