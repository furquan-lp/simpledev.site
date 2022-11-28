import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
      <div>
        <TopBar />
        <div className="font-sans font-bold text-white text-4xl hover:underline p-10 pb-96">Welcome!</div>
      </div>
    </div>
  );
};

export default App;
