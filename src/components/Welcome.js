import { Carousel } from 'flowbite-react';
import { FiExternalLink } from 'react-icons/fi';

import webenvImg from '../assets/webenv-screenshot.webp';
import tctpImg from '../assets/tctp-screenshot-chrome.webp';
import iotImg from '../assets/device.gif';
import githubImg from '../assets/github-screenshot.webp';

const CarouselCard = ({ title, text, buttonLink, buttonText, image }) =>
  <div className="flex mx-10 mb-5 justify-between p-5">
    <div className="flex flex-col max-w-3xl mx-2">
      <div className="font-sans text-white font-bold text-2xl md:text-4xl mb-2 md:mb-10">{title}</div>
      <span className="font-sans text-white text-sm md:text-xl">{text}</span>
      <a className="flex items-center md:text-xl my-5 mr-auto p-2 pr-2 rounded-lg text-white bg-white/20
         hover:bg-transparent hover:underline transition-colors duration-200" href={buttonLink}>
        {buttonText}
        <FiExternalLink className="ml-0.5 md:h-2/3" />
      </a>
    </div>
    <img className="md:w-7/12 w-1/2 h-auto rounded-md shadow-lg shadow-slate-600" src={image}
      alt={`${title} screenshot"`} />
  </div>;

const WelcomeCarousel = () =>
  <div className="h-96">
    <Carousel slideInterval={4000}>
      <CarouselCard title="Check out my blog!"
        text="TCTP.xyz (The Chip Tinker Project) is my blog written using Gatsby and Tailwind CSS, and hosted on a
         Netlify backend. Thanks to Tailwind CSS it has a mobile first design and it uses Netlify CMS which helps me
         push out blog posts without having to mess with the internal Markdown."
        buttonLink="https://tctp.xyz"
        buttonText="Visit site"
        image={tctpImg}
      />
      <CarouselCard title="Check out my app!"
        text="WebEnv is a React Native app which connects to an IoT backend to monitor and log environment data.
         Available for Android, iOS and the web. The IoT backend is powered by an ESP32 microcontroller which exposes a
         REST API over an HTTP server (no HTTPS support for now)."
        buttonLink="http://webenv.simpledev.site"
        buttonText="Check out the live demo"
        image={webenvImg}
      />
      <CarouselCard title="Check out my GitHub!"
        text="If you want to check the source code for all my projects and want to see what I'm up to then head over
         here. I commit frequently but no guarantees regarding code readability ;-)"
        buttonLink="https://github.com/furquan-lp"
        buttonText="Visit my GitHub"
        image={githubImg}
      />
      <CarouselCard title="Arduino and IoT stuff"
        text="Two years ago I was working on a project to log environmental data (air quality, temperature, humidity,
         etc.) and display it to an LCD screen. Later on I ported the code over to an ESP32 board which served the
         data over LAN WiFi called 'envmon'. A minimal version which forwarded the data over the Internet to a JSON
         database was used as the backend for WebEnv."
        buttonLink="https://github.com/furquan-lp/environment-monitor"
        buttonText="Check out the source code"
        image={iotImg}
      />
    </Carousel>
  </div >;

const Welcome = () => {
  return (
    <WelcomeCarousel />
  );
};

export default Welcome;