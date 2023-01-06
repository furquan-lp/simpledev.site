import preval from 'preval.macro';

import TopBar from './components/TopBar';
import Welcome from './components/Welcome';
import HiCards from './components/Hi';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
      <TopBar />
      <div className="flex flex-col md:mx-12">
        <Welcome />
        <HiCards />
        <div className="font-sans font-bold text-white text-center md:text-2xl text-lg lg:p-10 p-4 pt-20">This website
          is built using ReactJS, Tailwind CSS and Flowbite. Check the source code <a
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

export default App;
