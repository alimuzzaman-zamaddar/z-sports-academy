import React from "react";
import news1 from "../../assets/news/cropped-shot-of-sportsmen-playing-golf-together-on-golf-course-at-daytime-300x200.jpg";
import news2 from "../../assets/news/golf-is-a-style-of-living--300x200.jpg";
import news3 from "../../assets/news/preparing-golf-ball-300x200.jpg";
import news4 from "../../assets/news/two-young-golfers-with-clubs-playing-golf-together.jpg";

const News = () => {
  return (
    <>
      <div className=" flex justify-between items-center mb-7 border-t-2 pt-6">
        <div className="">
          <h1 className="text-5xl text-white font-serif font-extrabold">
            Latest news & update
          </h1>
        </div>
        <div className="">
          <button className="btn  bg-purple-500 hover:bg-purple-900 text-white">
            Read More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
        <div
          className=""
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img className="rounded-[5px] w-full mb-5" src={news1} alt="" />
          <div className="">
            <h1 className="text-xl text-white mb-5">
              Ireland produce incredible fightback against England to win 19th
              Home Internationals
            </h1>
            <span className="text-white font-semibold 6">
              October 2, 2021 No Comments
            </span>
            <p className="text-white mt-6">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur.magnis dis
              parturient montes
            </p>
          </div>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img className="rounded-[5px] w-full mb-5" src={news2} alt="" />
          <div className="">
            <h1 className="text-xl text-white mb-5">
              Westmanstown to face Nenagh for Fred Perry Trophy title
            </h1>
            <span className="text-white font-semibold 6">
              October 2, 2021 No Comments
            </span>
            <p className="text-white mt-6">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur.magnis dis
              parturient montes
            </p>
          </div>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img className="rounded-[5px] w-full mb-5" src={news3} alt="" />
          <div className="">
            <h1 className="text-xl text-white mb-5">
              Lowry and Murphy conquer high winds to contend for Dunhill Links
            </h1>
            <span className="text-white font-semibold 6">
              October 2, 2021 No Comments
            </span>
            <p className="text-white mt-6">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur.magnis dis
              parturient montes
            </p>
          </div>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img className="rounded-[5px] w-full mb-5" src={news4} alt="" />
          <div className="">
            <h1 className="text-xl text-white mb-5">
              McBride, Purcell and McGee progress at Korn Ferry Tour Q-School
            </h1>
            <span className="text-white font-semibold 6">
              October 2, 2021 No Comments
            </span>
            <p className="text-white mt-6">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur.magnis dis
              parturient montes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
