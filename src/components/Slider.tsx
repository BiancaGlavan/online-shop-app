import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './Slider.css';



const Slider = () => {

    
    return (
        <Swiper className="my-swiper" navigation
            modules={[Navigation]}
            speed={800}
            slidesPerView={1}
            loop
            style={{ height: '500px' }}>
            <SwiperSlide className="swiper-slide">
                <img className="img-slide"
                    src="./images/cover1.jpg" />
                <div className="text-container">
                    <h1 className="title">WINTER SALE</h1>
                    <p className="subtitle">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                    <button className="button">SHOW NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img className="img-slide"
                    src="./images/cover2.jpg" />
                <div className="text-container">
                    <h1 className="title">SPRING SALE</h1>
                    <p className="subtitle">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                    <button className="button">SHOW NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img className="img-slide"
                    src="./images/cover3.jpg" />
                <div className="text-container">
                    <h1 className="title">SUMMER SALE</h1>
                    <p className="subtitle">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                    <button className="button">SHOW NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img className="img-slide"
                    src="./images/cover4.jpg" />
                <div className="text-container">
                    <h1 className="title">AUTUMN SALE</h1>
                    <p className="subtitle">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                    <button className="button">SHOW NOW</button>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default Slider