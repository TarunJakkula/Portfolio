import HEAD from "./HEAD.jsx";
import BODY from "./BODY.jsx";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
function MAIN() {
  const details = useRef(null);
  const skills = useRef(null);
  const profile = useRef(null);
  const project = useRef(null);
  const [prof, ProfileinView] = useInView({ threshold: 0.5 });

  const setRefs = useCallback(
    (node) => {
      profile.current = node;
      prof(node);
    },
    [prof]
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const HandleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HEAD
        project={project}
        skills={skills}
        details={details}
        HandleClick={HandleClick}
      />
      <BODY
        setRefs={setRefs}
        profile={profile}
        ProfileinView={ProfileinView}
        project={project}
        details={details}
        skills={skills}
        HandleClick={HandleClick}
      />
    </>
  );
}

export default MAIN;
