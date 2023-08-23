import React from "react";
import VideoProductCard from "../components/VideoProductCard";
import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";

const VideosList = () => {
  const products = [
    {
      embedId: "7iy0Sgno9-0",
      name: "Nike Air Jordan-01",
      detail: "$200.20",
    },
    {
      embedId: "7iy0Sgno9-0",
      name: "Nike Air Jordan-10",
      detail: "$210.20",
    },
    {
      embedId: "7iy0Sgno9-0",
      name: "Nike Air Jordan-100",
      detail: "$220.20",
    },
    {
      embedId: "7iy0Sgno9-0",
      name: "Nike Air Jordan-001",
      detail: "$230.20",
    },
  ];
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          {" "}
          Our <span className="text-green-600"> Popular </span> Video
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <VideoProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default VideosList;
