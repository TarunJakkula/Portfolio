import arrowImg from "../public/arrow.svg";

function DescriptionBody({
  detailToggleRef,
  setDetailToggle,
  setDetailToggleRef,
}) {
  return (
    <div
      className={
        !detailToggleRef
          ? "Body-details place-items-center animate-out-details "
          : "Body-details place-items-center"
      }
    >
      <div>
        <button
          className="Body-details-arrow"
          onClick={() => {
            setDetailToggleRef(false);
            setTimeout(() => {
              setDetailToggle(false);
            }, 800);
          }}
        >
          <img src={arrowImg} alt="" />
        </button>
      </div>
      <br />
      <section className="NAME animate-in-NAME size-medium">
        <span>I'm </span>
        <span className="red">Tarun Jakkula</span>
      </section>

      <span className=" NAME animate-in-NAME size-medium1">
        Computer Science Engineer
      </span>
      <br />
      <span className=" NAME animate-in-NAME size-smol">
        A passionate and creative developer interested in both web
      </span>
      <br />
      <span className="NAME animate-in-NAME size-smol">
        development as well as Machine Learning Domains.
      </span>
    </div>
  );
}

export default DescriptionBody;
