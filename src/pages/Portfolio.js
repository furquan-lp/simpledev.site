import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { FiExternalLink } from 'react-icons/fi';

import testimg from '../assets/dev1.jpg';

const PCard = ({ title, description, source, demo, demotext, image }) =>
  <div className="flex justify-between m-2 md:m-5 px-6 py-4 shadow-md rounded-md bg-green-dark/75 text-white">
    <div className="flex flex-col">
      <span className="p-2 text-2xl md:text-5xl font-bold">{title}</span>
      <div className="p-2 my-4 text-lg md:text-xl">{description}</div>
      <div className="flex">
        <a href={source} className="flex items-center text-lg md:text-2xl mx-2 my-5 p-1.5 rounded bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200">
          Source Code <FiExternalLink className="ml-0.5" />
        </a>
        {demo ? <a href={demo} className="flex items-center md:text-2xl text-xl my-5 p-1.5 rounded bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200">
          {demotext ? demotext : "Visit demo"}
          <FiExternalLink className="ml-0.5" />
        </a> : <></>}
      </div>
    </div>
    <img src={image} className="w-44 h-44 md:w-80 md:h-80 rounded-lg" alt={`${title} screenshot`} />
  </div>;

const Portfolio = () => {
  const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
   dolore magna aliqua. Tellus mauris a diam maecenas. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
   . Elementum curabitur vitae nunc sed velit dignissim sodales.`;
  return (
    <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
      <TopBar page="portfolio" />
      <div className="mx-1 md:mx-auto md:max-w-screen-xl">
        <PCard title="Testing" description={desc} source="https://example.com" demo="https://google.com/" demotext="Visit live" image={testimg} />
      </div>
      <Footer />
    </div>);
};

export default Portfolio;