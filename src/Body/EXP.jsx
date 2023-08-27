import { useInView } from "react-intersection-observer";

function EXP({ exp }) {
  const [H2ref, H2inView] = useInView({ threshold: 0.1 });
  const [Sref, SinView] = useInView({ threshold: 0.1 });
  const [Exref, ExinView] = useInView({ threshold: 0.1 });

  return (
    <div ref={exp} className="exp">
      <div>
        <div
          ref={H2ref}
          className={`exp-heading opacity-0 ${H2inView && "fade-in"}`}
        >
          <span className="NAME black size-medium">Skills and Experience</span>
        </div>
        <div
          ref={Sref}
          className={`skills-container opacity-0 ${SinView && "fade-in"}`}
        >
          <span className="NAME size-medium1 white">Skills</span>
          <div style={{ marginTop: "40px" }}>
            <span className="NAME white ">PYTHON</span>
            <div className={`skills-bar ${SinView && "scale-70"}`}></div>
            <span className="NAME white ">C, C++</span>
            <div className={`skills-bar ${SinView && "scale-50"}`}></div>
            <span className="NAME white ">JAVA</span>
            <div className={`skills-bar ${SinView && "scale-30"}`}></div>
            <span className="NAME white ">HTML, CSS</span>
            <div className={`skills-bar ${SinView && "scale-40"}`}></div>
            <span className="NAME white ">JAVASCRIPT, REACTJS</span>
            <div className={`skills-bar ${SinView && "scale-40"}`}></div>
            <span className="NAME white ">MYSQL</span>
            <div className={`skills-bar ${SinView && "scale-50"}`}></div>
            <span className="NAME white ">MONGODB</span>
            <div className={`skills-bar ${SinView && "scale-40"}`}></div>
          </div>
        </div>
        <div
          ref={Exref}
          className={`exp-container opacity-0 ${ExinView && "fade-in"}`}
        >
          <span className="NAME size-medium1 black">Experience</span>
          <ul>
            <li className="NAME size-smol black">
              <div style={{ display: "grid" }}>
                <span>DRDO</span>
                <span className="red">Summer Intern</span>
                <span>
                  DRDO, Ministry of Defence, Govt. of India · Internship
                </span>
                <span>May 2023 - Jun 2023 · 2 months</span>
                <span>Hyderabad, Telangana, India · On-site</span>
                <span className="red">
                  I was part of a group of 6 where we were assigned
                </span>
                <span className="red">
                  {" "}
                  a Qt map project using QML and QT C++ to build an
                </span>
                <span className="red"> aerospace path provider.</span>
              </div>
            </li>
            <li className="NAME size-smol black">More to come...!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EXP;
