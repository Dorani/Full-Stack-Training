import React from 'react';

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
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
