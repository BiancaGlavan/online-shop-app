import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";


interface IPropsProductSlider {
    images: string[];
}

const StyledProductSlider = styled.div`
    width: 100%;
    max-width: 500px;

    .product-slide {
        .product-image {
            max-width: 100%;
            max-height: 100%;
        }
    }

`;

const ProductSlider = ({ images }: IPropsProductSlider) => {
    return (
        <StyledProductSlider className="ProductSlider">
            <Swiper navigation
                modules={[Navigation]}
                speed={800}
                slidesPerView={1}
                loop
                >
                {images.map((img, idx) => <SwiperSlide className="product-slide" >
                    <img className="product-image"
                        src={img} />
                </SwiperSlide>)}
                
            </Swiper>
        </StyledProductSlider>
    )
}

export default ProductSlider;