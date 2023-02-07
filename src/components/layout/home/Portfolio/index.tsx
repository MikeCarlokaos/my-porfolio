import Bg from "../../images/Untitled-bg.png";

const Portfolio = () => {
  return (
    <div className="relative h-screen">
      <div>
        <img
          src={Bg}
          alt="background"
          className="absolute top-0 left-0 z-10 opacity-20 h-full w-full"
        />
      </div>
      <div className="flex justify-center text-5xl mb-28 py-10">
        <h1>PORTFOLIO</h1>
      </div>
    </div>
  );
};

export default Portfolio;
