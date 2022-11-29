import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import devImage from '../assets/dev1.png';

const AboutText = ({ about }) => {
  if (about === 0) {
    return (
      <img className="fade-in-element transition-all delay-200" src={devImage}>
      </img>
    );
  } else {
    return (
      <div className="fade-in-element transition-all delay-200 p-24 bg-green-light">
      </div>
    );
  }
}

const HiText = () =>
  <div className="flex flex-col py-10 pr-5 pl-10 ">
    <p className="md:text-5xl sm:text-xl my-1">Hi,</p>
    <p className="md:text-5xl sm:text-xl my-1">I'm Syed</p>
    <p className="md:text-5xl sm:text-xl my-1">Aspiring Web Developer</p>
    <Link
      className="flex items-center md:text-2xl sm:text-xl my-5 p-1.5 mr-auto rounded-md bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200"
      to="/about"
    >
      Contact Me <FiArrowRight className="ml-1" />
    </Link>
  </div>;

const HiCards = () => {
  const [about, toggleAbout] = useState(0);

  return (
    <div className="px-11 py-5">
      <div
        className="flex justify-around my-5 mr-5 p-5 bg-green-dark text-white rounded-lg"
        onMouseEnter={() => toggleAbout(1)}
        onMouseLeave={() => toggleAbout(0)}
      >
        <HiText />
        <div className="mx-10 px-2 w-1 h-auto bg-green-light -skew-x-12"></div>
        <AboutText about={about} />
      </div>
    </div>
  );
};

export default HiCards;