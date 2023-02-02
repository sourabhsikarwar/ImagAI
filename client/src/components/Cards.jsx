import React from "react";
import download from "../assets/download.png";
import { downloadImg } from "../utils/downloadImg.js";

const Cards = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl relative group shadow-sm hover:shadow-md">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="absolute group-hover:flex flex-col max-h-[94.5%] hidden bottom-0 left-0 right-0 bg-gray-800 p-4 rounded-md m-2">
        <p className="text-white text-sm md:text-md overflow-y-auto">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white
             text-xs font-bold"
            >
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type="button" onClick={() => downloadImg(_id, photo)} className="outline-none bg-transparent border-none">
            <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
