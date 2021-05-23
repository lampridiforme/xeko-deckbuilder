import { createStore } from "@stencil/store";
export { state, onChange };

// const shouldUpdate = (newValue, oldValue, propChanged) => {
//     return JSON.stringify(newValue) !== JSON.stringify(oldValue);
// }

const { state, onChange } = createStore<{userDeck: {[key: string]: number}, selected: string}>({
  userDeck: {},
  selected: ''
}, /*shouldUpdate*/);

// onChange('selected', _value => {
//   console.log('here is the updated store: ', state.userDeck, state.selected);
// });
