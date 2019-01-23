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
  const text =
  season === 'winter' ? 'burr, it is chilly' : 'lets hit the beach';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
