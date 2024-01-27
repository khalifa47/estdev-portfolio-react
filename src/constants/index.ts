import {
  kplc,
  strath,
  javascript,
  typescript,
  reactjs,
  nextjs,
  mui,
  tailwind,
  prisma,
  azure,
  firebase,
  python,
  git,
  figma,
  supabase,
  kplcClearance,
  disney,
  rems,
  ploxy,
  ntsa,
  karo,
} from "../assets";

export const navLinks = [
  {
    link: "#about",
    title: "About",
  },
  {
    link: "#experience",
    title: "Experience",
  },
  {
    link: "#projects",
    title: "Projects",
  },
  {
    link: "https://github.com/khalifa47",
    title: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/khalifa-fumo-4199781ba/",
    title: "LinkedIn",
  },
  {
    link: "https://drive.google.com/file/d/1Y9euqs9OMPXQOk3VXwiX5BjGwVOvhhrU/view?usp=sharing",
    title: "Resume",
  },
];

export const experiences = [
  {
    title: "Full-stack Developer/IT intern",
    company_name: "Kenya Power",
    icon: kplc,
    iconBg: "#fff",
    date: "January 2023 - April 2023",
    points: [
      "Developed a full-stack web employee clearance system using Next 13 with TypeScript and a MySQL database.",
      "Led a team and participated in reviews, receiving constructive feedback from end-users.",
      "Implemented best practices of software development including responsive design and cross-browser compatibility.",
      "Conducted ICT support work and trainings within various ICT departments.",
    ],
  },
  {
    title: "Computer Science Student",
    company_name: "Strathmore University",
    icon: strath,
    iconBg: "#E6DEDD",
    date: "April 2020 - July 2024",
    points: [
      "Developed various web and mobile applications for coursework.",
      "Learnt and applied various software development concepts including data structures, algorithms, and object-oriented programming.",
      "Collaborated with teams including designers and other developers to create high-quality products.",
      "Achieved various awards and including Dean's list 2020, 2021, and 2022.",
    ],
  },
];

export const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

export const projects = [
  {
    name: "KPLC Clearance",
    description:
      "An employee clearance system designed to facilitate the clearance process for exiting members of staff at Kenya Power.",
    tags: ["Next13", "MaterialUI", "MySQL", "Prisma"],
    image: kplcClearance,
    link: "https://kplc-clearance.vercel.app/",
    creds:
      "https://drive.google.com/file/d/1T6fJ1-lsvgm8xV3nE2mdsVDXDANOd90D/view?usp=share_link",
    source_code_link: null,
  },
  {
    name: "Disney Plus Clone",
    description:
      "A Disney Plus clone (not exact) that displays the latest movie updates and trailers, powered by the TMDb and YouTube APIs.",
    tags: ["React", "Redux", "styled-components", "Firebase"],
    image: disney,
    link: "https://disney-clone-plus-ae2ae.web.app",
    creds: null,
    source_code_link: "https://github.com/khalifa47/disney-plus-clone",
  },
  {
    name: "REMS",
    description:
      "A real estate management system. From searching for properties to management of properties, this web application has it all!",
    tags: ["Laravel", "ReactMUI", "MySQL", "MPesaAPI"],
    image: rems,
    link: null,
    creds: null,
    source_code_link: null,
  },
  {
    name: "Ploxy News",
    description:
      "A news application that displays the latest news updates at a glance with different categories.",
    tags: ["ReactMUI", "Redux", "NewsAPI", "Firebase"],
    image: ploxy,
    link: null, // "https://ploxy-ccf01.web.app"
    creds: null,
    source_code_link: "https://github.com/khalifa47/ploxy",
  },
  {
    name: "NTSA Drivers",
    description:
      "An application dealing with the driver's licence management. Dummy data is used to mock the government registry.",
    tags: ["ReactMUI", "Redux", "MpesaAPI", "Firebase"],
    image: ntsa,
    link: "https://ntsadrivers.web.app/",
    creds:
      "https://github.com/khalifa47/ntsa-drivers/blob/master/src/records.json",
    source_code_link: "https://github.com/khalifa47/ntsa-drivers",
  },
  {
    name: "Karo",
    description: "An Android application dealing with school fees management.",
    tags: ["Android", "Kotlin", "Compose", "Firebase"],
    image: karo,
    link: null,
    creds: null,
    source_code_link: "https://github.com/khalifa47/karo",
  },
];
