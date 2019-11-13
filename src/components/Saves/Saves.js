import React from 'react';
import PropTypes from 'prop-types';
import SaveCard from './SaveCard';

const Save = ({ saves }) => {
  const saveElements = saves.map(saveItem => (
    <li key={saveItem}>
      <SaveCard {...saveItem} />
    </li>
  ));
  return (
    <>
      <h1>Saved Actions</h1>
      <ul>
        {saveElements}
      </ul>
    </>
  );
};

Save.propTypes = {
  saves: PropTypes.arrayOf(PropTypes.shape({
    coffees: PropTypes.string,
    snacks: PropTypes.string,
    naps: PropTypes.string,
    studies: PropTypes.string
  }))
};

export default Save;
