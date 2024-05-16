//  import React from "react";
// // import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
 
// import { fadeIn, textVariant } from "../utils/motion";

// import { SectionWrapper } from "../hoc";
// import { Tilt } from "react-tilt";
 




//  const ServiceCard = ({ index, title,icon }) => {
//   return(
// <Tilt className='xs:w-[250px] w-full' >
// <motion.div 
// variants={fadeIn("right", "spring", index * 0.5, 0.75)}
// className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
// >
//   <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
// </motion.div>
// </Tilt>
//   )
// }

// const About = () => {
//   return(
//     <>
//     <motion.div 
    
//     variants={textVariant()}
//     >

//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p

//         // variants={fadeIn("", "", 0.1, 1)}

//         className='mt-4 
//         text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a skilled Full Stack Web Developer(MERN Stack) with experience in JavaScript, HTML, Css  and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring ideas to life!
        
//       </motion.p>
       

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>

//     </>
//   )
// }
// export default SectionWrapper (About, "about");





// ++++++++++++++++++++------------------+++++++++-------------+++++++++++++-


// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";
// import { Tilt } from "react-tilt";
// import profileImage from "/profile.jpg"; // Import  image





// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className='xs:w-[250px] w-full '>
//       <motion.div
//         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//         className='w-full green-pink-gradient p-[1px] custom-rounded shadow-card'
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className='bg-tertiary custom-rounded py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img
//             src={icon}
//             alt='web-development'
//             className='w-16 h-16 object-contain'
//           />
//           <h3 className='text-white text-[20px] font-bold text-center'>
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <div className='flex flex-col lg:flex-row items-center lg:items-start'>
//         <div className='flex-1'>
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}>Introduction</p>
//             <h2 className={styles.sectionHeadText}>Overview.</h2>
//           </motion.div>
//           <motion.p
//             className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//           >
//             I'm a skilled Full Stack Web Developer (MERN Stack) with experience in JavaScript, HTML, CSS, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring ideas to life!
//           </motion.p>
//         </div>
//         <div className='flex-1 lg:ml-10 mt-10 lg:mt-0'>
//           <motion.img
//             src={profileImage}
//             alt='Profile'
//             className='w-900px] h-[400px] rounded-full shadow-lg object-cover
//             ml-12 
//             droplet-shadow'
//             style={{ 
//               borderRadius: '30% 70% 70% 30% / 30% 36% 64% 70%', 
//               animation: 'bubble 4s infinite' 
//             }}
//             variants={fadeIn("", "", 0.3, 1)}
//           />
//         </div>
//       </div>
//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// }; 

// export default SectionWrapper(About, "about");




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";
// import { Tilt } from "react-tilt";
// import profileImage1 from "/profile.jpg"; // Import first image
// import profileImage2 from "/profile2.jpg"; // Import second image
// import { StarsCanvas } from "./canvas";

// const ServiceCard = ({ index, title, icon }) => {
//     return (
//       <Tilt className='xs:w-[250px] w-full '>
//         <motion.div
//           variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//           className='w-full green-pink-gradient p-[1px] custom-rounded shadow-card'
//         >
//           <div
//             options={{
//               max: 45,
//               scale: 1,
//               speed: 750,
//             }}
//             className='bg-tertiary custom-rounded py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//           >
//             <img
//               src={icon}
//               alt='web-development'
//               className='w-16 h-16 object-contain'
//             />
//             <h3 className='text-white text-[20px] font-bold text-center'>
//               {title}
//             </h3>
//           </div>
//         </motion.div>
//       </Tilt>
//     );
//   };

// const About = () => {
//   const [showFirstImage, setShowFirstImage] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirstImage((prev) => !prev);
//     }, 5000); // Change every 4 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className='flex flex-col lg:flex-row items-center lg:items-start'>
//         <div className='flex-1'>
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}>Introduction</p>
//             <h2 className={styles.sectionHeadText}>Overview.</h2>
//           </motion.div>
//           <motion.p
//             className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
//           >
//             I'm a skilled Full Stack Web Developer (MERN Stack) with experience in JavaScript, HTML, CSS, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring ideas to life!
//           </motion.p>
//         </div>
//         <div className='flex-1 lg:ml-10 mt-10 lg:mt-0'>
//           <div className='image-container  droplet-shadow  '>
//             <motion.img
//               src={showFirstImage ? profileImage1 : profileImage2}
//               alt='Profile'
//               className=' w-[400px] h-[400px] rounded-full shadow-lg object-cover ml-12'
//               style={{ 
//                 borderRadius: '30% 70% 70% 30% / 30% 36% 64% 70%', 
//                 animation: 'bubble 4s infinite, fadeInOut 5s infinite' 
//               }}
//               variants={fadeIn(1, 1, 2.3, 1.1)}
//             />
//           </div>
//         </div>
//       </div>
//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//       <StarsCanvas />
//     </>
//   );
// };

// export default SectionWrapper(About, "about");




// mobile view 


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import profileImage1 from "/profile.jpg"; // Import first image
import profileImage2 from "/profile2.jpg"; // Import second image
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] custom-rounded shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 750,
          }}
          className='bg-tertiary custom-rounded py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the width threshold as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center lg:items-start'>
        <div className='flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
          variants={fadeIn(0, 0, 0.3, 1)}
            className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
          >
            I'm a skilled Full Stack Web Developer (MERN Stack) with experience in JavaScript, HTML, CSS, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring ideas to life!
          </motion.p>
        </div>
        <div className='flex-1 lg:ml-10 mt-10 lg:mt-0 '>
          <div className='image-container  droplet-shadow  '>
            <motion.img
              src={showFirstImage ? profileImage1 : profileImage2}
              alt='Profile'
              className=' w-[400px] h-[400px] rounded-full shadow-lg object-cover ml-10  sm:mr-30'
              style={{ 
                borderRadius: '30% 70% 70% 30% / 30% 36% 64% 70%', 
                animation: 'bubble 4s infinite, fadeInOut 4s infinite' 
              }}
              // variants={fadeIn(1, 1, 2.3, 1.1)}

            />
          </div>
        </div>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {isMobileView && <StarsCanvas />}
    </>
  );
};

export default SectionWrapper(About, "about");
