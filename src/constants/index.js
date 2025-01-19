import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  background,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  html,
  reactjs,
  nodejs,
  expressjs,
  css,
  javascript,
  tailwindcss,
  mongodb,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "0 to 1 Bootcamp",
    text: "Master the essentials of Web Development, starting with HTML, CSS, and JavaScript, and establish a strong foundation to launch your industry-ready journey.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    itenary: [
      {
        id: "0",
        title: "HTML",
        description: "",
      },
      {
        id: "1",
        title: "CSS",
        description: "",
      },
      {
        id: "2",
        title: "Vanilla JavaScript",
        description: "",
      },
    ],
  },
  {
    id: "1",
    title: "1 to 100 Bootcamp",
    text: "Elevate to Fullstack Web Development by mastering ReactJS and TailwindCSS for the Frontend, paired with NodeJS, ExpressJS, and MongoDB for Backend.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
    itenary: [
      {
        id: "0",
        title: "ReactJS",
        description: "",
      },
      {
        id: "1",
        title: "NodeJS",
        description: "",
      },
      {
        id: "2",
        title: "ExpressJS",
        description: "",
      },
      {
        id: "3",
        title: "MongoDB",
        description: "",
      },
      {
        id: "4",
        title: "TailwindCSS",
        description: "",
      },
    ],
  },
];

export const fullCourseDetails = [
  {
    id: "0",
    title: "HTML",
    description: "",
  },
  {
    id: "1",
    title: "CSS",
    description: "",
  },
  {
    id: "2",
    title: "Basic JavaScript",
    description: "",
  },
];

export const collabText =
  "HTML, CSS, JavaScript, NodeJS, ExpressJS, MongoDB, ReactJS, TailwindCSS";

export const collabContent = [
  {
    id: "0",
    title: "Live Lectures",
  },
  {
    id: "1",
    title: "Project Building",
  },
  {
    id: "2",
    title: "Notes",
  },
  // {id:"3", title: ""}
];

export const collabApps = [
  {
    id: "0",
    title: "ReactJS",
    icon: reactjs,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "NodeJS",
    icon: nodejs,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "ExpressJS",
    icon: expressjs,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "HTML",
    icon: html,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "CSS",
    icon: css,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Javascript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "MongoDB",
    icon: mongodb,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "TailwindCSS",
    icon: tailwindcss,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "0 to 1 Bootcamp",
    description: "Access to 0 to 1 Bootcamp",
    price: "699",
    features: [
      "Live Lectures",
      "Live Session Recording",
      "Projects",
      "Mentorship",
    ],
  },
  {
    id: "1",
    title: "0 to 100 Bootcamp",
    description: "Access to 0 to 100 Bootcamp",
    price: "1999",
    features: [
      "Live Lectures",
      "Live Session Recording",
      "Projects",
      "Mentorship",
    ],
  },
  {
    id: "2",
    title: "1 to 100 Bootcamp",
    description: "Access to 1 to 100 Bootcamp",
    price: "1299",
    features: [
      "Live Lectures",
      "Live Session Recording",
      "Projects",
      "Mentorship",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ayush Biswas",
    text: "The live lectures in Hindi made even tough concepts super easy to understand. Loved the clarity and pace!",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Koustubh Patel",
    text: "Learning by building projects was amazing! I actually understood how things work instead of just theory.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Yash Rajput",
    text: "Whenever I had doubts or needed help with projects, the mentors were always available and super helpful!",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Harshad Kushwah",
    text: "Totally worth the price! The quality and content are way better than other expensive courses I’ve seen.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Shruti Dev Tripathi",
    text: "The group activities and discussions with classmates made learning so much more fun and interactive.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Parth Patidar",
    text: "The bootcamp was super fun! I learned a lot, made friends, and enjoyed every bit of it.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "1",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "#",
  // },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/algonux/",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
