import React from 'react';
import Slider from '../Slider/Slider';
import Winners from '../Winners/Winners';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <ThemeToggle ></ThemeToggle>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <Winners></Winners>
        </div>
    );
};

export default Home;