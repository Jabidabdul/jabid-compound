import compoundLogo from "../../assets/compound-logo.svg";

const Navbar = ({ className, imgClassName }) => (
  <header className={`${className}`}>
    <div className="logo text-2xl text-white md:px-5 font-bold font-display">
      <img
        className={`${imgClassName}`}
        alt="Compound logo"
        src={compoundLogo}
      />
    </div>
    {/* <nav className="space-x-1">
      <a
        href="#"
        className="active text-white font-medium hover:text-gray-200 transition-colors font-body"
      >
        for people
      </a>
      <a
        href="#"
        className="text-gray-500 font-medium hover:text-gray-400 transition-colors font-body"
      >
        for business
      </a>
    </nav> */}
  </header>
);

export default Navbar;
