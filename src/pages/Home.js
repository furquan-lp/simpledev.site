import preval from 'preval.macro';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';

import TopBar from '../components/TopBar';
import Welcome from '../components/Welcome';
import HiCards from '../components/Hi';
import Footer from '../components/Footer';

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
            <span className="flex items-center px-2 py-1 md:px-4 md:py-2"><SiReact className="mr-1" />ReactJS</span>
            <span className="flex items-center px-2 py-1 md:px-4 md:py-2"><SiTailwindcss className="mr-1" />Tailwind CSS</span>
            <span className="flex items-center px-2 py-1 md:px-4 md:py-2"><MdOutlineViewCarousel className="mr-1" />Flowbite</span>
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