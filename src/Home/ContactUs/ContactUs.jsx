import React from "react";
import {
  FaAddressBook,
  FaAddressCard,
  FaLocationArrow,
  FaMap,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-center text-7xl font-serif font-extrabold text-[#05386B] pt-10 pb-5">
        CONTACT SECTION
      </h1>
      <p className="text-center text-[#05386B] md:w-1/2 mx-auto w-4/5">
        here you can contact with us. sand an email with our purpaus of contact
        us
      </p>
      <div className="grid md:grid-cols-2 p-10 gap-5">
        <div className="contact-left grid md:grid-cols-2 text-center text-[#05386B]">
          <div
            className="md:border-r-2 md:border-b-2 md:border-blue-950 flex justify-center items-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="">
              <span>
                <FaLocationArrow className="mx-auto text-4xl mb-4"></FaLocationArrow>
              </span>
              <h1>Address</h1>
              <p>Narail,Jessore,Khulna,</p>
              <p>Gulshan,Dhaka,Bangladesh,</p>
            </div>
          </div>
          <div
            className=" flex justify-center items-center"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="">
              <span>
                <FaAddressBook className="mx-auto text-4xl mb-4"></FaAddressBook>
              </span>
              <h1>Address</h1>
              <p>Gulshan,Baridhara</p>
              <p>Dhaka,Bangladesh,</p>
            </div>
          </div>
          <div
            className=" flex justify-center items-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="">
              <span>
                <FaMap className="mx-auto text-4xl mb-4"></FaMap>
              </span>
              <h1>Address</h1>
              <p>bukit Bintung,Pasir Puta.</p>
              <p>Kuala Lampur,Malaysia</p>
            </div>
          </div>
          <div
            className="md:border-l-2 md:border-t-2 md:border-blue-950 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="">
              <span>
                <FaAddressCard className="mx-auto text-4xl mb-4"></FaAddressCard>
              </span>
              <h1>Address</h1>
              <p>AL maltum,Jaddah</p>
              <p>Makkah,Saudia Araba.</p>
            </div>
          </div>
        </div>
        <div className="contact-right ">
          <form action="">
            <div
              className=" mb-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <input className="w-[100%] bg-slate-200 p-3 rounded-xl hover:bg-white border-2 border-blue-950" type="text" placeholder="Your Name" />
            </div>
            <div
              className=" mb-5"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <input className="w-[100%] bg-slate-200 p-3 rounded-xl hover:bg-white border-2 border-blue-950" type="text" placeholder="Email" />
            </div>
            <div
              className="form-control mb-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <input className="w-[100%] bg-slate-200 p-3 rounded-xl hover:bg-white border-2 border-blue-950" type="text" placeholder="Subject" />
            </div>
            <div
              className=" mb-5"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <textarea
                className="w-[100%] h-[210px]  bg-slate-200 p-3 rounded-xl hover:bg-white border-2 border-blue-950"
                type="text"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#05386B] hover:bg-[#2a71b7] text-white duration-1000 w-full mb-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
