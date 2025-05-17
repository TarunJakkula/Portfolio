import {
  aws,
  c,
  cpp,
  docker,
  expressjs,
  fastapi,
  firebase,
  git,
  github,
  graphql,
  java,
  javascript,
  // keras,
  mongodb,
  mysql,
  nextjs,
  // nextjsWhite,
  nodejs,
  // opencv,
  postgres,
  python,
  reactjs,
  reactnative,
  reduxjs,
  rust,
  socketio,
  tailwindcss,
  threejs,
  // tensorflow,
  // threejs,
  typescript,
} from "./icons";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const list = [
  {
    title: "Languages",
    data: [
      {
        icon: typescript,
        techName: "Typescript",
      },
      {
        icon: javascript,
        techName: "Javascript",
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
        icon: java,
        techName: "Java",
      },
      {
        icon: c,
        techName: "C",
      },
      {
        icon: rust,
        techName: "Rust",
      },
    ],
  },
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
      // {
      //   icon: threejs,
      //   techName: "Three JS",
      // },
      {
        icon: reactnative,
        techName: "React Native",
      },
    ],
  },
  {
    title: "Back-end",
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
        icon: fastapi,
        techName: "FastAPI",
      },
      {
        icon: socketio,
        techName: "Websockets",
      },
      {
        icon: graphql,
        techName: "GraphQL",
      },
    ],
  },
  {
    title: "Databases",
    data: [
      {
        icon: mongodb,
        techName: "MongoDB",
      },
      {
        icon: mysql,
        techName: "MySQL",
      },
      {
        icon: postgres,
        techName: "PostgreSQL",
      },
    ],
  },
  {
    title: "Tools",
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
        icon: docker,
        techName: "Docker",
      },
      {
        icon: aws,
        techName: "AWS",
      },
      {
        icon: firebase,
        techName: "Firebase",
      },
      // {
      //   icon: tensorflow,
      //   techName: "TensorFlow",
      // },
      // {
      //   icon: keras,
      //   techName: "Keras",
      // },
      // {
      //   icon: opencv,
      //   techName: "OpenCV",
      // },
    ],
  },
];

const experience = [
  {
    Company: "Wielabs",
    Role: "Junior Software Developer",
    Description: [
      "Ensured high performance and scalability across 6+ websites and 4+ web apps by implementing scalable TypeScript architectures and development best practices.",
      "Optimized website performance and SEO, achieving 50% faster load times by leveraging Next.js and React Server Components.",
      "Built cross-platform mobile apps using React Native, integrating native features like step tracking, in-app purchases, and camera access for seamless user experiences.",
      "Designed and maintained resilient database solutions, implementing uptime strategies that ensured 99.9% service availability.",
    ],
    Date: "July 2024 - present",
  },
  {
    Company: "Wielabs",
    Role: "Junior Software Developer Intern",
    Description: [
      "Contributed to on-time project delivery within 17 member team during 2-month on-site internship.",
      "Applied skills in Next.js and TypeScript, acquired through 50+ hours of dedicated learning, to build working web applications.",
    ],
    Date: "April 2024 - June 2024",
  },
  {
    Company: "Google DSC",
    Role: "Web-Dev Lead",
    Description: [
      "Managed GDSC MVSREC's web development duo for effective project execution. Utilized chances to make impact through contribution.",
    ],
    Date: "August 2023 - February 2024",
  },
  {
    Company: "DRDO",
    Role: "Summer Intern",
    Description: [
      "Built A cross-platform aerospace navigation app using QT. Learnt QT C++ and QML by developing a basic calculator app. Used OpenStreetsMap for offline map usage.",
    ],
    Date: "May 2023 - June 2023",
  },
];

const projects = [
  {
    Image: img3,
    Name: "Commit",
    Tag: "Personal",
    Links: [
      {
        Name: "Github",
        Link: "https://github.com/TarunJakkula/commit_backend",
      },
    ],
    Tech: [
      { Image: nextjs, Alt: "nextjs" },
      { Image: tailwindcss, Alt: "tailwindcss" },
      { Image: nodejs, Alt: "nodejs" },
      { Image: expressjs, Alt: "expressjs" },
      { Image: postgres, Alt: "potgres" },
      { Image: docker, Alt: "docker" },
    ],
  },
  {
    Image: img1,
    Name: "Fixity edx",
    Tag: "Work",
    Tech: [
      { Image: nextjs, Alt: "nextjs" },
      { Image: graphql, Alt: "graphql" },
    ],
  },
  {
    Image: img2,
    Name: "ClipForge",
    Tag: "Work",
    Links: [
      {
        Name: "Github",
        Link: "https://github.com/TarunJakkula/clipforge_frontend",
      },
    ],
    Tech: [
      { Image: reactjs, Alt: "reactjs" },
      { Image: nodejs, Alt: "nodejs" },
      { Image: fastapi, Alt: "fastapi" },
      { Image: mongodb, Alt: "mongodb" },
    ],
  },
  {
    Image: img4,
    Name: "Autonomous Pesticide Deployment",
    Tag: "Personal",
    Links: [
      { Name: "Website", Link: "https://apd-nextjs.vercel.app/" },
      { Name: "Github", Link: "https://github.com/TarunJakkula/APD_Nextjs" },
    ],
    Tech: [
      { Image: nextjs, Alt: "nextjs" },
      { Image: tailwindcss, Alt: "tailwindcss" },
      { Image: python, Alt: "python" },
    ],
  },
  {
    Image: img5,
    Name: "ThreeJs Shirt Customizer",
    Tag: "Personal",
    Links: [
      {
        Name: "Website",
        Link: "https://threejs-shirt-customizer-alpha.vercel.app/",
      },
      {
        Name: "Github",
        Link: "https://github.com/TarunJakkula/Threejs_Shirt_Customizer",
      },
    ],
    Tech: [
      { Image: javascript, Alt: "javascript" },
      { Image: threejs, Alt: "threejs" },
    ],
  },
  {
    Image: img6,
    Name: "Yaarit",
    Tag: "Volunteer",
    Links: [
      {
        Name: "Website",
        Link: "https://yaarit-react.vercel.app/",
      },
      {
        Name: "Github",
        Link: "https://github.com/TarunJakkula/yaarit_react",
      },
    ],
    Tech: [
      { Image: reactjs, Alt: "reactjs" },
      { Image: expressjs, Alt: "expressjs" },
      { Image: tailwindcss, Alt: "tailwindcss" },
      { Image: nodejs, Alt: "nodejs" },
      { Image: mongodb, Alt: "mongodb" },
    ],
  },
  {
    Image: img7,
    Name: "Tsrtc Bus Tracking",
    Tag: "Personal",
    Links: [
      {
        Name: "Github",
        Link: "https://github.com/TarunJakkula/Projects/tree/main/TSRTC%20BUS%20TRACKING",
      },
    ],
    Tech: [
      { Image: mongodb, Alt: "mongodb" },
      { Image: expressjs, Alt: "expressjs" },
      { Image: reactjs, Alt: "reactjs" },
      { Image: nodejs, Alt: "nodejs" },
    ],
  },
];

export { list, experience, projects };
