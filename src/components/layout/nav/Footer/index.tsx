import React from "react";
import facebookIcon from "../../../../assets/icons/facebook-icon-logo.png";
import linkedinIcon from "../../../../assets/icons/linkedin-icon-logo.png";
import twitterIcon from "../../../../assets/icons/twitter-icon-logo.png";

const Footer = () => {
  const dateYear = new Date().getFullYear();

  return (
    <section className="w-full h-full bg-black text-white divide-y-2 divide-sunglow-500/80">
      <div className="w-full h-full flex flex-col px-3 py-8 gap-y-10 md:flex-row md:gap-y-0">
        <div className="w-full h-full px-5 space-y-3 text-center md:w-1/2 md:text-start md:px-24">
          <h5 className="text-xl">Mike Carlo Gonzaga</h5>
          <p>
            A Frontend focused Web Developer building neat and simple yet
            responsive websites
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="text-xl text-center md:text-start">Social Media</h5>
          <ul className="px-10 grid grid-cols-3 gap-x-10 items-center justify-items-center md:pl-32">
            <li>
              <a
                href="https://web.facebook.com/kaos.vioge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-y-3"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-10 h-10 grayscale hover:grayscale-0"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mike-carlo-gonzaga-1332ab256/k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-y-3"
              >
                <img
                  src={linkedinIcon}
                  alt="Linkedin"
                  className="w-10 h-10 grayscale hover:grayscale-0"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ViogeKaos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-y-3"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-10 h-10 grayscale hover:grayscale-0"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3 text-center">
        <p>
          {" "}
          &#169; Copyright {dateYear}. Made by{" "}
          <a href="/" className="underline hover:text-sunglow-500">
            Mike Carlo Gonzaga
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
