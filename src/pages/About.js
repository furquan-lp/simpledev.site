import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const About = () => <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
  <TopBar page="about" />
  <div className="flex flex-col md:mx-12">
    <span className="font-bold text-4xl text-white">About:</span>
  </div>
  <Footer />
</div>;