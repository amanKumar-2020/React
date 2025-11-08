import React from 'react'
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full w-1/4  flex flex-col justify-between ">
      <div>
        <div className="text-6xl tracking-tight pt-6">
          Prospective Customer Segmentation
        </div>
        <div className="text-3xl pt-10 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo iusto
          aut assumenda maiores ipsa beatae doloribus.
        </div>
      </div>
      <div className="p-9">
        <ArrowUpRight size={70} />
      </div>
    </div>
  );
}

export default LeftContent;
