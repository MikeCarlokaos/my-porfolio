import Bg from "../../../../assets/images/Untitled-bg-white.png";
import emailjs from "@emailjs/browser";
// import facebookIcon from "../../../../assets/icons/facebook-icon-logo.png";
// import linkedinIcon from "../../../../assets/icons/linkedin-icon-logo.png";
// import twitterIcon from "../../../../assets/icons/twitter-icon-logo.png";

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ooahi1r",
      "template_705n4tf",
      e.currentTarget,
      "9wYy5Htm45PW3P0pd"
    );
  };

  return (
    <div
      id="contact"
      style={{ backgroundImage: `url(${Bg})` }}
      className="w-full h-screen px-5 py-10 bg-no-repeat bg-cover md:px-48"
    >
      <div className="flex justify-center text-3xl py-10 font-semibold md:text-5xl">
        <h1>CONTACT</h1>
      </div>
      <div className="w-full text-center">
        <h3 className="textt-lg tracking-wide bg-white/60 md:text-xl">
          Feel free to contact me thru my contacts below and I will get back to
          you as soon as possible.
        </h3>
      </div>
      <div className="w-full h-full p-10 text-center mt-6 md:mt-10">
        <form
          className="w-96 flex flex-col bg-slate-200 my-0 mx-auto space-y-2 p-6 rounded-md"
          onSubmit={sendEmail}
        >
          <label htmlFor="emailFrom">Email:</label>
          <input
            type="text"
            name="email_from"
            id="emailFrom"
            className="border-none rounded-md p-2.5 resize-y outline-none box-content border-solid border-b-2 border-transparent"
            placeholder="person@example.com"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            className="border-none rounded-md p-2.5 resize-y outline-none box-content border-solid border-b-2 border-transparent"
          ></textarea>
          <button type="submit" className="bg-sunglow-500 rounded-md p-2">
            Send
          </button>
        </form>
        {/* <span className="text-lg font-semibold">
          email: kaosvioge@gmail.com
        </span>

        <ul className=" py-10 grid grid-cols-3 items-center justify-items-center md:px-32">
          <li className="group">
            <a
              href="https://web.facebook.com/kaos.vioge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-y-3"
            >
              <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
              <span className="text-lg font-semibold capitalize group-hover:text-xl group-hover:font-bold">
                facebook
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="https://www.linkedin.com/in/mike-carlo-gonzaga-1332ab256/k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-y-3"
            >
              <img src={linkedinIcon} alt="Linkedin" className="w-10 h-10" />
              <span className="text-lg font-semibold capitalize group-hover:text-xl group-hover:font-bold">
                linkedin
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="https://twitter.com/ViogeKaos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-y-3"
            >
              <img src={twitterIcon} alt="Twitter" className="w-10 h-10" />
              <span className="text-lg font-semibold capitalize group-hover:text-xl group-hover:font-bold">
                twitter
              </span>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Contact;
