import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { incrementSelection } from '../components/actions/MoodActions';
import { getFace, getActions } from '../components/Selectors/Selectors';

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection }) => (
  <>
    <Controls actions={actions} handleSelection={handleSelection}/>
    <Face emoji={emoji} />
  </>
);

const mapStateToProps = state => ({
  actions: getActions(state),
  emoji: getFace(state)
});

const mapDispatchToProps = dispatch => {
  return {
    handleSelection(name) {
      dispatch(incrementSelection(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
