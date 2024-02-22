/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Import the CSS file for additional styling

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div className="home-page">
      <Slider {...settings}>
        <div className="slide">
          <img src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg" alt="Image 1" />
          <div className="text-content">
            <h1>Give a little help,Stay for free</h1>
            <p>Join us in spreading kindness, volunteer with our company.</p>
            <button>Join Us</button>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.pexels.com/photos/6646949/pexels-photo-6646949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" />
          <div className="text-content">
            <h1>Give a little help,Stay for free</h1>
            <p>Join us in spreading kindness, volunteer with our company.</p>
            <button>Join Us</button>
          </div>
        </div>
        
        <div className="slide">
          <img src="https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" />
          <div className="text-content">
            <h1>Give a little help,Stay for free</h1>
            <p>Join us in spreading kindness, volunteer with our company.</p>
            <button>Join Us</button>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default Home;
