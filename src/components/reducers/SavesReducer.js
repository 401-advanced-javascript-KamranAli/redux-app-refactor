
const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function saveReducer(state = initialState, action) {
  switch(action.type) {
    case 'SAVE':
      return { ...state };
  }
}
