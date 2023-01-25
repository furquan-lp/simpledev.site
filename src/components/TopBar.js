import { Link } from 'react-router-dom';

const HomeLogo = ({ path }) =>
  <div className="font-titlefont md:text-2xl text-base text-green-light py-2.5 pl-4 transition-colors duration-300
  hover:text-green-new active:text-white-light select-none">
    <div className="hidden md:inline">
      {path ? `/simple dev.site/${path}` : "/simple dev.site"}
    </div>
    <div className="inline md:hidden">
      /simpledev.site
    </div>
  </div>;

const TopBar = ({ page }) =>
  <div className="flex flex-wrap md:flex-nowrap justify-between bg-green-dark text-white md:p-1 md:m-1.5 m-px rounded-md">
    <Link to="/"><HomeLogo path={page} /></Link>
    <ul className="flex items-center list-none text-sm md:text-base md:m-1 p-0">
      <Link className="text-green-light hidden md:inline" to="/">
        <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:text-white-light hover:bg-blue-gray
          hover:rounded-md transition-all duration-200">
          Home
        </li>
      </Link>
      <Link className="text-green-light" to="/about">
        <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:text-white-light hover:bg-blue-gray
          hover:rounded-md transition-all duration-200">
          About
        </li>
      </Link>
      <a className="text-green-light" href="https://tctp.xyz/">
        <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:text-white-light hover:bg-blue-gray
          hover:rounded-md transition-all duration-200">
          Blog
        </li>
      </a>
      <Link className="text-green-light" to="/portfolio">
        <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:text-white-light hover:bg-blue-gray
          hover:rounded-md transition-all duration-200">
          Portfolio
        </li>
      </Link>
      <Link className="text-green-light" to="/contact">
        <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:text-white-light hover:bg-blue-gray
          hover:rounded-md transition-all duration-200">
          Contact
        </li>
      </Link>
    </ul>
  </div>;

export default TopBar;