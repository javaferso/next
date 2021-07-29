import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading='lazy'
            src='https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://images.unsplash.com/photo-1480758885620-f31f63932822?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://images.unsplash.com/photo-1593087006008-6f853b9d655a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
