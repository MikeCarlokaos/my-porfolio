import heroBg from "../../images/Untitled-bg-hero.png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dark-800 to-dark-900 h-screen w-full">
        <div className="h-full w-full flex flex-col text-white justify-center items-center flex-nowrap z-20">
          <h1 className="text-5xl font-['Orbitron'] mb-20">
            Hi, I'm <span className="text-sunglow-500">Mike Carlo Gonzaga</span>
          </h1>
          <p className="text-2xl w-[500px] text-center ">
            A Frontend focused Web Developer building neat and simple yet
            responsive websites
          </p>
        </div>
        <div>
          <img
            src={heroBg}
            alt="hero bg"
            className="absolute top-0 left-0 z-10 opacity-60 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
