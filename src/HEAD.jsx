import "./HEAD.css";

function HEAD({ project, skills, details, HandleClick }) {
  return (
    <>
      <div className="Header">
        <button onClick={() => HandleClick(skills)} className="scroll">
          skills
        </button>
        <button onClick={() => HandleClick(details)} className="scroll">
          Details
        </button>
        <button className="scroll" onClick={() => HandleClick(project)}>
          projects
        </button>
      </div>
    </>
  );
}

export default HEAD;
