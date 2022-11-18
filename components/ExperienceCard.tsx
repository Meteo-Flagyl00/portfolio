import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[650px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="picPro"
      />
      <div className="px-0 md:px-10">
        <h4 className="test-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
            className='h-10 w-10 rounded-full'
            key={technology._id} 
            src={urlFor(technology.image).url()} 
            />
          ))}


          <img className="h-2 w-10 rounded-full" src="" alt="tech" />
          
        </div>
        <p className='uppercase py-5 text-gray-500'>
          {new Date(experience.dateStarted).toDateString()} - {""}
          {experience.isCurrentlyworkingHere 
          ?"Present"
          :new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-80 overflow-y-scroll">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard