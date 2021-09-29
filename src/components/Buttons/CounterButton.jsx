import React, { useState } from 'react';

const CounterButton = ({ value }) => {
  //   const initialState = value;
  //   const [count, setCount] = useState(initialState);
  ///////////////2ways

  const [count, setCount] = useState(value);

  const clickHandler = () => {
    setCount((prev) => prev.map((num) => num + 1));
  };

  return <button onClick={clickHandler}> Count: {count.join(' | ')}</button>;
};

CounterButton.propTypes = {
  //   value: PropTypes.arrayOf(PropTypes.number),
  value: (props, propName, component) => {
    if (props[propName].length > 2)
      return new Error(
        `Invalid prop ${propName} length, it cant be larger than 2`
      );
    // console.log(value);
    for (let i = 0; i < props[propName].length; i++) {
      if (typeof props[propName][i] !== 'number') {
        return new Error(
          `Invalid prop item: ${
            props[propName][i]
          } item, it should be number , not a ${typeof props[propName][
            i
          ]} props[propName]`
        );
      }
    }
  },
};

export default CounterButton;
