import {
  CSS3,
  Express,
  HTML5,
  Javascript,
  Mongodb,
  Nextjs,
  Nextjs2,
  Nodejs,
  Typescript,
  Reactjs,
  Mui,
  Tailwind,
  admin,
  house,
  port1,
  port2,
  todo,
  shoping,
} from "./assets";

import Personal from "./assets/work/personal.mp4";
import Portfolio from "./assets/work/portfolio.mp4";
import Admin from "./assets/work/admin.mp4";
import House from "./assets/work/house.mp4";
import Todo from "./assets/work/todo.mp4";
import Shopping from "./assets/work/shopping.mp4";

export const projectStats = [
  {
    name: "Total Projects",
    value: "200+",
  },
  {
    name: "Website Design",
    value: "150+",
  },
  {
    name: "Mobile App Design",
    value: "50",
  },
  {
    name: "Clients worldwide",
    value: "+86",
  },
];

export const experiences = [
  {
    company: "APSignals",
    role: "Front-End Developer | Mentor Assistant",
    period: "Oct 2021 – Nov 2023",
    achievements: [
      "Developed a comprehensive assignment submission and management system, improving collaboration and efficiency for students and mentors by 15%. Built reusable components and custom hooks, reducing redundant code by 30%.",
      "Utilized the MERN stack to design dynamic and responsive web applications, integrating industry best practices and streamlining the development process.",
    ],
  },
  {
    company: "Fanap",
    role: "Front-End Developer | Internship",
    period: "Aug 2021 – Oct 2021",
    achievements: [
      "Designed and developed real-time web pages with HTML, CSS, and JavaScript, including interactive charts and dashboards, and implemented user-friendly websites with optimized performance.",
      "Participated in Agile methodologies to enhance team productivity and project management, ensuring timely delivery of projects.",
    ],
  },
];

export const tools = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "React",
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
  {
    name: "NextJs",
    icon: Nextjs2,
  },
];

export const skills = [
  {
    name: "JavaScript",
    icon: Javascript,
  },
  {
    name: "TypeScript",
    icon: Typescript,
  },
  {
    name: "ReactJs",
    icon: Reactjs,
  },
  {
    name: "NextJs",
    icon: Nextjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "MaterialUi",
    icon: Mui,
  },
  {
    name: "Tailwind",
    icon: Tailwind,
  },
  {
    name: "CSS3",
    icon: CSS3,
  },
  {
    name: "HTML5",
    icon: HTML5,
  },
];

export const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    cat: "Web Design",
    url: "https://dashboard.mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/React-Admin-Dashboard",
    img: admin,
    video: Admin,
    description: `An advanced Admin Dashboard project using ReactJs, Material-UI (MUI), Nivo charts, Formik, Yup, and
    FullCalendar to create a powerful management interface. It features interactive components, dynamic
    animations, statistical insights through Nivo charts, and efficient form handling with Formik and Yup.
    Additionally, FullCalendar is integrated for easy event scheduling and management.`,
    technologies: [
      "ReactJs",
      "MUI",
      "Nivo charts",
      "Formik",
      "Yup",
      "Full Calendar",
    ],
    live: "https://actual-live-url.com",
  },
  {
    id: 2,
    title: "Personal Website",
    cat: "Web Design",
    url: "https://mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/Personal-Website",
    img: port1,
    video: Personal,
    description: `A captivating personal website using JavaScript, ReactJs, and Tailwind CSS to showcase my portfolio and
    professional journey, featuring dynamic animations and interactive components for seamless navigation
    and efficient styling. This website highlights my skills and accomplishments in an engaging and visually
    appealing manner.`,
    technologies: ["JavaScript", "ReactJs", "Tailwind CSS", "AOS"],
    live: "https://actual-live-url.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    cat: "Web Design",
    url: "https://portfolio.mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/Next-Personal-Portfolio",
    img: port2,
    video: Portfolio,
    description: `A modern portfolio website utilizing JavaScript, Next.js, and Tailwind CSS to showcase projects. Next.js
    offers improved performance with server-side rendering, and Tailwind CSS ensures a visually appealing
    and responsive design, making it a standout platform for displaying creative work.`,
    technologies: ["JavaScript", "NextJs", "Tailwind"],
    live: "https://actual-live-url.com",
  },
  {
    id: 4,
    title: "ToDo App",
    cat: "Web Design",
    url: "https://todoapp.mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/React-ToDo-App",
    img: todo,
    video: Todo,
    description: `The To-do App is a simple task management application built with JavaScript, React, and CSS for a userfriendly interface and easy task organization.`,
    technologies: ["JavaScript", "React", "CSS"],
    live: "https://actual-live-url.com",
  },
  {
    id: 5,
    title: "House Rental",
    cat: "Web Design",
    url: "https://houserental.mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/House-Rental-Website",
    img: house,
    video: House,
    description: `Dynamic House Rental Website: Built with JavaScript, HTML, and CSS, using Grid layout for an organized
    and appealing presentation. Facilitates rental listings, offering seamless user experience to find
    properties. Perfect for users seeking an intuitive platform to discover their ideal rental homes
    effortlessly.`,
    technologies: ["JavaScript", "HTML", "CSS", "Grid"],
    live: "https://actual-live-url.com",
  },
  {
    id: 6,
    title: "Shopping Cards",
    cat: "Web App",
    url: "https://shopping.mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/Redux-Shopping-Cart-App",
    img: shoping,
    video: Shopping,
    description: `Shopping Cart is a JavaScript-based web app using React, Redux, and Redux Thunk for state
    management and asynchronous actions, offering an interactive and efficient shopping experience.`,
    technologies: ["JavaScript", "React", "Redux", "Redux thunk"],
    live: "https://actual-live-url.com",
  },
];

export const softSkills = [
  "Time management",
  "Communication",
  "Empathy",
  "Teamwork",
  "Helpfulness",
  "Creativity",
  "Self-learning",
  "Accountability",
  "Problem solving",
  "Open-mindedness",
];
