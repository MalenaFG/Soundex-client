import { Carousel, Ratio, Image } from "react-bootstrap"
import './CustomImagesCarousel.css'

const CustomImagesCarousel = ({ imagesArray }) => {

    return (
        <Carousel className="CustomImagesCarousel" interval={10000} fade>
            {
                imagesArray.map((carouselImage, idx) => {
                    // TODO: Fix the key generator
                    return (
                        <Carousel.Item key={idx}>
                            <Ratio aspectRatio="21x9">
                                <Image src={carouselImage} fluid />
                            </Ratio>
                        </Carousel.Item>
                    )
                })

            }
        </Carousel>
    )

}

export default CustomImagesCarousel