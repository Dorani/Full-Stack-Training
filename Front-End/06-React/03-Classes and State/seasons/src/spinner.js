import React from 'react';


const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

//define something on the function itself
//ie an obj that will default for generic spinners:
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
