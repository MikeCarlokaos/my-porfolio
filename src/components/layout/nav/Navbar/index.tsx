import { Home, User, BookOpen, Mail } from "ts-react-feather-icons";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="w-full h-full text-black text-lg py-5 bg-sunglow-500 rounded-lg md:w-16 md:h-72">
      <ul className="w-full h-full grid grid-cols-4 items-center justify-items-center gap-5 md:grid-cols-1">
        <li className="group">
          <a href="/" className="relative hover:text-red-500">
            <Home />
            <span className="hidden absolute top-10 left-1/2 -translate-x-1/2 bg-sunglow-500 px-5 py-3 rounded transition duration-700 ease-in-out group-hover:block md:top-1/2 md:-translate-y-1/2 md:left-6 md:-translate-x-0">
              HOME
            </span>
          </a>
        </li>
        <li className="group">
          <HashLink
            smooth
            to="/#about"
            className="relative group-hover:text-red-500"
          >
            <User />
            <span className="hidden absolute top-10 left-1/2 -translate-x-1/2 bg-sunglow-500 px-5 py-3 rounded transition duration-700 ease-in-out group-hover:block md:top-1/2 md:-translate-y-1/2 md:left-6 md:-translate-x-0">
              ABOUT
            </span>
          </HashLink>
        </li>
        <li className="group">
          <HashLink
            smooth
            to="/#portfolio"
            className="relative group-hover:text-red-500"
          >
            <BookOpen />
            <span className="hidden absolute top-10 left-1/2 -translate-x-1/2 bg-sunglow-500 px-5 py-3 rounded transition duration-700 ease-in-out group-hover:block md:top-1/2 md:-translate-y-1/2 md:left-6 md:-translate-x-0">
              PORTFOLIO
            </span>
          </HashLink>
        </li>
        <li className="group">
          <HashLink
            smooth
            to="/#contact"
            className="relative group-hover:text-red-500"
          >
            <Mail />
            <span className="hidden absolute top-10 left-1/2 -translate-x-1/2 bg-sunglow-500 px-5 py-3 rounded transition duration-700 ease-in-out group-hover:block md:top-1/2 md:-translate-y-1/2 md:left-6 md:-translate-x-0">
              CONTACT
            </span>
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
