import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Response = ({ response }) => {
  return (
    <>
      <div className="response-container mb-8">
        <div className="prompt-container w-full bg-white px-6 py-2 shadow-xl mb-4 rounded-lg flex justify-between items-center">
          <p className="text-sm md:text-[1rem] font-medium text-slate-700">
            {response.prompt}
          </p>
          {/* <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer text-sm sm:text-[1rem]"
          /> */}
        </div>
        <div className="images-container grid grid-cols-3 gap-5">
          {response &&
            response.images_url &&
            response.images_url.map((image, index) => {
              return (
                <div className="image-container" key={index}>
                  <img src={image.url} alt="" className="rounded-sm" />
                </div>
              );
            })}
        </div>
        <div className="h-[1px] bg-gray-300/80 my-8" />
      </div>
    </>
  );
};

export default Response;
