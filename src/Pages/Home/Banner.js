import React from "react";
import model from "../../Assets/model.png";
import rocket from "../../Assets/Vector.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen px-20">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          className="w-full hover:rotate-45 transition ease-in delay-250 duration-300"
          src={model}
          alt=""
        />
        <div>
            <img className="w-20 my-4 hover:translate-x-96 transition ease-in-out delay-250 duration-300" src={rocket} alt="" />
          <h1 class="text-[#28ACE2] text-7xl font-bold pb-2">Welcome to</h1>
          <h1 class="text-[#E3F891] text-7xl font-bold">Globetech</h1>
          <p class="text-[#2EBBE5] py-6 text-lg">
            We are committed to deliver{" "}
            <span className="text-[#9EB540] font-bold">best IT services</span>.
            Our Consultants have experience in working with clients. We have
            extensive experience in the software application space and also
            offer a broad range and depth of technology.
          </p>
          <button class="btn btn-lg btn-primary text-[#01073a] bg-[#E3F891] hover:bg-[#E3F891] mr-4 font-bold">
            Support us
          </button>
          <button class="btn btn-primary text-[#2EBBE5] font-bold btn-lg">
            Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
