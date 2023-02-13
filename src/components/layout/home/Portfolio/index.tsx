import Bg from "../../../../assets/images/Untitled-bg-dark.png";
import coffee from "../../../../assets/images/screenshot-bos-coffee.avif";
import minecraft from "../../../../assets/images/screenshot-minecraft.avif";
import flickr from "../../../../assets/images/screenshot-flickr.avif";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      style={{ backgroundImage: `url(${Bg})` }}
      className="w-full h-full px-5 py-10 bg-no-repeat bg-cover text-white brightness-95 md:h-screen md:px-48"
    >
      <div className="flex justify-center text-3xl py-10 font-semibold md:text-5xl">
        <h1>PORTFOLIO</h1>
      </div>

      <div className="w-full text-center">
        <h3 className="text-lg tracking-wide bg-black/60 md:text-xl">
          Here are some of my projects that I had done. Feel free to check them
          out!
        </h3>
      </div>
      <div className="w-full mt-16 bg-black/60 p-3">
        <ul className="w-full h-full grid grid-cols-1 gap-y-3 text-center tracking-widest uppercase md:h-60 md:grid-cols-3 md:gap-x-3">
          <li className="w-full h-full px-2 py-5 bg-white/10 transition-all duration-300 group hover:scale-105">
            <a
              href="bos-coffee"
              className="space-y-3 flex flex-col justify-items-center"
            >
              <img src={coffee} alt="webpage" />
              <p className="transition-all group-hover:text-sunglow-500">
                bo's coffee website clone
              </p>
            </a>
          </li>
          <li className="w-full h-full px-2 py-5 bg-white/10 transition-all duration-300 group hover:scale-105">
            <a
              href="minecraft"
              className="space-y-3 flex flex-col justify-items-center"
            >
              <img src={minecraft} alt="webpage" />
              <p className="transition-all group-hover:text-sunglow-500">
                minecraft website clone
              </p>
            </a>
          </li>
          <li className="w-full h-full px-2 py-5 bg-white/10 transition-all duration-300 group hover:scale-105">
            <a
              href="flickr"
              className="space-y-3 flex flex-col justify-items-center"
            >
              <img src={flickr} alt="webpage" />
              <p className="transition-all group-hover:text-sunglow-500">
                flickr website clone
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
