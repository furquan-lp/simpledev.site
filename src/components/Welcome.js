import { Carousel } from 'flowbite-react';

const CarouselCard = ({ title, text, buttonLink, buttonText, image }) =>
  <div className="flex mx-10 mb-5 justify-between p-5">
    <div className="flex flex-col">
      <div className="font-sans text-white font-bold text-4xl mb-10">{title}</div>
      <span className="font-sans text-white text-xl">{text}</span>
    </div>
    <img className="w-7/12 max-w-full h-auto rounded-md" src={image} alt={title + " representative image"} />
  </div>;

const WelcomeCarousel = () =>
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
      <CarouselCard title="Hello!"
        text="lorem ipsum sit dolor amet"
        image="https://raw.githubusercontent.com/furquan-lp/WebEnv/master/screenshot.png"
      />
      <CarouselCard title="Hi!"
        text="lorem ipsum sit dolor amet"
        image="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <CarouselCard title="Hey!"
        text="lorem ipsum sit dolor amet"
        image="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <CarouselCard title="Hoi!"
        text="lorem ipsum sit dolor amet"
        image="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <CarouselCard title="Ahoy!"
        text="lorem ipsum sit dolor amet"
        image="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  </div >;

const Welcome = () => {
  return (
    <WelcomeCarousel />
  );
};

export default Welcome;