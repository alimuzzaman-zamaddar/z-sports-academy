import React from 'react';
import Slider from '../Slider/Slider';
import Winners from '../Winners/Winners';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <ThemeToggle ></ThemeToggle>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Winners></Winners>
        </div>
    );
};

export default Home;