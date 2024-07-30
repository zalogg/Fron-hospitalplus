import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import room1 from '../img/index/01.jpeg';
import room2 from '../img/index/02.jpg';
import room3 from '../img/index/03.jpg';
import room4 from '../img/index/04.jpg';
import rent1 from '../img/index/chairs.png';
import rent2 from '../img/index/table.png';
import rent3 from '../img/index/sound.png';
import serv1 from '../img/index/05.jpg';
import serv2 from '../img/index/serv2.png';
import serv3 from '../img/index/06.png';
import bn1 from '../img/index/BANNER-SALUD1.jpg';
import bn2 from '../img/index/BANNER-SALUD2.jpg';
import bn3 from '../img/index/BANNER-SALUD3.jpg';

const items = [
    { src: bn1 },
    { src: bn2 },
    { src: bn3 },
];

const rooms = [
    { src: room1, title: "Esplendor Hall", description: "16 Sep 2022" },
    { src: room2, title: "Hall of Joy", description: "21 Sep 2022" },
    { src: room3, title: "Hall The Enchantment", description: "28 Sep 2022" }
];

const rents = [
    { src: rent1, title: "Chairs", description: "Plastic chairs for all types of events" },
    { src: rent2, title: "Tables", description: "Square, rectangular and round tables" },
    { src: rent3, title: "Sound equipment", description: "Rental of various types of sound equipment" }
];

const services = [
    { src: serv1, title: "Waiters", description: "Service of Catering" },
    { src: serv2, title: "Snacks", description: "Snacks Services" },
    { src: serv3, title: "Entertainers services", description: "Entertainers, crazy hour and more" }
];

function Usrindex(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    const Redir_Hall = () => window.location.href = "/Catalogofil/Hall";
    const Redir_Rent = () => window.location.href = "/Catalogofil/Rent";
    const Redir_Serv = () => window.location.href = "/Catalogofil/Services";

    return (
        <div>
            <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

            <section class="latest spad">
                <div class="container">
                    <div class="section-title text-center">
                        <br></br>
                        <span class="text-uppercase text-danger">Video Presentation</span>
                        <h2 class="text-uppercase"></h2>
                    </div>
                </div>
                <br></br>
            </section>


            <section class="instagram spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="instagram__pic d-flex flex-wrap">
                                {[room1, room2, room3, room4, serv1, serv3].map((img, index) => (
                                    <div key={index} class="instagram__pic__item col-lg-4 col-md-4 col-sm-6 p-1">
                                        <img src={img} class="img-fluid" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="instagram__text p-3">
                                <h2>Information</h2>
                                <p>At Hospital Plus, we are dedicated to providing comprehensive and specialized medical care for all health needs. Additionally, we offer a wide range of services.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
        </div>
    );
}

export default Usrindex;
