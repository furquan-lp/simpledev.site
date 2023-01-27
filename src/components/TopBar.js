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

const TopBarButton = ({ link, linktext, extern, styles }) => {
  const buttonStyle = {
    link: styles ? `text-green-light ${styles}` : `text-green-light`,
    li: `inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:text-white-light hover:bg-blue-gray hover:rounded-md
     transition-all duration-200`
  };
  if (extern) {
    return <a href={link} className={buttonStyle.link}>
      <li className={buttonStyle.li}>
        {linktext}
      </li>
    </a>;
  } else {
    return <Link className={buttonStyle.link} to={link}>
      <li className={buttonStyle.li}>
        {linktext}
      </li>
    </Link>;
  }
};

const TopBar = ({ page }) =>
  <div className="flex flex-wrap md:flex-nowrap justify-between bg-green-dark text-white pb-2 md:p-1 md:m-1.5 m-px
   rounded-md">
    <Link to="/"><HomeLogo path={page} /></Link>
    <ul className="flex items-center list-none text-sm md:text-base md:m-1 p-0">
      <TopBarButton link="/" linktext="Home" styles="hidden md:inline" />
      <TopBarButton link="/about" linktext="About" />
      <TopBarButton link="https://tctp.xyz/" linktext="Blog" extern={true} />
      <TopBarButton link="/portfolio" linktext="Portfolio" />
      <TopBarButton link="/contact" linktext="Contact" />
    </ul>
  </div>;

export default TopBar;