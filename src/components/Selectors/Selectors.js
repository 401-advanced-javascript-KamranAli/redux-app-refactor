import { actions } from '../actions/MoodActions';

export const getCoffee = state => state.coffees;
export const getSnack = state => state.snacks;
export const getNap = state => state.naps;
export const getStudy = state => state.studies;

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

export const getActions = state => actions.map(action => ({ ...action, count: state[action.stateName] }));
