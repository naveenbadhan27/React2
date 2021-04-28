import React, {Component} from 'react';
import image from './images/food1.jpg';
import image2 from './images/food2.jpg';
const Home = () => {
    return(
        <div className="">
            <img src={image} className="img-responsive" />
            <div className="img">
            </div>
        </div>
    )
}

export default Home;