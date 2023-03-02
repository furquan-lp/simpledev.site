import preval from 'preval.macro';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import { IconContext } from "react-icons";

import TopBar from '../components/TopBar';
import Welcome from '../components/Welcome';
import HiCards from '../components/Hi';
import Footer from '../components/Footer';

const TechLinkButton = ({ link, linktext, children }) =>
  <a href={link} className="flex items-center ml-2 my-1 md:ml-4 md:my-2 mr-auto text-lg md:text-2xl underline
   md:no-underline p-1.5 rounded bg-blue-gray/50 hover:text-green-light active:text-white hover:bg-transparent
    md:hover:underline transition-all duration-200">
    {children}
    {linktext}
    <IconContext.Provider value={{ size: "0.8em" }}>
      <FiExternalLink className="ml-0.5 md:h-2/3" />
    </IconContext.Provider>
  </a>;

const Home = () => {
  return (
    <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
      <TopBar />
      <div className="flex flex-col md:mx-12">
        <Welcome />
        <HiCards />
        <div className="font-sans font-bold text-white md:text-2xl text-lg mx-4 lg:p-10 p-4 ">This website
          is built using:
          <div className="flex flex-col mb-5 font-normal">
            <TechLinkButton link="https://reactjs.org/" linktext="ReactJS">
              <SiReact className="mr-1" />
            </TechLinkButton>
            <TechLinkButton link="https://tailwindcss.com/" linktext="Tailwind CSS">
              <SiTailwindcss className="mr-1" />
            </TechLinkButton>
            <TechLinkButton link="https://flowbite.com/" linktext="Flowbite">
              <MdOutlineViewCarousel className="mr-1" />
            </TechLinkButton>
          </div>
          Check the source code <a
            href="https://github.com/furquan-lp/simpledev.site/" className="underline hover:text-green-light">here</a>.
          Report bugs <a href="https://github.com/furquan-lp/simpledev.site/issues"
            className="underline hover:text-green-light">here</a>.
          <p>Build {preval`module.exports = new Date().toISOString();`}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;