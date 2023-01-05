import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import devImage from '../assets/dev3.png';

const AboutText = ({ about }) => {
  if (about === 0) {
    return (
      <img
        className="fade-in-element self-center w-1/3 max-w-auto h-1/3 max-h-auto transition-all delay-200"
        src={devImage}>
      </img>
    );
  } else {
    return (
      <div className="fade-in-element transition-all delay-200 px-6 md:px py-2 md:py-10 w-1/2">
        <div className="md:text-5xl text-2xl font-aboutfont italic">About Me</div>
        <div className="flex flex-col justify-between md:text-xl italic py-2">
          <div className="my-1">Hello! I'm Syed Ahmad and I like to build web applications. Ever since I remember coming
            into contact with computers and had a vague idea of how they worked, I have loved to program.</div>
          <div className="my-1">So far I'm learning and have worked with various JavaScript frameworks like Node, React,
            React Native, Tailwind CSS and GatsbyJS. And I am learning everyday, furthering my skills towards the
            eventual goal of becoming a true full stack developer. I'm based in Kolkata, India (though okay with
            relocating, given the opportunity) and presently pursuing an undergrad degree in engineering.</div>

          <div className="mt-8">If this interested you enough, maybe you'd like to see some of the <Link
            className="underline hover:text-green-light hover:underline transition-all duration-200" to="/portfolio">
            things I've built</Link> or perhaps you just want to <Link
              className="underline hover:text-green-light hover:underline transition-all duration-200" to="/about">
              chat for a bit</Link>. I'm always actively looking for opprtunities to utilize and further my skills so
            thank you for your time.</div>
        </div>
      </div>
    );
  }
}

const HiText = ({ hovered, touch }) =>
  <div className="flex flex-col py-10">
    <p className="md:text-5xl text-2xl my-1">Hi,</p>
    <p className="md:text-5xl text-2xl my-1">I'm Syed</p>
    <p className="md:text-5xl text-xl my-1">Aspiring Web Developer</p>
    <Link
      className="flex items-center md:text-2xl text-xl my-5 p-1.5 mr-auto rounded-md bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200"
      to="/about"
    >
      Contact Me <FiArrowRight className="ml-1" />
    </Link>
    {hovered === 0 ? <p className="mt-24">{touch ? <>Tap</> : <>Hover</>} to know more...</p> : <></>}
  </div>;

const HiCards = () => {
  const [about, toggleAbout] = useState(0);
  const [isTouch, setTouch] = useState(false);

  useEffect(() =>
    ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0) ?
      setTouch(true) : setTouch(false),
    []);

  return (
    <div className="md:px-11 p-px ml-3 md:py-5 py-2">
      <div
        className="flex justify-around my-5 mr-5 p-5 bg-green-dark/75 text-white rounded-lg"
        onMouseEnter={() => toggleAbout(1)}
        onMouseLeave={() => toggleAbout(0)}
        onClick={() => toggleAbout(about === 0 ? 1 : 0)}
      >
        <HiText hovered={about} touch={isTouch} />
        <div className="mx-10 md:px-2 w-1 h-auto bg-green-light -skew-x-12"></div>
        <AboutText about={about} />
      </div>
    </div>
  );
};

export default HiCards;