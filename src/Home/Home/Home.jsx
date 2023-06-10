import React from 'react';
import Slider from '../Slider/Slider';
import Winners from '../Winners/Winners';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';

const Home = () => {
    return (
        <div>
            <ThemeToggle ></ThemeToggle>
            <Slider></Slider>
            <Winners></Winners>
        </div>
    );
};

export default Home;