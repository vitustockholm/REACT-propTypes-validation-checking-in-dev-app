import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Book from '../helpers/Books';

const MessageButton = ({ message, book, showText, hideText }) => {
  //Hooks
  //--state
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      {/* <button onClick={() => setShowMessage((prev) => !prev)}> */}
      {/* 2scenarios */}
      <button onClick={() => setShowMessage((prev) => !prev)}>
        {showMessage ? hideText : showText}
        {/* manipulation on toggler with changing state and re-rendering commponent */}
      </button>
      {showMessage && message}
      {/* if message true => then render */}
      <p>
        {book.title} | {book.author}
      </p>
    </>
  );
};

MessageButton.propTypes = {
  //1.   propTypes.node => everythink but not object
  //   messeage: PropTypes.node,
  //2.    react component || html tag
  message: PropTypes.element,
  //3.    book prop created from Book class
  book: PropTypes.instanceOf(Book),
  //4.    checking if props values same as in array
  showText: PropTypes.oneOf(['Show Message', 'Show Text']), //enum
  hideText: PropTypes.oneOf(['Hide Message', 'Hide Text']), //enum
};

export default MessageButton;
