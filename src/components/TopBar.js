import { Route, Routes, Link } from 'react-router-dom';

import './components.css';

const HomeLogo = () =>
  <div className="homeLogo">
    /simple dev.site
  </div>;

const TopBar = () => {
  return (
    <div className="topBar">
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