import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <>
      <div className="slider mb-14">
        <Carousel
          leftControl="left"
          rightControl="right"
          className="h-[calc(100dvh-30dvh)] lg:h-[calc(100dvh-25dvh)]"
        >
          <img
            alt="..."
            src="https://img.freepik.com/free-vector/realistic-american-football-stadium_52683-53798.jpg?w=2000"
          />
          <img
            alt="..."
            src="https://theracketlife.com/wp-content/uploads/2022/05/Are-Indoor-Tennis-Courts-Faster-00.jpg"
          />
          <img
            alt="..."
            src="https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.jpg?s=612x612&w=0&k=20&c=s0Lz_k0Vq_9P6JBETBMtLsK0lSKEHg4Tnqz9KlRCSHA="
          />
          <img
            alt="..."
            src="https://www.liveabout.com/thmb/-SVQZtry1U3bFRX8Y1UH7ENy3K4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RioOlympicsswimmingpool-GettyImages-519838356-59c09963054ad90011cf5247.jpg"
          />
          <img
            alt="..."
            src="https://editorial.uefa.com/resources/025c-0f8e775cc072-f99f8b3389ab-1000/the_new_tottenham_hotspur_stadium_has_an_unusual_flexible_playing_surface.jpeg"
          />
        </Carousel>

        <div className="information">
          <h1>WE ARE HERE WITH WORLD BET SPORTS TRAINERS !!!</h1>
          <p>
            Here you can make your boy fit and fine and you can train yourself
            as a world class athlatic.so dont west your time and enroll here!!
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
