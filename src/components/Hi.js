import { useState } from 'react';
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
      <div className="fade-in-element transition-all delay-200 p-24 bg-green-light">

      </div>
    );
  }
}

const HiText = ({ hovered }) =>
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
    {hovered === 0 ? <p className="mt-24">Hover to know more...</p> : <></>}
  </div>;

const HiCards = () => {
  const [about, toggleAbout] = useState(0);

  return (
    <div className="md:px-11 p-px ml-3 md:py-5 py-2">
      <div
        className="flex justify-around my-5 mr-5 p-5 bg-green-dark/75 text-white rounded-lg"
        onMouseEnter={() => toggleAbout(1)}
        onMouseLeave={() => toggleAbout(0)}
        onClick={() => toggleAbout(about === 0 ? 1 : 0)}
      >
        <HiText hovered={about} />
        <div className="mx-10 md:px-2 w-1 h-auto bg-green-light -skew-x-12"></div>
        <AboutText about={about} />
      </div>
    </div>
  );
};

export default HiCards;