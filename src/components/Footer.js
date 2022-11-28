import { FiGithub } from 'react-icons/fi';
import { Tooltip } from 'flowbite-react';

const Footer = () => <div className="flex justify-between items-center bg-green-dark text-white p-1.5">
  Copyright &#169; 2022 Syed Furquan Ahmad
  <Tooltip content="Check the source code">
    <a href="https://github.com/furquan-lp/simpledev.site">
      <FiGithub className="mx-2 md:w-3/4 md:h-3/4 sm:w-fit sm:h-fit" />
    </a>
  </Tooltip>
</div>;

export default Footer;