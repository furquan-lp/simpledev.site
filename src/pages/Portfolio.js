import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

import testimg from '../assets/dev1.jpg';

const PCard = ({ title, description, source, demo, image }) =>
  <div className="flex justify-between m-5 px-2 py-4 shadow-md rounded-md bg-green-dark/75 text-white">
    <div className="flex flex-col">
      <span className="p-2 text-5xl font-bold">{title}</span>
      <div className="p-2 my-4 text-xl">{description}</div>
      <div className="flex">
        <a href={source} className="flex items-center md:text-2xl text-xl mx-2 my-5 p-1.5 rounded bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200">Source Code</a>
        {demo ? <a href={demo} className="flex items-center md:text-2xl text-xl my-5 p-1.5 rounded bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200">Visit demo</a> : <></>}
      </div>
    </div>
    <img src={image} className="w-80 h-80 rounded-lg" alt={`${title} screenshot`} />
  </div>;

const Portfolio = () =>
  <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
    <TopBar page="portfolio" />
    <PCard title="Testing" description="Lorem ipsum sit dolor amet" source="https://example.com" image={testimg} />
    <Footer />
  </div>;

export default Portfolio;