import home from "../../../../assets/icons/home.svg";
import user from "../../../../assets/icons/user.svg";
import book from "../../../../assets/icons/book-open.svg";
import mail from "../../../../assets/icons/mail.svg";
import logo from "../../../../assets/images/logo-pic.jpg";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="w-full h-12 flex text-black text-lg bg-sunglow-500 rounded-lg md:w-8  md:h-full md:flex-col md:items-center ">
      <div className="flex items-center justify-center md:w-24 md:h-24">
        <div className="bg-black/10 rounded-full flex items-center justify-center w-20 h-20">
          <a href="/">
            <img
              src={logo}
              alt="Profile"
              className="w-16 h-16 rounded-full md:w-16 md:h-16"
            />
          </a>
        </div>
      </div>
      <ul className="w-full h-12 grid grid-cols-4 items-center justify-items-center gap-5 md:grid-cols-1 md:gap-0 md:h-full">
        <li className="flex md:rotate-[270deg]">
          <a href="/" className="hover:text-xl hover:font-bold">
            <img src={home} alt="Home" className="md:hidden" />
            <span className="hidden md:block">HOME</span>
          </a>
        </li>
        <li className="flex md:rotate-[270deg]">
          <HashLink
            smooth
            to="/#about"
            className="hover:text-xl hover:font-bold"
          >
            <img src={user} alt="User" className="md:hidden" />
            <span className="hidden md:block">ABOUT</span>
          </HashLink>
        </li>
        <li className="flex md:rotate-[270deg]">
          <HashLink
            smooth
            to="/#portfolio"
            className="hover:text-xl hover:font-bold"
          >
            <img src={book} alt="Portfolio" className="md:hidden" />
            <span className="hidden md:block">PORTFOLIO</span>
          </HashLink>
        </li>
        <li className="flex md:rotate-[270deg]">
          <HashLink
            smooth
            to="/#contact"
            className="hover:text-xl hover:font-bold"
          >
            <img src={mail} alt="Contact" className="md:hidden" />
            <span className="hidden md:block">CONTACT</span>
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
