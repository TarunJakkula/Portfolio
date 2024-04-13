import Githublogo from "../public/github-mark-white.svg";
import Linkedinlogo from "../public/LI-In-Bug.png";
import randomImg from "../public/PXL_20240214_120854672.jpg";

function GreetBody() {
  return (
    <div className="greet">
      <div className="img-profile">
        <img src={randomImg} alt="" className="img-profile-slit" />
      </div>
      <div className="Body-details ">
        <span className="NAME size-medium animate-in-NAME">
          TARUN JAKKULA {"  "}
          <span className="load"> .</span>
        </span>
        <br />
        <span className="NAME size-medium2 animate-in-NAME cornblue">
          About Me
        </span>
        <span className="NAME size-smol font-400 animate-in-NAME text-wrap line-height-2">
          <span className="size-medium3 vertical-bottom">👋</span> I'm a
          Computer Science Engineer, deeply passionate about coding. My main
          interests lie in Web Development and Machine Learning.
        </span>

        <div className="socials">
          <a
            href="https://github.com/TarunJakkula"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Githublogo} alt="" width={"35px"} height={"35px"} />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-jakkula"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedinlogo} alt="" width={"40px"} height={"35px"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GreetBody;
