import { useState } from "react";
import GreetBody from "./Profile/Greet";
import DescriptionBody from "./Profile/Description";

function PROFILE({ profile }) {
  const [detailToggle, setDetailToggle] = useState(false);
  const [detailToggleRef, setDetailToggleRef] = useState(false);

  return (
    <div ref={profile} className="profile">
      {detailToggle ? (
        <DescriptionBody
          detailToggleRef={detailToggleRef}
          setDetailToggle={setDetailToggle}
          setDetailToggleRef={setDetailToggleRef}
        />
      ) : (
        <div className="profile-div">
          <GreetBody
            detailToggleRef={detailToggleRef}
            setDetailToggle={setDetailToggle}
            setDetailToggleRef={setDetailToggleRef}
          />
        </div>
      )}
    </div>
  );
}

export default PROFILE;
