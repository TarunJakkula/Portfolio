import { useState } from "react";

function Details(props) {
  const [selected, setSelected] = useState(0);

  const experince = [
    {
      1: "Google DSC",
      2: "Web-Dev Lead",
      3: "Managed GDSC MVSREC's web development duo for effective project execution. Utilized chances to make impact through contribution.",
      4: "August 2023 - February 2024",
    },
    {
      1: "DRDO",
      2: "Summer Intern",
      3: "Built A cross-platform aerospace navigation app using QT. Learnt QT C++ and QML by developing a basic calculator app. Used OpenStreetsMap for offline map usage.",
      4: "May 2023 - June 2023",
    },
  ];
  const education = [
    {
      1: "Maturi Venkata Subba Rao",
      2: "Computer Science & Engineering",
      3: "CGPA - 8.75",
      4: "2020 - present",
    },
    {
      1: "Kendriya Vidyalaya Picket",
      2: "12 th - CBSE",
      3: "Percent - 93.4",
      4: "2019 - 2020",
    },
    {
      1: "Kendriya Vidyalaya Picket",
      2: "10 th - CBSE",
      3: "Percent - 83",
      4: "2017 - 2018",
    },
  ];

  const details = [
    { name: "Experience", data: experince },
    { name: "Education", data: education },
  ];

  return (
    <div ref={props.details} className="details">
      <div className="details-heading">
        <span className="NAME size-medium">More To Know</span>
      </div>
      <div className="details-selector">
        {details.map((obj, index) => {
          return (
            <span
              key={index}
              className={`NAME white size-medium3 ${
                selected === index
                  ? "detail-button-selected"
                  : "detail-button-not-selected"
              }`}
              onClick={() => {
                setSelected(index);
              }}
            >
              {obj.name}
            </span>
          );
        })}
      </div>
      <div className="details-selected">
        {details[selected].data.map((obj, index) => {
          return (
            <div key={index} className="NAME white details-card">
              <span className="size-medium3">{obj[1]}</span>
              <span className="size-medium1 cornblue">{obj[2]}</span>
              <span className="size-medium3">{obj[4]}</span>
              <span className="size-smol font-400 line-height-2">{obj[3]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
