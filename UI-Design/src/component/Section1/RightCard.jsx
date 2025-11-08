import React from "react";
import { ArrowRight, CornerDownRight } from "lucide-react";

const RightCard = (prop) => {
  return (
    <div
      className="h-full w-70 rounded-4xl bg-fuchsia-500 flex flex-col justify-between py-10 bg-cover bg-center"
      style={{
        backgroundImage: ` url(${prop.img})`,
      }}
    >
      <div className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center mx-6">
        {prop.number}
      </div>

      <div>
        <div className="text-lg mb-6 px-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eos.
        </div>
        <div className="flex items-center justify-between px-3 w-full ">
          <button className="bg-blue-500 py-2 px-4 rounded-3xl font-bold">
            {prop.buttom}
          </button>
          <button className="bg-blue-500 py-2 px-4 rounded-3xl">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
