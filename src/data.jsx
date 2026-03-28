import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { team_1, team_2, team_3, team_4} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Community",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"MentorShip",id:'blog'},
];

export const services = [
  {
    name:" Digital Trading Education",
    icon:<SiBlueprint/>,
    description:`Build strong trading skills through our structured forex 
    training program. Learn chart analysis, risk control, market psychology, 
    and strategy development with real-world examples and expert mentorship.`,
  },
  {
    name:"Signal Services & Live Trading",
    icon:<FaDrawPolygon/>,
    description:`Receive high-probability trade signals and experience the markets
     live. Join our analysts in real-time trading rooms and learn practical execution
      strategies from professionals.`,
  },
  {
    name:"Financial Literacy & Wealth Management",
    icon:<GrUserManager/>,
    description:`Understand money better—how to grow it, manage it, and make it work for
    you. We teach budgeting, investing, and wealth strategies for long-term financial stability.`,
  },
  {
    name:"Community Access & Co-Trading Space",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Connect with fellow traders and entrepreneurs in a shared learning environment. 
    Access our co-trading space for collaboration, mentorship, and accountability.`,
  },
  {
    name:"Business Creation Support",
    icon:<AiOutlineFileProtect/>,
    description:`Launch your dream business with expert help every step of the way—from idea validation 
    to branding, legal setup, and growth planning tailored to your vision.`,
  },
  {
    name:"Automation & Technology",
    icon:<IoConstructSharp/>,
    description:`Automate your trading or business operations using powerful tools, bots, and custom 
    software designed to help you save time, reduce errors, and scale faster.`,
  },
];

export const teams = [
  {
    name:"Salis Ibrahim Salis",
    title:"CEO/Analyst",
    profile:team_1,
    social:[
      {name:"Telegram",icon:<FaTelegram/>,url:"https://t.me/+CyPNlOCXTslmOGE8"},
      {name:"Instagram",icon:<FaInstagram/>,url:"https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr"},
    ]
  },
  {
    name:"Rahma Sani",
    title:"Head of Student Affairs/Analyst",
    profile:team_2,
    social:[
      {name:"Telegram",icon:<FaTelegram/>,url:"https://t.me/+CyPNlOCXTslmOGE8"},
      {name:"Instagram",icon:<FaInstagram/>,url:"https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr"},
    ]
  },
  {
    name:"Aliyu Muhammad ",
    title:"CTO/Analyst",
    profile:team_3,
    social:[
      {name:"Telegram",icon:<FaTelegram/>,url:"https://t.me/+CyPNlOCXTslmOGE8"},
      {name:"Instagram",icon:<FaInstagram/>,url:"https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr"},
    ]
  },
  {
    name:"Yusuf Ibrahim Salis",
    title:"CFO/Analyst",
    profile:team_4,
    social:[
      {name:"Telegram",icon:<FaTelegram/>,url:"https://t.me/+CyPNlOCXTslmOGE8"},
      {name:"Instagram",icon:<FaInstagram/>,url:"https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr"},
    ]
  },
];

export const testimonial = [
  {
    name: "Amina Yusuf",
    occupation: "Alumni – Forex Bootcamp",
    image: "/images/amina.jpg",
    review:
      "Joining this academy was the best decision I ever made for my trading journey. The mentorship and live sessions changed everything.",
  },
  {
    name: "David Uche",
    occupation: "Beginner Trader",
    image: "/images/david.jpg",
    review:
      "The strategy classes are simplified and practical. I started from zero and now I confidently analyze charts on my own.",
  },
  {
    name: "Sarah Okonkwo",
    occupation: "ICT Concepts Enthusiast",
    image: "/images/sarah.jpg",
    review:
      "I finally understood market structure and liquidity grabs! This academy breaks it down in a way no one else does.",
  },
  {
    name: "Tunde Bamidele",
    occupation: "Full-time Trader",
    image: "/images/tunde.jpg",
    review:
      "From live markups to risk management sessions, the support here is next-level. It’s more than a school — it’s a family.",
  },
  {
    name: "Fatima Sule",
    occupation: "Signal Group Member",
    image: "/images/fatima.jpg",
    review:
      "The Telegram community is fire! I get timely trade ideas, feedback, and even mindset coaching. Totally worth it.",
  },
];

export const contacts = [
  {
    name:"Email",
    value:"quantumpipsseekers@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+2349120810735",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"NO.1 Dunukofia Street, Abuja.",
    icon:<IoLocationOutline/>,
  },
];


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
];

// data.jsx
export const achievements = [
  {
    title: "Traders Mentored",
    value: 200,
    icon: "FaUsersLine",
  },
  {
    title: "Signals Delivered",
    value: 1000,
    icon: "FaDiagramProject",
  },
  {
    title: "Winning Strategies",
    value: 10,
    icon: "GiTeamIdea",
  },
  {
    title: "Consistent Monthly Wins",
    value: 30,
    icon: "FaAward",
  },
];
