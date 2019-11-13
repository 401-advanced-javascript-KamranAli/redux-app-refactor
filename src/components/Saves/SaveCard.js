import React from 'react';
import PropTypes from 'prop-types';

const SaveCard = ({ coffees, snacks, naps, studies }) => {
  <div>
    <p>{coffees}</p>
    <p>{snacks}</p>
    <p>{naps}</p>
    <p>{studies}</p>
  </div>;
};

SaveCard.propTypes = {
  coffees: PropTypes.string,
  snacks: PropTypes.string,
  naps: PropTypes.string,
  studies: PropTypes.string
};

export default SaveCard;
