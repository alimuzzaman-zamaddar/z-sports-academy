import React from "react";
import "./Coach.css";
import coach1 from "../../assets/cotch/man-with-beard.jpg";
import coach2 from "../../assets/cotch/portrait-of-smiling-mature-man-e1683723463506.jpg";
import coach3 from "../../assets/cotch/portrait-of-a-man-travelling-the-lofoten-e1683722286143.jpg";
import coach4 from "../../assets/cotch/portrait-of-man--e1683722290126.jpg";
import coach5 from "../../assets/cotch/portrait-of-a-man-smiling-e1683723459884.jpg";
import coach6 from "../../assets/cotch/outdoor-head-and-shoulders-portrait-of-smiling-mature-man-e1683722278504.jpg";
import coach7 from "../../assets/cotch/bald-african-american-man-e1683723454711.jpg";
import coach8 from "../../assets/cotch/head-and-shoulders-portrait-of-businessman-in-office-e1683722282790.jpg";
import coach9 from "../../assets/cotch/handsome-man-e1683723467247.jpg";
import coach10 from "../../assets/cotch/handsome-bearded-man-portrait-outdoors-e1683722294681.jpg";

const Coach = () => {
  return (
    <div className="py-10">
     <div className="text-center py-8 text-[#05386B] border-b-2 border-[#05386B] mb-5">
        <h1 className="text-center font-serif font-extrabold text-5xl mb-5">TRAINED BY A RELIABLE COACH</h1>
        <p className="text-2xl">OUR COACHING STAFF</p>
     </div>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-[#05386B]">
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach1} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Brian</h1>
        <p>Football Director</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach2} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Edward</h1>
        <p>Operations Director</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach3} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Leo</h1>
        <p>Academy Director</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach4} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Crich</h1>
        <p>Assistant Coach</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach5} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Stevan</h1>
        <p>Coach</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach6} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Alex</h1>
        <p>Assistant Coach</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach7} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Jhon</h1>
        <p>Assistant Director</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach8} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Petterson</h1>
        <p>BassBall coach</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach9} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Blmune</h1>
        <p>coach</p>
      </div>
      <div
        className=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="coach-img">
          <img className="" src={coach10} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-5">Klrian</h1>
        <p>Coach</p>
      </div>
    </div>
    </div>
  );
};

export default Coach;
