import { Slideshow, Slide, TextSlide } from './Slideshow';
import img1 from './Images/reflections/mx-reflection-gloss.jpg';
import img2 from './Images/reflections/mx-reflection-satin.jpg';
import Image from 'next/image';

const Carousel = () => {
    return (
        <main>
            <h1>Productos Destacados</h1>
            <Slideshow navigation={true}>

                <Slide>
                    <Image src={img1} alt="" />
                    <TextSlide>
                        <p>1% descuento en productos Apple</p>
                    </TextSlide>
                </Slide>

                <Slide>
                    <Image src={img2} alt="" />
                    <TextSlide>
                        <p>2% descuento en productos Apple</p>
                    </TextSlide>
                </Slide>

            </Slideshow>
        </main>
    );
};

export default Carousel;
