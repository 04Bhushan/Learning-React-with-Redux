import "./SeasonDisplay.css";
//webpack is a open source dependancy inside our project that takes all files & joined them together
// this also connect all our files with HTML file also
import React from "react";

const seasonConfig = {
  Summer:{
    text:" Let's Hit The Beach!",
    iconName: "sun"
  },
  Winter:{
    text: "Burr,It's Chilly!",
    iconName: "snowflake"
  }
};

const GetSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ?"Summer":"Winter"; //For Northern Hemisphere
  } else {
    return lat > 0 ?"Winter":"Summer"; //For Southern Hemisphere
  }
};

const SeasonDisplay = (props) => {
  const season = GetSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //destructuring text & iconName
  //returns text & iconName

  // in the below code value of season will become it's class 
  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={` icon-right massive ${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
