import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, action }) => {
  //   console.log(action);
  return (
    //disabled button no action - action : undefined
    <>
      <button onClick={action} disabled={!action && true}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

Button.defaultProps = {
  text: 'Click me',
  action: () => alert('Button doesnt do anything yet!'),
};
export default Button;
