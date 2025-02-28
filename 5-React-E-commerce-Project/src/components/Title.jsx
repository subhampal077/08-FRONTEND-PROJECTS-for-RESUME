import React from "react";

const Title = ({ title, para }) => {
  return (
    <div>
      <div className="mb-3 inline-flex items-center gap-2">
        <h1 className="font-medium text-gray-700">{title}</h1>
        <p className="h-[1.5px] w-8 bg-gray-700 sm:h-[2px] sm:w-12"></p>
      </div>
      <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
        {para}
      </p>
    </div>
  );
};

export default Title;
