import "./BODY.css";
import PROFILE from "./Body/PROFILE.jsx";
import Skills from "./Body/Skills.jsx";
import PROJECT from "./Body/PROJECT.jsx";
import Details from "./Body/Details.jsx";
import upwardArrow from "./Body/public/arrow_upward.svg";
import email from "./Body/public/mail_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "./Body/public/call_FILL0_wght400_GRAD0_opsz24.svg";

function BODY({
  setRefs,
  profile,
  ProfileinView,
  project,
  skills,
  details,
  HandleClick,
}) {
  return (
    <>
      <PROFILE profile={setRefs} />
      <Skills skills={skills} />
      <Details details={details} />
      <PROJECT project={project} />
      <div className={`upward-arrow ${ProfileinView && "opacity-0"}`}>
        <button
          onClick={() => {
            HandleClick(profile);
          }}
        >
          <img src={upwardArrow} alt="" />
        </button>
      </div>
      <footer className="foot">
        <div className="NAME black size-medium2">
          Made by <span className="cornblue">Tarun Jakkula</span>
        </div>
        <div>
          <div className="NAME cornblue size-medium2">Reach out ?</div>
          <br />
          <div>
            <div className="flex-center">
              <img src={email} alt="email" />
              <span className="NAME black size-smol">7382670104</span>
            </div>
            <br />
            <div className="flex-center">
              <img src={phone} alt="phone" />
              <span className="NAME black size-smol">
                tarunjakkula1236@gmail.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default BODY;
