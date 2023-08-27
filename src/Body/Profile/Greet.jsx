import Githublogo from "../public/github-mark-white.svg";
import Linkedinlogo from "../public/LI-In-Bug.png";
import randomImg from "../public/Screenshot_20220602-091434.jpg";

function GreetBody({ detailToggleRef, setDetailToggle, setDetailToggleRef }) {
  return (
    <>
      <div
        className={
          detailToggleRef ? "Body-details animate-out-details " : "Body-details"
        }
      >
        <span className="NAME size-large animate-in-NAME">Hello!..</span>
        <div className="NAME animate-in-NAME size-medium">
          <span>this is </span>
          <span className="red">
            TARUN
            <div className="know-more">
              <button
                onClick={() => {
                  setDetailToggleRef(true);
                  setTimeout(() => {
                    setDetailToggle(true);
                  }, 800);
                }}
              >
                MORE
              </button>
            </div>
          </span>
          <span className="load">.</span>
        </div>

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
      <div
        className={
          detailToggleRef ? "animate-out-img img-profile" : "img-profile"
        }
      >
        <img src={randomImg} alt="" className="img-profile-slit" />
      </div>
    </>
  );
}

export default GreetBody;
