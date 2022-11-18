import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
  const [text, count]= useTypewriter({
    words: [
      `Hi, My name is ${pageInfo?.name}`,
      "Guy-who-loves-to-play-Games.ggEZ",
      "<ButIntiguedToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        height="50"
        width="50"
        alt="picture"
      />
      <div className='z-20'>
        <h2 className="test-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
          <Link href="#contact">
            <button className='heroBtn'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero