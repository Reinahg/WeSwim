import React from "react";
import {Carousel} from 'react-bootstrap';
import './gallery.scss';

const images = [
    {
        id:1,
        route: require('../../../assets/images/Image1.jpeg'),
    },
    {
        id:2,
        route: require('../../../assets/images/Image2.jpeg'),
    },
    {
        id:3,
        route: require('../../../assets/images/Image3.jpeg'),
    },
    {
        id:4,
        route: require('../../../assets/images/Image4.jpeg'),
    }
]

const Gallery = () => {

    return (
        <section className="carousel">
            <Carousel fade>
            {images.map(image=>{
                return (
                    <Carousel.Item className="d-flex justify-content-center" key={image.id}>
                        <img className="image" src={image.route.default}/>
                        <Carousel.Caption>
                        <button className="btn__light">Programa tu clase de prueba</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
            </Carousel>
        </section>
    )
}

export { Gallery };