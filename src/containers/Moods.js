import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { incrementSelection, actions } from '../components/actions/MoodActions';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection }) => (
  <>
    <Controls actions={actions} handleSelection={handleSelection}/>
    <Face emoji={emoji} />
  </>
);

const mapStateToProps = state => ({
  actions: actions.map(action => ({ ...action, count: state[action.stateName] })),
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
