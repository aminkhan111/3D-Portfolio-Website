// import { BrowserRouter } from "react-router-dom";


// import {About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works} from "./components";

// const App = () => {

//   return (
//     <BrowserRouter>
//     <div className="relative z-0 bg-primary">

//       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//         <Navbar/>
//         <Hero />
        
//       </div>

// <About />
// <Experience />

// <div className="relative">
//           <Tech />
//         </div>


// <Works />
// <Feedbacks />
 
// <div className="relative z-0">
// <Contact />
// <StarsCanvas />
// </div>
//     </div>  
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay to show loading state
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//     }, 10000); // Change the delay time as needed

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary  align-super mt-0">
//         {/* Loading Image */}
//         {isLoading && (
//            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
//            <img src="Limage.png" alt="Loading" className="w-90 h-90 rounded-xl" />
//        </div>
//         )}

//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>

//         <About />
//         <Experience />

//         <div className=" bg-cover bg-no-repeat bg-center">
//           <Tech />
//         </div>

//         <Works />
//         <Feedbacks />

//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show loading state
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Change the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Loading Image */}
        {isLoading && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="relative">
              <img src="Limage.png" alt="Loading" className="w-90 h-90 rounded-xl" />
              <button
                onClick={handleClose}
                className="absolute top-0 right-0 m-2 text-white bg-purple-600 rounded-full p-2"
              >
                ✖
              </button>
            </div>
          </div>
        )}

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />

        <div className="relative">
          <Tech />
        </div>

        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;




