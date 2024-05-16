// // import React from 'react'
// // import { motion } from 'framer-motion';
// // import { styles } from '../styles';
// // import { ComputersCanvas } from './canvas';

// // const Hero = () => {
// //   return (
// //      <section className='relative w-full h-screen mx-auto'> 
// //      <div 
// //      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
// //      >
// //       <div className='flex flex-col justify-center items-center mt-5'>

// //       <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
// //       <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
// //       </div>

// //       <div>

// //       <h1 className={`${styles.heroHeadText} text-white`}>
// //             👋 Hi, I'm <span className='text-[#915EFF]'>Amin Khan</span>
// //           </h1>

// //           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
// //         An Enthusiastic Full Stack Web Developer 👨‍💻, <br className='sm:block hidden' />
// //           I develop Stunning 💫 <br/> 
// //           Web Application,
// //             User Interfaces(UI/UX)
// //             <br className='sm:block hidden' /> and 3D Visuals..👀   
// //           </p>
// //       </div>     
// //      </div> 


// //      <ComputersCanvas />

// //      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
// //         <a href='#about'>
// //           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
// //             <motion.div
// //               animate={{
// //                 y: [0, 24, 0],
// //               }}
// //               transition={{
// //                 duration: 1.2,
// //                 repeat: Infinity,
// //                 repeatType: "loop",
// //               }}
// //               className='w-3 h-3 rounded-full bg-secondary mb-1'
// //             />
// //           </div>
// //         </a>
// //       </div>

// //      </section>
// //   );
// // };
 
// // export default Hero;







// import React from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div 
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             👋 Hi, I'm <span className='text-[#915EFF]'>Amin Khan</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             An Enthusiastic Full Stack Web Developer 👨‍💻, <br className='sm:block hidden' />
//             I develop Stunning 💫 <br/> 
//             Web Application,
//             User Interfaces(UI/UX)
//             <br className='sm:block hidden' /> and 3D Visuals..👀   
//           </p>
//         </div>     
//       </div> 

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.2,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// not ---------shown in small Screen 

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';
// // Import your image file
// import mobileImage from '/cimage.png'; // Replace with the actual path to your mobile image

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if the screen width is less than a certain threshold (e.g., 768 pixels) to determine if it's a mobile device
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Call initially to set the correct state
//     window.addEventListener('resize', handleResize); // Add event listener for resize

//     return () => {
//       window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
//     };
//   }, []);

//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div 
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             👋 Hi, I'm <span className='text-[#915EFF]'>Amin Khan</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             An Enthusiastic Full Stack Web Developer 👨‍💻, <br className='sm:block hidden' />
//             I develop Stunning 💫 <br/> 
//             Web Application,
//             User Interfaces(UI/UX)
//             <br className='sm:block hidden' /> and 3D Visuals..👀   
//           </p>
//         </div>     
//       </div> 

//       {isMobile ? (
//         <div className='mobile-image-placeholdern mt-20'>
//           {/* Show image for mobile devices */}
//           <img src={mobileImage} alt="Mobile Image" className="w-full mx-auto mt-20" />
//         </div>
//       ) : (
//         // Show ComputersCanvas for desktop devices
//         <ComputersCanvas />
//       )}

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.2,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';
// // Import your image file
// import mobileImage from '/cimage.png'; // Replace with the actual path to your mobile image

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if the screen width is less than a certain threshold (e.g., 768 pixels) to determine if it's a mobile device
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Call initially to set the correct state
//     window.addEventListener('resize', handleResize); // Add event listener for resize

//     return () => {
//       window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
//     };
//   }, []);

//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div 
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             👋 Hi, I'm <span className='text-[#915EFF]'>Amin Khan</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             An Enthusiastic Full Stack Web Developer 👨‍💻, <br className='sm:block hidden' />
//             I develop Stunning 💫 <br/> 
//             Web Application,
//             User Interfaces(UI/UX)
//             <br className='sm:block hidden' /> and 3D Visuals..👀   
//           </p>
//         </div>     
//       </div> 

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.2,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>

//       {isMobile && (
//         <div className='absolute bottom-0 left-0 right-0 mx-auto mt-0  w-full max-w-md'>
//           {/* Show image for mobile devices */}
//           <img src={mobileImage} alt="Mobile Image" className="w-full" />
//           {/* Set a max-width and center the image */}
//         </div>
//       )}

//       {!isMobile && <ComputersCanvas />} {/* Render ComputersCanvas only if it's not a mobile device */}

//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
// Import your image file
import mobileImage from '/cimage.png'; // Replace with the actual path to your mobile image

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than a certain threshold (e.g., 768 pixels) to determine if it's a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call initially to set the correct state
    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div 
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            👋 Hi, I'm <span className='text-[#915EFF]'>Amin Khan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An Enthusiastic Full Stack Web Developer 👨‍💻, <br className='sm:block hidden' />
            I develop Stunning 💫 <br/> 
            Web Application,
            User Interfaces(UI/UX)
            <br className='sm:block hidden' /> and 3D Visuals..👀   
          </p>
        </div>     
      </div> 

      <div className='absolute xs:bottom-5 xs:mt-2   bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] 
          sm:mt-0
          rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      {/* Render ComputersCanvas only if it's not a mobile device */}
      {!isMobile && <ComputersCanvas />}

      {isMobile && (
        <div className='absolute bottom-0 left-0 right-0 mx-auto w-full max-w-md mt-4'> 
          {/* Show image for mobile devices */}
          <img src={mobileImage} alt="Mobile Image" className="w-full" />
          {/* Set a max-width and center the image */}
        </div>
      )}

      
    </section>
  );
};

export default Hero;
