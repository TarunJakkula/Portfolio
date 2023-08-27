import "./HEAD.css";

function HEAD({ project, exp, certif, HandleClick }) {
  return (
    <>
      <div className="Header">
        <button className="scroll" onClick={() => HandleClick(project)}>
          projects
        </button>
        <button onClick={() => HandleClick(certif)} className="scroll">
          certifications & academcis
        </button>
        <button onClick={() => HandleClick(exp)} className="scroll">
          skills & experience
        </button>
      </div>
    </>
  );
}

export default HEAD;
