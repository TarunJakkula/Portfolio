import {
  c,
  cpp,
  expressjs,
  git,
  github,
  java,
  javascript,
  keras,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  opencv,
  python,
  reactjs,
  reactnative,
  reduxjs,
  socketio,
  tailwindcss,
  tensorflow,
  threejs,
  typescript,
} from "./icons";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img1small from "../assets/img1small.png";
import img2small from "../assets/img2small.png";
import img3small from "../assets/img3small.png";
import img4small from "../assets/img4small.png";

const list = [
  {
    title: "Front-end",
    data: [
      {
        icon: reactjs,
        techName: "React JS",
      },
      {
        icon: nextjs,
        techName: "Next JS",
      },
      {
        icon: tailwindcss,
        techName: "Tailwind CSS",
      },
      {
        icon: reduxjs,
        techName: "Redux JS",
      },
      {
        icon: threejs,
        techName: "Three JS",
      },
      {
        icon: reactnative,
        techName: "React Native",
      },
    ],
  },
  {
    title: "Back-end & Databases",
    data: [
      {
        icon: nodejs,
        techName: "Node JS",
      },
      {
        icon: expressjs,
        techName: "Express JS",
      },
      {
        icon: socketio,
        techName: "Socket.io",
      },
      {
        icon: mongodb,
        techName: "MongoDB",
      },
      {
        icon: mysql,
        techName: "MySQL",
      },
    ],
  },

  {
    title: "Languages",
    data: [
      {
        icon: javascript,
        techName: "Javascript",
      },
      {
        icon: typescript,
        techName: "Typescript",
      },
      {
        icon: python,
        techName: "Python",
      },
      {
        icon: cpp,
        techName: "C++",
      },
      {
        icon: c,
        techName: "C",
      },
      {
        icon: java,
        techName: "Java",
      },
    ],
  },
  {
    title: "Misc",
    data: [
      {
        icon: git,
        techName: "Git",
      },
      {
        icon: github,
        techName: "GitHub",
      },
      {
        icon: tensorflow,
        techName: "TensorFlow",
      },
      {
        icon: keras,
        techName: "Keras",
      },
      {
        icon: opencv,
        techName: "OpenCV",
      },
    ],
  },
];

const experience = [
  {
    Company: "Wielabs",
    Role: "Junior Software Developer",
    Description:
      "Working on realtime projects in MERN stack and NextJS as a junior software developer.",
    Date: "July 2024 - present",
  },
  {
    Company: "Wielabs",
    Role: "Junior Software Developer Intern",
    Description:
      "Working on realtime projects in MERN stack as a junior software developer intern.",
    Date: "April 2024 - June 2024",
  },
  {
    Company: "Google DSC",
    Role: "Web-Dev Lead",
    Description:
      "Managed GDSC MVSREC's web development duo for effective project execution. Utilized chances to make impact through contribution.",
    Date: "August 2023 - February 2024",
  },
  {
    Company: "DRDO",
    Role: "Summer Intern",
    Description:
      "Built A cross-platform aerospace navigation app using QT. Learnt QT C++ and QML by developing a basic calculator app. Used OpenStreetsMap for offline map usage.",
    Date: "May 2023 - June 2023",
  },
];

const projects = [
  {
    Image: img4,
    ImageSmall: img4small,
    Name: "Autonomous Pesticide Deployment",
    Links: [
      { Name: "Website", Link: "https://apd-nextjs.vercel.app/" },
      { Name: "Github", Link: "https://github.com/TarunJakkula/APD_Nextjs" },
    ],
    Tech: [
      { Image: nextjs, Alt: "nextjs" },
      { Image: tailwindcss, Alt: "tailwindcss" },
    ],
  },
  {
    Image: img3,
    ImageSmall: img3small,
    Name: "Yaarit",
    Links: [
      { Name: "Website", Link: "https://yaarit-react.vercel.app/" },
      { Name: "Github", Link: "https://github.com/TarunJakkula/yaarit_react" },
    ],
    Tech: [
      { Image: reactjs, Alt: "reactjs" },
      { Image: tailwindcss, Alt: "tailwindcss" },
      { Image: nodejs, Alt: "nodejs" },
      { Image: expressjs, Alt: "expressjs" },
      { Image: mongodb, Alt: "mongodb" },
    ],
  },
  {
    Image: img2,
    ImageSmall: img2small,
    Name: "Tsrtc Bus Tracking",
    Links: [
      { Name: "Github", Link: "https://github.com/TarunJakkula/Projects" },
    ],
    Tech: [
      { Image: reactjs, Alt: "reactjs" },
      { Image: nodejs, Alt: "nodejs" },
      { Image: expressjs, Alt: "expressjs" },
      { Image: mongodb, Alt: "mongodb" },
    ],
  },
  {
    Image: img1,
    ImageSmall: img1small,
    Name: "Condition Monitoring",
    Links: [
      { Name: "Github", Link: "https://github.com/TarunJakkula/Projects" },
    ],
    Tech: [
      { Image: tensorflow, Alt: "tensorflow" },
      { Image: opencv, Alt: "opencv" },
      { Image: keras, Alt: "keras" },
    ],
  },
];

export { list, experience, projects };
