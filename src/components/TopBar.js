import { Route, Routes, Link } from 'react-router-dom';

import './components.css';

const HomeLogo = () =>
  <div className="font-titlefont text-2xl py-2.5 pl-4 transition-colors duration-300 hover:text-green-new select-none">
    /simple dev.site
  </div>;

const TopBar = () => {
  return (
    <div className="topBar flex justify-between bg-green-dark color-white p-1 m-1.5 rounded-md">
      <Link to="/"><HomeLogo /></Link>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <a href="https://tctp.xyz/"><li>Blog</li></a>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </div>
  );
};

export default TopBar;