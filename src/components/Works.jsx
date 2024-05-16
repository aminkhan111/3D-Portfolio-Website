import React from "react";
 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
 
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { StarsCanvas } from "./canvas";
 

const ProjectCard = ({ index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_Project_link,
}) =>{

return (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 custom-rounded sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover custom-rounded"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className=" purple-gradient w-10 h-10   rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
               
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
      <div className="flex items-center gap-8">
  <h3 className="text-white font-bold text-[24px] " >{name}</h3>
  <button className="ml-6 px-[12px] py-[4px] bg-purple-700 text-white rounded-full  font-semibold"  onClick= {() => window.open(live_Project_link, "_blank")}>Live Link🔗↗️</button>
</div>

          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
         
    </Tilt>
  </motion.div>
);

}

const Works = () => {
  return(
   <>
   <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} className ="custom-rounded" />
        ))}
      </div>

      
   </>
  )
}
export default SectionWrapper(Works, "");