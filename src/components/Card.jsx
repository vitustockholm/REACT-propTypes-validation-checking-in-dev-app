import React from 'react';
import PropTypes from 'prop-types'; // imp <- snippet

const Card = ({ name, email, age, expires }) => {
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>Expires: after {expires + 3} months</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  expires: PropTypes.number.isRequired,
};

export default Card;
