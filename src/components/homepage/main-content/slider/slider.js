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

    return (
        <div className={'main'}>
            <Slider {...settings}>
                <div>
                    <div className="sl_slide"><img
                        src={props.data.url_1}
                        alt=""/></div>
                </div>
                <div>
                    <div className="sl_slide"><img
                        src={props.data.url_2}
                        alt=""/></div>
                </div>
                <div>
                    <div className="sl_slide"><img
                        src={props.data.url_3}
                        alt=""/></div>
                </div>
                <div>
                    <div className="sl_slide"><img
                        src={props.data.url_4}
                        alt=""/></div>
                </div>
                <div>
                    <div className="sl_slide"><img
                        src={props.data.url_5}
                        alt=""/></div>
                </div>
                <div>
                    <div className="sl_slide"><img
                        src={props.data.url_6}
                        alt=""/></div>
                </div>

            </Slider>

        </div>
    );
};

export default Sliderr;