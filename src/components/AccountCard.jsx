import React from 'react';

import PropTypes from 'prop-types';

const AccountCard = ({ user }) => {
  const { name, surname, email, age, friends } = user;
  return (
    <div>
      <ul>
        <li>Name : {user.name} </li>
        <li>Surname: {user.surname}</li>
        <li>Email : {user.email}</li>
        <li>Age : {user.age}</li>
        <li>Friends : {user.friends.join(',')}</li>
      </ul>
    </div>
  );
};

AccountCard.propTypes = {
  //shape is live -could have as many as need props
  //exact-exact not more
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    friends: PropTypes.arrayOf(PropTypes.string),
  }),
};
//////////////////////////
//PropTypes.shape<= savybiu objekte gali buti ir daugiau nei apibrezta
//PropTypes.exact <= savybiu objekte negali buti daugiau nei apibrezta

// AccountCard.propTypes = {
//     //shape is live -could have as many as need props
//     //exact-exact not more
//   user: PropTypes.exact({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     friends: PropTypes.arrayOf(PropTypes.string),
//   }),
// };
export default AccountCard;
