import React from "react";

const Service = ({ img, heading }) => {
  return (
    <div class="card w-80 bg-white shadow-xl">
      <figure class="px-10 pt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-[#2397CD] tracking-widest">{heading}</h2>
        <p className="text-sm tracking-wider">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
        <div class="card-actions">
          <button class="btn btn-primary px-8 rounded-3xl text-white bg-[#2397CD] hover:bg-[#2397CD] tracking-widest">
            MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
