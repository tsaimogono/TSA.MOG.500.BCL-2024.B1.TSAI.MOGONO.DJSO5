import { initialState } from "./initialState.js";

/**
 * The current state object
 * @type {Object}
 */
export let state = initialState;

/**
 * An array to hold observer functions (subscribers)
 * @type {Array<Function>}
 */
export const subscribers = [];
