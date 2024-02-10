import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1Image from '../../assets/all-images/Partner/pngwing.com (1).png';
import partner2Image from '../../assets/all-images/Partner/pngwing.com (2).png';
import partner3Image from '../../assets/all-images/Partner/pngwing.com (3).png';
import partner4Image from '../../assets/all-images/Partner/pngwing.com (4).png';
import partner5Image from '../../assets/all-images/Partner/pngwing.com (5).png';
import partner6Image from '../../assets/all-images/Partner/pngwing.com (6).png';
import partner7Image from '../../assets/all-images/Partner/pngwing.com (7).png';
import partner8Image from '../../assets/all-images/Partner/pngwing.com (8).png';
import partner9Image from '../../assets/all-images/Partner/pngwing.com (9).png';
import partner10Image from '../../assets/all-images/Partner/pngwing.com (10).png';
import partner11Image from '../../assets/all-images/Partner/pngwing.com.png';
import partner12Image from '../../assets/all-images/Partner/pngwing.com (12).png';
import '../../styles/Partner.css';

const PartnersCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const partners = [
        { image: partner1Image, name: 'Partner 1' },
        { image: partner2Image, name: 'Partner 2' },
        { image: partner3Image, name: 'Partner 3' },
        { image: partner4Image, name: 'Partner 4' },
        { image: partner5Image, name: 'Partner 5' },
        { image: partner6Image, name: 'Partner 6' },
        { image: partner7Image, name: 'Partner 7' },
        { image: partner8Image, name: 'Partner 8' },
        { image: partner9Image, name: 'Partner 9' },
        { image: partner10Image, name: 'Partner 10' },
        { image: partner11Image, name: 'Partner 11' },
        { image: partner12Image, name: 'Partner 12' },

    ];

    return (
        <div className='container partner-slider justify-content-center align-items-center'>
            <h2 className='text-center' style={{fontWeight:'600'}}>Our Partners</h2>
            <Slider className='container' {...settings}>

                {partners.map((partner, index) => (
                    <div key={index} className='partner-div'>
                        <img src={partner.image}  className='text-center partner-img' alt={partner.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PartnersCarousel;
