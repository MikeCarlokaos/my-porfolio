import Bg from "../../images/Untitled-bg.png";

const About = () => {
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
        <h1>ABOUT</h1>
      </div>

      <div className="grid grid-cols-2 gap-10 px-48">
        <div className="w-80  space-y-5">
          <h3 className="text-2xl font-semibold">
            Hi, I'm Mike, Nice to meet you.
          </h3>

          <p className="text-lg">
            I code neat and simple things, and I love what I do. I'm quietly
            confident, naturally curious, and perpetually working on improving
            my chops one project to another.
          </p>

          <p className="text-lg">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-2l font-semibold">My Skills</h3>

          <ul className="grid grid-cols-4 justify-items-center items-center space-y-5">
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>HTML</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>CSS</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>Javascript</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>React</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>GIT</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>GitHub</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>TailwindCSS</div>
            </li>
            <li className="p-2 bg-dark-100 text-white rounded-lg">
              <div>Typescript</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
