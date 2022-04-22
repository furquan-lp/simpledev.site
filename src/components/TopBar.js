import { Route, Routes, Link } from 'react-router-dom';

import './components.css';
import homeLogo from '../sitelogo.png';

const HomeLogo = () =>
  <div className="homeLogo">
    <img src={homeLogo} alt="Home Logo"></img>
  </div>;

const TopBar = () => {
  return (
    <div className="topBar">
      <HomeLogo />
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