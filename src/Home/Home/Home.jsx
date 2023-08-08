import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';
import Winners from '../Winners/Winners';
import ChooseUs from '../ChooseUs/ChooseUs';
import Values from '../Values/Values';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Winners></Winners>
            <ChooseUs></ChooseUs>
            <Values></Values>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;