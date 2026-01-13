export const words =[
   {text: 'Hello!', imgPath: '/images/flags/canada.svg'}, // English
    {text: 'Bonjour', imgPath: '/images/flags/france.svg'}, // French
    {text: 'བཀྲ་ཤིས་བདེ་ལེགས', imgPath: '/images/flags/tibet.png'}, // Tibetan
    {text: 'こんにちは', imgPath: '/images/flags/japan.png'}, // Japanese (Fixed path)
    {text: '你好', imgPath: '/images/flags/china.png'}, // Chinese (Fixed path)
    {text: 'Hola', imgPath: '/images/flags/spain.png'}, // Spanish
    {text: 'Ciao', imgPath: '/images/flags/italy.svg'}, // Italian
    {text: 'Hallo', imgPath: '/images/flags/germany.svg'}, // German
    {text: '안녕하세요', imgPath: '/images/flags/korea.png'}, // Korean
    {text: 'नमस्ते', imgPath: '/images/flags/india.png'}, // Hindi
    {text: 'Olá', imgPath: '/images/flags/portugal.png'}, // Portuguese
    {text: 'مرحبا', imgPath: '/images/flags/uae.webp'}, // Arabic
    {text: 'Sawasdee', imgPath: '/images/flags/thailand.png'}, // Thai
    {text: 'Xin chào', imgPath: '/images/flags/vietnam.svg'}, // Vietnamese
    
]

export const counterItems = [
    {value: 4, suffix: "+", label: "Hands on Experience"},
    {value: 20, suffix: "+", label: "Completed Projects"},
    {value: 3, suffix: "+", label: "Internship/Co-op Experience"},
    {value: 2, suffix: "+", label: "Research Experience"}
]   



export const projects = [
    {
        id: 1,
        title: "Smart Stock",
        desc: "A personalized stock report generator using NextJS, MongoDB, and Google Gemini API.",
        img: "/images/smartstocks.png",
        background: "", 
        github: "https://github.com/namte24/TS-Stocks",
        live: "https://ts-stocks.vercel.app/",
    },
    {
        id: 2,
        title: "ProfileIQ",
        desc: "Analyze your resume against job descriptions to boost your hiring chances.",
        img: "/images/profileIQ.png",
        background: "#ffefdb",
        github: "https://github.com/namte24/Ai-Resume-Analyzer",
        live: "https://ai-resume-analyzer-ochre-tau.vercel.app/",
    },
    {
        id: 3,
        title: "Pokedex App",
        desc: "A detailed Pokemon encyclopedia built with React and the PokeAPI.",
        img: "/images/pokedex.png",
        background: "#ffe7eb",
        github: "https://github.com/namte24/Pokedex-2",
        live: "https://pokedex-2-lac.vercel.app",
    },
    {
        id: 4,
        title: "MovieZ",
        desc: "Browse trending movies and view cast details dynamically.",
        img: "/images/moviez.png", 
        background: "#e0f7fa",
        github: "https://github.com/namte24/MovieZ",
        live: "https://movie-z-kappa.vercel.app",
    },
    {
        id: 5,
        title: "Anime App",
        desc: "Checkout all the trending animes and also get to know characters through a detailed characters page.",
        img: "/images/anime.png", 
        background: "#e0f7fa",
        github: "https://github.com/namte24/AnimeApp",
        live: "https://anime-app-mocha.vercel.app",
    },
    {
        id: 6,
        title: "Real Estate",
        desc: "Have a look at your dream propery with seamless scrolling and delightful user experience.",
        img: "/images/Homyz.png", 
        background: "#e0f7fa",
        github: "https://github.com/namte24/Real-State-Frontend",
        live: "https://real-state-frontend-zeta.vercel.app",
    },
    
];


export const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Education",
        link: "#education",

    },
    {
        name: "Skills",
        link: "#skills"
    }
]

export const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
 
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/github.webp",
  },
  {
    imgPath: "/images/logos/reactlogo.png",
  },
];

export const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

export const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git/ GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const expCards = [
  {
    review:
      "Demonstrated strong backend engineering skills by optimizing database performance and building secure booking infrastructure at Netsepq Solutions.",
    imgPath: "/images/logos/netspeq.jpeg", 
    logoPath: "/images/logos/netspeq.jpeg", 
    title: "Web Developer - Netspeq Solutions",
    date: "Jan 2023 - July 2023", 
    responsibilities: [
      "Built a clinic booking system (ASP.NET, SQL) implementing slot search, booking logic, role-based access control, and audit logs.",
      "Normalized database schema and added indexes, cutting slow query execution time from multi-second to sub-300ms.",
      "Exposed REST endpoints with validation/authentication and improved error logging to speed up incident triage.",
    ],
  },
  {
    review:
      "Focused on accessibility and user-centric design to streamline community reporting tools for the Brantford Police Service.",
    imgPath: "/images/logos/brantfordPolice.png", 
    logoPath: "/images/logos/brantfordPolice.png", 
    title: "UI/UX Developer - Brantford Police Service",
    date: "Jan 2025 - May 2025 ", 
    responsibilities: [
      "Produced mobile-first wireframes and clickable prototypes to simplify incident reporting and resource flows.",
      "Applied accessibility basics (contrast, tap targets, hierarchy) to ensure inclusivity for all users.",
      "Validated designs with hallway testing to ensure intuitive user navigation.",
    ],
  },
  {
    review:
      "Brought technical gameplay mechanics to life in Unity, ensuring an engaging experience for the target demographic at Enactus Laurier.",
    imgPath: "/images/logos/enactus.jpeg", 
    logoPath: "/images/logos/enactus.jpeg", 
    title: "Game Developer - Enactus Laurier",
    date: "Sep 2025 - Dec 2025", 
    responsibilities: [
      "Engineered core gameplay mechanics in Unity (C#), including third-person camera tracking and rigid-body player movement.",
      "Implemented interaction systems for NPCs and objects to enhance game immersion.",
      "Delivered a playable 'grey box' prototype, implementing physics-based logic and UI triggers for the target demographic (ages 8–13).",
    ],
  },
];

export const eduData = [
  {
    id: 1,
    institution: "Wilfrid Laurier University",
    logo: "/images/logos/wlu.jpg", // Make sure to add this image to your public folder
    degree: "Master's in Applied Computing",
    date: "Sep 2024 - Dec 2025",
    description: "Achieved a GPA of 3.8. Specialized in advanced software development methodologies, machine learning, and distributed systems.",
    skills: ["Applied Computing", "Distributed Systems", "Advanced Algorithms"],
  },
  {
    id: 2,
    institution: "Sikkim Manipal Institute of Technology",
    logo: "/images/logos/smit.png", // Make sure to add this image to your public folder
    degree: "Bachelor's in Computer Science",
    date: "2019 - 2023", // Adjusted estimate; feel free to correct
    description: "Graduated with 80% distinction. Built a strong foundation in computer science principles, database management, and software engineering.",
    skills: ["Data Structures", "Object Oriented Programming", "Database Management"],
  },
];

export const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logos/netspeq.jpeg",
  },
  {
    name: "logo2",
    imgPath: "/images/logos.brantfordPolice.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logos/enactus.jpeg",
  },
];

export const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/namte1738/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/tenam.surkhang/",
    imgPath: "/images/fb.png",
  },
  {
    name: "Github",
    url: "https://github.com/namte24",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    url: "www.linkedin.com/in/tenzing-bhutia-a67b3b22a",
    imgPath: "/images/linkedin.png",
  },
]