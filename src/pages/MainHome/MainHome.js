import React from 'react';
import './MainHome.css';
import Carousel from 'react-bootstrap/Carousel';
import hero from '../../images/hero.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';

const MainHome = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3 className='carouse-header'>First slide label</h3>
                        
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3 className='carouse-header'>Second slide label</h3>
                        
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero3}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3 className='carouse-header'>Third slide label</h3>
                        
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainHome;