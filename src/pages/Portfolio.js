import { FiExternalLink } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { SiArduino } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiGnubash } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';
import { TbBrandReactNative } from 'react-icons/tb';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

import testimg from '../assets/dev1.jpg';

const resolvePTag = (tech) => {
  switch (tech) {
    case 'js': return { text: 'JavaScript', bg: 'bg-yellow-js', textcolor: 'text-slate-800' }
    case 'react': return { text: 'React', bg: 'bg-slate-600', textcolor: 'text-blue-react' };
    case 'react-native': return { text: 'React Native', bg: 'bg-blue-react', textcolor: 'text-white' };
    case 'tailwind': return { text: 'Tailwind CSS', bg: 'bg-blue-tailwind', textcolor: 'text-white' };
    case 'flowbite': return { text: 'Flowbite (with Tailwind)', bg: 'bg-blue-700', textcolor: 'text-white' };
    case 'gatsby': return { text: 'Gatsby', bg: 'bg-purple-gatsby', textcolor: 'text-white' };
    case 'mui': return { text: 'Material UI', bg: 'bg-blue-mui', textcolor: 'text-white' };
    case 'arduino': return { text: 'Arduino', bg: 'bg-green-arduino', textcolor: 'text-white' };
    case 'cpp': return { text: 'C++', bg: 'bg-blue-cpp', textcolor: 'text-white' };
    case 'bash': return { text: 'bash (shell script)', bg: 'bg-gray-bash', textcolor: 'text-white' };
    default: return { text: 'An error occurred', bg: 'bg-red-700', textcolor: 'text-white' };
  }
}

const resolvePTagIcon = (tech) => {
  switch (tech) {
    case 'js': return <SiJavascript className="mr-1" />
    case 'react': return <SiReact className="mr-1" />;
    case 'react-native': return <TbBrandReactNative className="mr-1" />;
    case 'tailwind': return <SiTailwindcss className="mr-1" />;
    case 'flowbite': return <MdOutlineViewCarousel className="mr-1" />;
    case 'gatsby': return <SiGatsby className="mr-1" />;
    case 'mui': return <SiMaterialui className="mr-1" />;
    case 'arduino': return <SiArduino className="mr-1" />;
    case 'cpp': return <SiCplusplus className="mr-1" />;
    case 'bash': return <SiGnubash className="mr-1" />;
    default: return undefined;
  }
}

const PCardTag = ({ ptag, children }) =>
  <div className={`flex items-center rounded-md p-1 m-1 ${ptag.bg} ${ptag.textcolor}`}>
    {children}
    {ptag.text}
  </div>

const PCardTags = ({ tech }) =>
  <div className="flex mx-1">
    {tech.map(t => <PCardTag ptag={resolvePTag(t)}>
      {resolvePTagIcon(t)}
    </PCardTag>
    )}
  </div>

const PCard = ({ title, description, tech, source, demo, demotext, image }) =>
  <div className="flex flex-wrap md:flex-nowrap justify-between m-2 md:m-5 px-2 md:px-6 py-4 shadow-md rounded-md
   bg-green-dark/75 text-white">
    <div className="flex flex-col">
      <span className="p-2 text-2xl md:text-5xl font-bold">{title}</span>
      <div className="p-2 my-4 text-lg md:text-xl">{description}</div>

      <PCardTags tech={tech} />
      <div className="flex">
        <a href={source} className="flex items-center text-lg md:text-2xl underline md:no-underline mx-2 my-5 p-1.5
         rounded bg-blue-gray hover:text-green-light active:text-white hover:bg-transparent md:hover:underline
          transition-all duration-200">
          Source Code <FiExternalLink className="ml-0.5 md:h-2/3" />
        </a>
        {demo ? <a href={demo} className="flex items-center text-lg md:text-2xl underline md:no-underline mx-2 my-5
         p-1.5 rounded bg-blue-gray hover:text-green-light active:text-white hover:bg-transparent
          md:hover:underline transition-all duration-200">
          {demotext ? demotext : "Visit demo"}
          <FiExternalLink className="ml-0.5 md:h-2/3" />
        </a> : <></>}
      </div>
    </div>
    <img src={image} className="h-full w-80 md:h-80 rounded-lg" alt={`${title} screenshot`} />
  </div>;

const PCards = ({ projects }) =>
  <>
    {projects.map(p => <PCard title={p.name} description={p.description} tech={p.tech} source={p.source} demo={p.demo}
      demotext={p.demotext} image={p.img} />)}
  </>

const Portfolio = () => {
  const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
   dolore magna aliqua. Tellus mauris a diam maecenas. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
   . Elementum curabitur vitae nunc sed velit dignissim sodales.`;
  return (
    <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
      <TopBar page="portfolio" />
      <div className="mx-1 md:mx-auto md:max-w-screen-xl">
        <p className="text-white text-2xl md:text-4xl my-5 mx-5 font-bold">
          Here are the projects that I've worked (and am working) on:
        </p>
        <PCard title="Testing" description={desc} tech={['js', 'react', 'tailwind']} source="https://example.com" demo="https://google.com/" demotext="Visit live" image={testimg} />
        <PCard title="Testing" description={desc} tech={['js', 'cpp', 'tailwind']} source="https://example.com" demo="https://google.com/" image={testimg} />
      </div>
      <Footer />
    </div>);
};

export default Portfolio;