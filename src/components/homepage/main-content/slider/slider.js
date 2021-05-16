import React from 'react';

import '../../../../assets/style/scss/homepage/main-content/slider/style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderr = (props) => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    let SliderItem = props.data.map(i =>
        <div>
            <div className="sl_slide"><img
                src={i}
                alt=""/>
            </div>
        </div>
    )

    return (
        <div className={'main'}>
            <Slider {...settings}>
                {SliderItem}
            </Slider>

        </div>
    );
};

export default Sliderr;