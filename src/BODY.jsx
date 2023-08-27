import "./BODY.css";
import PROFILE from "./Body/PROFILE.jsx";
import CERTIF from "./Body/CERTIF.jsx";
import EXP from "./Body/EXP.jsx";
import PROJECT from "./Body/PROJECT.jsx";
import upwardArrow from "./Body/public/arrow_upward.svg";

function BODY({
  setRefs,
  profile,
  ProfileinView,
  project,
  certif,
  exp,
  HandleClick,
}) {
  return (
    <div>
      <PROFILE profile={setRefs} />
      <EXP exp={exp} />
      <PROJECT project={project} />
      <CERTIF certif={certif} />
      <div className={`upward-arrow ${ProfileinView && "opacity-0"}`}>
        <button
          onClick={() => {
            HandleClick(profile);
          }}
        >
          <img src={upwardArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default BODY;
