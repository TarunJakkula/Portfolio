import { useInView } from "react-intersection-observer";

function CERTIF({ certif }) {
  const [H1ref, H1inView] = useInView({ threshold: 0.1 });
  const [Cref, CinView] = useInView({ threshold: 0.1 });
  const [Edref, EdinView] = useInView({ threshold: 0.1 });
  const arrayOfCertif = {
    "CISCO Networking Academy": "C certification",
    UNSCHOOL: "Java & Python Certification",
    "AWS Academy": "Machine Learning Foundations",
    "ORACLE Academy": "Database Programming",
    "SAYLOR ACADEMY": "Software Engineering",
    "Spoken Tutorial (IIT BOMBAY)": "Advanced Cpp, Java",
  };
  const arrayOfAcad = {
    BTech: ["MVSREC", "Osmania University", "2020-2024", "8.72 cgpa"],
    "12th": ["KV Picket", "CBSE", "2019-2020", "93.4 %"],
    "10th": ["KV Picket", "CBSE", "2017-2018", "83 %"],
  };

  return (
    <div ref={certif} className="certif">
      <div>
        <div
          ref={H1ref}
          className={`certif-heading opacity-0 ${H1inView && "fade-in"}`}
        >
          <span className="NAME black size-medium">
            Certificates & Academics
          </span>
        </div>
        <div className="certif-details">
          <div ref={Cref} className={`opacity-0 ${CinView && "fade-in"}`}>
            <span className="NAME black size-medium1 underline">
              {" "}
              Certificates
            </span>
            <ul className="NAME size-smol black">
              <li className="certif-list-obj red">
                {"Paper presentation "}
                <span className="issuer red">{"- BVICAM IEEE"}</span>
              </li>
              {Object.keys(arrayOfCertif).map((key, index) => (
                <li className="certif-list-obj " key={key}>
                  {arrayOfCertif[key]}{" "}
                  <span className="issuer " key={index + key}>
                    - {key}
                  </span>
                </li>
              ))}
              <li className="certif-list-obj red ">
                {"NCC B Certification "}
                <span className="issuer red ">{"- 5T Battalion NCC"}</span>
              </li>
            </ul>
          </div>
          <div ref={Edref} className={`opacity-0 ${EdinView && "fade-in"}`}>
            <span className="NAME black size-medium1 underline ">
              Education
            </span>
            <ul className="NAME size-smol black">
              {Object.keys(arrayOfAcad).map((key, index) => (
                <li key={key}>
                  <div style={{ display: "grid" }} key={key + key}>
                    <span>{key}</span>
                    <ul>
                      {arrayOfAcad[key].map((k, i) => (
                        <li key={key + i}>{arrayOfAcad[key][i]}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CERTIF;
