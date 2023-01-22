import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const PCard = ({ title, description, source, demo, image }) =>
  <div className="flex m-5 px-4 py-2 shadow-md rounded-md bg-green-dark/75 text-white">
    <div className="flex flex-col">
      <span className="p-2 text-3xl font-bold">{title}</span>
      <div className="p-2 my-4 text-xl">{description}</div>
      <div className="flex-row">
        <a href={source} className="flex items-center md:text-2xl text-xl my-5 p-1.5 rounded bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200">Source Code</a>
        {demo ? <a href={demo} className="flex items-center md:text-2xl text-xl my-5 p-1.5 rounded bg-blue-gray
hover:text-green-light hover:bg-transparent hover:underline transition-all duration-200">Visit demo</a> : <></>}
      </div>
    </div>
    <img src={image} className="h-full w-full rounded-lg" alt={`${title} screenshot`} />
  </div>;

const Portfolio = () =>
  <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
    <TopBar page="portfolio" />
    <PCard title="Testing" description="Lorem ipsum sit dolor amet" source="https://example.com" image="" />
    <Footer />
  </div>;

export default Portfolio;