import './SeasonDisplay.css'
import React from 'react';


const seasonConfig = {
  summer: {
    text: "lets hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "burr it is cold",
    iconName: "snowflake"
  }
};

//determine what season is function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //if lat is > 0 returns true then reuturn summer,
    //otherwise winter
    //ternary expressions:
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  //destructor text and iconName from seasonConfig with the above season
  const { text, iconName } = seasonConfig[season]; //{text, iconName}
  return (
    <div>
      <i className={` icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
