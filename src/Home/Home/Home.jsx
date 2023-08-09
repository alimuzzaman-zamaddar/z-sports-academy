import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';
import Winners from '../Winners/Winners';
import ChooseUs from '../ChooseUs/ChooseUs';
import Values from '../Values/Values';
import ContactUs from '../ContactUs/ContactUs';
import Coach from '../Coach/Coach';
import News from '../Nwes/News';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <Values></Values>
            <PopularInstructors></PopularInstructors>
            <ChooseUs></ChooseUs>
            <Winners></Winners>
            <News></News>
            <Coach></Coach>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;