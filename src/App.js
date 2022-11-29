import logo from './logo.svg';

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
        <div className="font-sans font-bold text-white text-4xl hover:underline p-10 pb-20">Goodbye!</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
