import Bg from "../../../../assets/images/Untitled-bg-white.png";

const About = () => {
  return (
    <div
      id="about"
      style={{ backgroundImage: `url(${Bg})` }}
      className="w-full h-full px-5 pb-10 pt-6 bg-no-repeat bg-cover md:px-48 md:h-screen"
    >
      <div className="w-full flex justify-center text-3xl md-6 py-10 font-semibold md:text-5xl md:mb-12">
        <h1>ABOUT ME</h1>
      </div>

      <div className="w-full grid gap-y-7 bg-white/60 p-5 text-center md:grid-cols-2 md:text-start md:gap-x-10">
        <div className="w-full space-y-5 md:w-96">
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
          <h3 className="text-2xl font-semibold">My Skills</h3>

          <ul className="grid grid-cols-4 text-center gap-5">
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>HTML</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>CSS</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>Javascript</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>React</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>GIT</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>GitHub</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>Tailwindcss</span>
            </li>
            <li className="py-2 bg-dark-100 text-white rounded-lg">
              <span>Typescript</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
