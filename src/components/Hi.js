import { Link } from 'react-router-dom';

const HiText = () =>
  <div className="px-11 py-5">
    <div className="flex my-5 mr-5 p-5 bg-green-dark text-white rounded-lg">
      <div className="flex flex-col py-10 pr-5 pl-10 ">
        <p className="md:text-5xl sm:text-xl my-1">Hi,</p>
        <p className="md:text-5xl sm:text-xl my-1">I'm Syed</p>
        <p className="md:text-5xl sm:text-xl my-1">Aspiring Web Developer</p>
        <Link
          className="md:text-2xl sm:text-xl my-5 p-1.5 mr-auto rounded-md bg-blue-gray hover:text-green-light
          hover:bg-transparent hover:underline transition-all duration-200"
          to="/about"
        >
          Contact Me
        </Link>
      </div>
      <div className="mx-10 px-2 w-1 h-auto bg-green-light -skew-x-12"></div>
      <div>
        foo
      </div>
    </div>
  </div>;

export default HiText;