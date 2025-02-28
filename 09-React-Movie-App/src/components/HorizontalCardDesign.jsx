//---- horizontal design component -----//

import React from "react";
import Card from "./Card";

const HorizontalCardDesign = ({
  dataArray,
  categoryText,
  mediaType,
  trending = false,
}) => {
  return (
    <div>
      {dataArray.length > 0 && (
        <div className="px-3 md:pl-12 md:pr-3 md:mb-4 mt-5 md:mt-0">
          <h2 className="capitalize text-white font-bold md:text-2xl text-xl">
            {categoryText}
          </h2>
          <div className="flex gap-4 md:gap-6 py-5 overflow-x-scroll">
            {dataArray.map((item, i) => {
              return (
                <Card
                  key={item.id}
                  data={item}
                  index={i}
                  Trending={trending}
                  mediaType={mediaType}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalCardDesign;
