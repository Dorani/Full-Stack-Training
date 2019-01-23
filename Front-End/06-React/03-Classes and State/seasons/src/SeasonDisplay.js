import React from 'react';

//determine what season is function
const getSeason = (lat, month) => {
  if (month > 2 and month < 9) {
    //if lat is > 0 returns true then reuturn summer, otherwise winter
    //ternary expressions:
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'wintr' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(props.lat);
  return <div>Season Display</div>
};

export default SeasonDisplay;
