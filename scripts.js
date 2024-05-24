import { dispatch } from "./store.js";
import { getState, addAction, subtractAction, resetAction } from "./actions.js";

// Get the initial state
getState();

// Dispatch the addAction twice
dispatch(addAction);
dispatch(addAction);