import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleHeading">
          <h4>{heading}</h4>
        </div>
        <div className="widgets__articleSubtitle">
          <FiberManualRecord className="widget__icon" />
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Indian law firms", "11,566 reader")}
      {newsArticle("Logistics sector", "10,867 reader")}
      {newsArticle("Indian IT market", "9,149 reader")}
      {newsArticle("Career breaks", "7,980 reader")}
      {newsArticle("Gen Z and brands", "4,926 reader")}
      {newsArticle("Corporate gifting", "3,890 reader")}
    </div>
  );
}

export default Widgets;
