import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma, SiVite, SiWebpack } from "react-icons/si";

const MOCK_DATA = {
  name: "Alabi Ibrahim Abimbola",
  title: "FrontendDeveloper",
  tagline:
    "I am Alabi Ibrahim Abimbola, a passionate Frontend Developer specializing in React and modern JavaScript frameworks. I focus on building high-performance, accessible, and beautiful web applications.",

  // skills: [
  //   { name: "ReactJS", icon: "⚛️", category: "frontend" },
  //   // { name: "NextJS", icon: "⏭️", category: "frontend" },
  //   { name: "Tailwind CSS", icon: "💨", category: "frontend" },
  //   // { name: "Node.js", icon: "🟢", category: "backend" },
  //   // { name: "MongoDB", icon: "🍃", category: "database" },
  //   { name: "JavaScript (ES6+)", icon: "📜", category: "frontend" },
  //   // { name: "TypeScript", icon: "🔵", category: "frontend" },
  //   { name: "Git & GitHub", icon: "🐙", category: "tools" },
  //   { name: "Figma/Design", icon: "📐", category: "tools" },
  //   { name: "Webpack/Vite", icon: "⚙️", category: "tools" },
  // ],
            skills: [
    { 
      name: "ReactJS", 
      icon: FaReact, 
      color: "#61DAFB",
      category: "frontend" 
    },
    // { 
    //   name: "NextJS", 
    //   icon: SiNextdotjs, 
    //   color: "black",
    //   darkColor: "white",
    //   category: "frontend" 
    // },
    { 
      name: "Tailwind CSS", 
      icon: SiTailwindcss, 
      color: "#06B6D4",
      category: "frontend" 
    },
    // { 
    //   name: "Node.js", 
    //   icon: FaNodeJs, 
    //   color: "#339933",
    //   category: "backend" 
    // },
    // { 
    //   name: "MongoDB", 
    //   icon: SiMongodb, 
    //   color: "#47A248",
    //   category: "database" 
    // },
    { 
      name: "JavaScript (ES6+)", 
      icon: SiJavascript, 
      color: "#F7DF1E",
      category: "frontend" 
    },
    // { 
    //   name: "TypeScript", 
    //   icon: SiTypescript, 
    //   color: "#3178C6",
    //   category: "frontend" 
    // },
    // { 
    //   name: "Git & GitHub", 
    //   icon: [FaGitAlt, FaGithub], 
    //   colors: ["#F05032", "black"],
    //   darkColors: ["#F05032", "white"],
    //   category: "tools" 
    // },
    { 
      name: "Figma/Design", 
      icon: SiFigma, 
      color: "#F24E1E",
      category: "tools" 
    },
    { 
      name: "Webpack/Vite", 
      icon: [SiWebpack, SiVite], 
      colors: ["#8DD6F9", "#646CFF"],
      category: "tools" 
    },
  ],
  education: [
    {
      institution: "Ladoke Akintola University of Technology, Oyo State.",
      degree: "B.Tech. in Pure and Applied Mathematics",
      // years: "2015 - 2021",
      description:
        "Graduated with a B.Tech. in Pure and Applied Mathematics, developing strong analytical and problem-solving skills. During my studies, I explored computational methods, applied mathematical modeling, and gained hands-on experience with programming and data analysis, which laid the foundation for my transition into frontend development.",
      image: "https://placehold.co/150x100/1e293b/ffffff?text=University+Logo",
    },
  ],

  projects: [
    {
      title: "ErrandHive",
      description:
        "ErrandHive is a peer-to-peer platform connecting people who need errands done with verified local runners. It simplifies everyday tasks through real-time matching, secure payments, and trusted profiles — saving users time while creating flexible income opportunities.",
      tags: ["React", "Context-Api"],
      image: "/ErndHive.png",
      link: "https://real-estate-starter-main-lyart.vercel.app/",
    },
    {
      title: "HomeLand",
      description: `A comprehensive real estate web application that allows users to search, filter, and explore available houses within specific locations. 
        It includes features like location-based search, price range filters, property type selection, interactive maps, and a responsive design for mobile and desktop. 
        Users can view detailed property information, images, and contact sellers directly through the platform.`,
      tags: ["React.js", "Tailwind CSS"],
      image: "/homeland.png",
      link: "https://real-estate-starter-main-lyart.vercel.app",
    },
{
    title: "Ecommerce",
    description: `A simple and functional ecommerce web application where users can browse available products, view detailed product pages, and add items to their cart. 
      It includes features like product listings, dynamic product detail pages, an intuitive add-to-cart system, and a clean responsive interface designed for both mobile and desktop devices.`,
    tags: ["React.js"],
    image: "/Ecommerce.png",
    link: "https://product-addtocart.vercel.app",
  },
  ],

  contact: {
    email: "ibrahimade92@gmail.com",
    phone: "09035188432",
    location: "Lagos, Nigeria",
    social: {
      linkedin: "https://www.linkedin.com/in/ibrahim-abimbola-alabi-602631246/",
      // twitter: "https://twitter.com/swaraj_dev",
      github: "https://github.com/abimbolaalabi",
      website: "",
    },
  },
};

export default MOCK_DATA;
