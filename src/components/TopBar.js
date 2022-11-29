import { Route, Routes, Link } from 'react-router-dom';

const HomeLogo = () =>
  <div className="font-titlefont md:text-2xl text-lg text-green-light py-2.5 pl-4 transition-colors duration-300
  hover:text-green-new select-none">
    /simple dev.site
  </div>;

const TopBar = () => {
  return (
    <div className="flex justify-between bg-green-dark text-white md:p-1 md:m-1.5 m-px rounded-md">
      <Link to="/"><HomeLogo /></Link>
      <ul className="flex items-center list-none md:m-1 p-0">
        <Link className="text-green-light" to="/">
          <li className="inline m-1 p-3 tracking-widest hover:text-white-light hover:bg-blue-gray hover:rounded-md
          transition-all duration-200">
            Home
          </li>
        </Link>
        <Link className="text-green-light" to="/about">
          <li className="inline m-1 p-3 tracking-widest hover:text-white-light hover:bg-blue-gray hover:rounded-md
          transition-all duration-200">
            About
          </li>
        </Link>
        <a className="text-green-light" href="https://tctp.xyz/">
          <li className="inline m-1 p-3 tracking-widest hover:text-white-light hover:bg-blue-gray hover:rounded-md
          transition-all duration-200">
            Blog
          </li>
        </a>
        <Link className="text-green-light" to="/portfolio">
          <li className="inline m-1 p-3 tracking-widest hover:text-white-light hover:bg-blue-gray hover:rounded-md
          transition-all duration-200">
            Portfolio
          </li>
        </Link>
        <Link className="text-green-light" to="/contact">
          <li className="inline m-1 p-3 tracking-widest hover:text-white-light hover:bg-blue-gray hover:rounded-md
          transition-all duration-200">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default TopBar;