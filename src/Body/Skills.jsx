import { useInView } from "react-intersection-observer";
import React from "react";

function Skills({ skills }) {
  const [H2ref] = useInView({ threshold: 0.1 });
  const [Sref] = useInView({ threshold: 0.1 });

  const skill = [
    { lang: "JAVASCRIPT", scale: ["scale-70", "Proficient", 70] },
    { lang: "REACT JS", scale: ["scale-70", "Proficient", 70] },
    { lang: "NEXT JS", scale: ["scale-50", "Beginner", 50] },
    { lang: "HTML, CSS, TAILWIND CSS", scale: ["scale-60", "Competent", 60] },
    { lang: "MYSQL, MONGO DB", scale: ["scale-60", "Competent", 60] },
    { lang: "PYTHON", scale: ["scale-70", "Proficient", 70] },
    { lang: "FLASK", scale: ["scale-30", "Novice", 30] },
    { lang: "C, C++", scale: ["scale-60", "Competent", 60] },
    { lang: "JAVA", scale: ["scale-30", "Novice", 30] },
  ];

  return (
    <div ref={skills} className="skills">
      <div>
        <div ref={H2ref} className={`skills-heading `}>
          <span className="NAME white size-medium">My Technical Skills </span>
        </div>
        <div ref={Sref} className={`skills-container `}>
          <div style={{ marginTop: "20px" }}>
            {skill.map((obj, index) => {
              return (
                <React.Fragment key={index}>
                  <span className="NAME white ">{obj.lang}</span>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className={`NAME black skills-bar ${obj.scale[0]}`}>
                      {obj.scale[1]}
                    </span>
                    <span className="NAME white">{obj.scale[2]}</span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
