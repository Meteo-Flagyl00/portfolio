import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src=""
        alt="picPro"
      />
      <div className="px-0 md:px-10">
        <h4 className="test-4xl font-light">CEO of Ntng</h4>
        <p className="font-bold text-2xl">NtngFam</p>
        <div className="flex space-x-2 my-2">
          <img className="h-2 w-10 rounded-full" src="https://www.flaticon.com/free-icons/react" alt="tech Used" />
          <img className="h-2 w-10 rounded-full" src="" alt="tech Used" />
          <img className="h-2 w-10 rounded-full" src="" alt="tech Used" />
        </div>
        <p>Started work:.. - Ended:...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard