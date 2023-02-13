import React from "react";
import Bg from "../../../../../assets/images/hero-flickr.png";

const Link = () => {
  return (
    <section>
      <div>
        <div className="w-full h-full px-10 py-32 space-y-12 md:px-40">
          <div>
            <img src={Bg} alt="Landing Page Hero" />
          </div>
          <div className="space-y-4 font-semibold">
            <h2 className="text-2xl">Overview</h2>
            <p>
              I decide to recreate the Frontend of this website due to how neat
              their UI to look at. the UI itself is user-friendly which to me is
              a big plus Overall this was a great experience for me.
            </p>
          </div>
          <div className="space-y-4 font-semibold">
            <h2 className="text-2xl">Tools Used</h2>
            <ul className="w-full grid grid-cols-4 text-center gap-5 md:w-1/2">
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
                <span>Typescript</span>
              </li>
              <li className="py-2 bg-dark-100 text-white rounded-lg">
                <span>Tailwindcss</span>
              </li>
              <li className="py-2 bg-dark-100 text-white rounded-lg">
                <span>React</span>
              </li>
              <li className="py-2 bg-dark-100 text-white rounded-lg">
                <span>GIT</span>
              </li>
              <li className="py-2 bg-dark-100 text-white rounded-lg">
                <span>Github</span>
              </li>
              <li className="py-2 bg-dark-100 text-white rounded-lg">
                <span> Netlify</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 font-semibold">
            <h2 className="text-2xl">Link</h2>
            <div>
              <a
                href="https://flicker-website-clone.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sunglow-500 px-9 py-2 text-lg text-black font-semibold uppercase tracking-wide rounded-lg"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Link;
