import React, { useRef } from 'react';
import PropTypes from 'prop-types'; // impt <- snippet

const MatchButton = ({ text, action, numbers }) => {
  const buttonRef = useRef();
  let [a, b] = numbers;

  const handleClick = () =>
    (buttonRef.current.innerText = `Answer is ${action(a, b)}`);

  return (
    <button ref={buttonRef} onClick={handleClick}>
      Show {a} {text}
      {b} answer
    </button>
  );
};

MatchButton.proTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  // numbers: PropTypes.arrayOf(PropTypes.number),
  // numbers: PropTypes.array.isRequired,
  /////////////
  //case for numbers array data format
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MatchButton;

//Show 5 + 6 answer
//text - string  (match operator)
//action - function
//numbers []

//Show10 -6 answer
//Answer is 14
