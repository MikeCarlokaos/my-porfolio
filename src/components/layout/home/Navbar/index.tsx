import { Home, User, BookOpen, Mail } from "ts-react-feather-icons";

const Navbar = () => {
  return (
    <div className="flex items-center justify-items-center gap-5 bg-black text-black text-lg py-5 grid grid-col-5 w-16 h-72 bg-sunglow-500 rounded-lg ">
      <div>
        <Home />
        {/* HOME */}
      </div>
      <div>
        <User />
        {/* ABOUT */}
      </div>
      <div>
        <BookOpen />
        {/* PORTFOLIO */}
      </div>
      <div>
        <Mail />
        {/* CONTACT */}
      </div>
    </div>
  );
};

export default Navbar;
