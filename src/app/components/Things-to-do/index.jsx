import React from "react";
import Image from "next/image";
import { log } from "node:console";

const ThingsToDo = ({ ThingsToDo }) => {
  return (
    <div className="div">
      <h2 className="text-center mt-10 text-[#f4ebd0] text-2xl leading-10">
        Things to do
      </h2>

      <ol className="list-decimal px-44 py-20 space-y-16">
        {ThingsToDo.map((place) => (
          <li key={place.id} className="text-[#b68d40] text-2xl font-semibold">
            <h1 className=" text-2xl font-semibold text-[#b68d40]">
              {place.name}
            </h1>
            <img src={place.image} alt={place.name} className="mt-4" />

            {/* <p className="pl-5 mt-5 text-[#f4ebd0] text-left">{place.description}</p> */}
            <div
              className="pl-5 mt-5 text-[#f4ebd0] text-left text-xl"
              dangerouslySetInnerHTML={{
                __html: place.description.replace(/\n\n/g, "<br/><br/>"),
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ThingsToDo;
