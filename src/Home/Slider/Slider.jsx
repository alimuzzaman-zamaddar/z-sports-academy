import React from "react";
import './Slider.css'
import { motion } from "framer-motion"
import { Carousel } from 'flowbite-react';
const Slider = () => {

    
  return (
    <div className="slider py-11" >
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://www.liveabout.com/thmb/-SVQZtry1U3bFRX8Y1UH7ENy3K4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RioOlympicsswimmingpool-GettyImages-519838356-59c09963054ad90011cf5247.jpg"
            className="w-full h-3/4"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/realistic-american-football-stadium_52683-53798.jpg?w=2000"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://theracketlife.com/wp-content/uploads/2022/05/Are-Indoor-Tennis-Courts-Faster-00.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.jpg?s=612x612&w=0&k=20&c=s0Lz_k0Vq_9P6JBETBMtLsK0lSKEHg4Tnqz9KlRCSHA="
            className="w-full"
            
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          I
        </a>
        <a href="#item2" className="btn btn-xs">
          II
        </a>
        <a href="#item3" className="btn btn-xs">
          III
        </a>
        <a href="#item4" className="btn btn-xs">
          IV
        </a>
      </div>
      
      <div className="information"  >
        <h1>WE ARE HERE WITH WORLD BET SPORTS TRAINERS !!!</h1>
        <p>Here you can make your boy fit and fine and you can train yourself as a world class athlatic.so dont west your time and enroll here!!</p>
      </div>
    </div>
     
    

  );
};

export default Slider;