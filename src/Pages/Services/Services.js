import React from "react";
import rocket from "../../Assets/Vector.png";
import Service from "./Service";
import image1 from "../../Assets/icons/1.png";
import image2 from "../../Assets/icons/2.png";
import image3 from "../../Assets/icons/3.png";
import image4 from "../../Assets/icons/4.png";
import image5 from "../../Assets/icons/5.png";
import image6 from "../../Assets/icons/6.png";

const Services = () => {
  return (
    <div className="py-12">
      <div>
        <img
          className="w-20 my-4 ml-12 hover:translate-x-[500px] lg:hover:translate-x-[1080px] transition ease-in-out delay-250 duration-300"
          src={rocket}
          alt=""
        />
        <p className="text-2xl text-white text-center tracking-widest">SERVICES</p>
        <p className="text-4xl text-white text-center text-2xl tracking-wider">
          We provides services to our clients
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12 my-8 place-items-center">
        <Service img={image1} heading={"Software Solution"}></Service>
        <Service img={image2} heading={"E-Commerce Solution "}></Service>
        <Service img={image3} heading={"ERP Solution"}></Service>
        <Service img={image4} heading={"Bulk SMS Service"}></Service>
        <Service img={image5} heading={"Graphic Design"}></Service>
        <Service img={image6} heading={"Digital Marketing"}></Service>
      </div>
    </div>
  );
};

export default Services;
