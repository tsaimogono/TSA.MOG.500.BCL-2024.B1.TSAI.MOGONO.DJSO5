import { state } from "./store.js";
import { initialState } from "./initialState.js";

/**
 * Incrementing the value in the current state.
 * @returns {Object} A new state object with an incremented value.
 */
export const addAction = () => {
    return { ...state, 
      value: state.value + 1 };
  };
  