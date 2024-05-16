// import React from 'react'
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { styles } from "../styles";

// const Tech = () => {
//   return(
//    <div  className='flex   flex-wrap justify-center gap-10'>
//     <h2 className={styles.technologyHead}  >Tech Stack</h2>
//     <div className='flex flex-row flex-wrap justify-center gap-11  '> 
    
//     {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>

// <BallCanvas icon={technology.icon} />
//           </div>
//     ))}
//     </div>
//     </div>

//   )
// }
// export default SectionWrapper(Tech, "");





// import React from 'react';
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { styles } from "../styles";

// const Tech = () => {
//   const handleButtonClick = (name) => {
//     // Handle button click logic here
//     console.log(`Button clicked: ${name}`);
//   };

//   return (
//     <div className='flex flex-wrap justify-center gap-10'>
//       <h2 className={styles.technologyHead}>Tech Stack</h2>
//       <div className='flex flex-row flex-wrap justify-center gap-11'>
//         {technologies.map((technology) => (
//           <div className='flex flex-col items-center' key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//             <button
//               className='mt-2 bg-purple-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
//               onClick={() => handleButtonClick(technology.name)}
//             >
//               {technology.name}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");



// import React, { useState, useEffect } from 'react';
// import { SectionWrapper } from '../hoc';
// import { technologies } from '../constants';
// import { styles } from '../styles';
// import { BallCanvas } from './canvas';

// const Tech = () => {
//   const [isMobileView, setIsMobileView] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 768); // Adjust the width threshold as needed
//     };
//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleButtonClick = (name) => {
//     // Handle button click logic here
//     console.log(`Button clicked: ${name}`);
//   };

//   return (
//     <div className="flex flex-wrap justify-center gap-10">
//       <h2 className={styles.technologyHead}>Tech Stack</h2>
//       <div className="flex flex-row flex-wrap justify-center gap-11">
//         {technologies.map((technology) => (
//           <div className="flex flex-col items-center" key={technology.name}>
//             {!isMobileView && <BallCanvas icon={technology.icon} />}
//             <button
//               className="mt-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full"
//               onClick={() => handleButtonClick(technology.name)}
//             >
//               {technology.name}
//               <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />

//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, '');




import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { BallCanvas, StarsCanvas } from './canvas';

const Tech = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the width threshold as needed
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = (name) => {
    // Handle button click logic here
    console.log(`Button clicked: ${name}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-10">

      <h2 className={styles.technologyHead}>Tech Stack</h2>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center" key={technology.name}>
            {isMobileView && (
              <>
                <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain bg-blue-100 rounded-full" />
                <span className="text-center mt-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-0.5 px-3 customB-rounded">{technology.name}</span>
                 
              </>
            )}
            {!isMobileView && <BallCanvas icon={technology.icon} />}
            {!isMobileView && (
              <button
                // className="mt-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-4 rounded-full"

                className="text-center bg-tertiary py-2 px-6 customB-rounded outline-none w-fit ml-5 text-white font-bold shadow-md shadow-primary"

                onClick={() => handleButtonClick(technology.name)}
              >
                {technology.name}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');


