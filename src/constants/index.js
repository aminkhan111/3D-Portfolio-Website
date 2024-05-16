import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    INuron,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Futuristic Web Developer",
      icon: web,
    },
    {
      title: "React & ThreeJs Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech Blogging",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
      image:"../assets/tech/css.png"
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
   
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "github",
      icon: github,
    },
  ];
  
  const experiences = [
    {
      title: "Master of Computer Applications(MCA)",
      company_name: "Gangadhar Meher University",
      icon: "https://www.gmuniversity.ac.in/assets/images/GM_University_logo1.png",
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Aug 2023",
      points: [
        "My MCA education provided me with a solid foundation in computer science principles and programming languages. Through coursework and practical projects, I honed my analytical thinking and problem-solving abilities, preparing me for the challenges of the tech industry. My academic journey instilled in me a passion for continuous learning and innovation, driving my pursuit of excellence in software development.",
      ],
    },
    {
      title: "Full Stack Web Development Course",
      company_name: "Pw Skill",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg",
      iconBg: "#E6DEDD",
      date: "May 2023 - Oct 2023",
      points: [
        "During my Full Stack Web Development course, I immersed myself in the world of MERN (MongoDB, Express.js, React.js, Node.js) Stack. Through practical projects and dedicated learning sessions, I became proficient in building dynamic and responsive web applications. This comprehensive training not only equipped me with technical expertise in React.js and related frameworks but also instilled in me a deep understanding of full-stack development principles. As a result, I am well-prepared to excel in various web development roles, leveraging my newfound skills and knowledge to create impactful digital experiences.",
      ],
    },
    {
      title: "Web Development Internship",
      company_name: "INeuron",
      icon: INuron,
      iconBg: "white",
      date: "Oct 2023 - Apr 2024",
      points: [
        " As a Web Development Intern, I gained valuable hands-on experience on Developing and maintaining web applications using JavaScript, React.js,NodeJs and MongoDb other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: " Your Company 😊!",
      company_name: "Your Company Name ",
      icon:"https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
      iconBg: "#E6DEDD",
      date: "May 2024 - Future",
      points: [
        "At [Your Company 😊], I am proud to be part of a dynamic team driving innovation and pushing the boundaries of web development. Working alongside talented professionals, I contribute to the creation of cutting-edge solutions that address complex business challenges. My role involves collaborating closely with stakeholders to understand requirements, architecting robust solutions, and delivering high-quality software that exceeds expectations. I am excited to continue growing and making a meaningful impact in shaping the future of technology at [ Your Company 😊].",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Amin consistently impressed with his dedication and  Curiosity to learning and his knack for innovative problem-solving. A standout student with a promising future.",
      name: "Pratik Mohapatra",
      designation: "Lecturer",
      company: "GM University",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      testimonial:
        " His attention to detail and innovative thinking set him apart, and I have no doubt that he will continue to thrive in his future endeavors.",
      name: "Sraban kumar",
      designation: "Peer's",
      company: "INeuron",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
      testimonial:
        " Amin stood out among candidates for his exceptional skills and passion for excellence. We eagerly anticipate his contributions to our team's success.",
      name: "[From You]",
      designation: "CTO",
      company: "  yr Company 😊",
      image: "https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",

      live_Project_link:"https://www.rose-island.co/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",

      live_Project_link:"https://mrpops.ua/en/",
   

    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",

      live_Project_link:"https://pad.dotincorp.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  