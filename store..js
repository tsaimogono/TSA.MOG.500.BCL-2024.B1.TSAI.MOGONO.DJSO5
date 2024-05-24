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

/**
 * Dispatch a function to update the state by calling an action creator and notifying all subscribers
 * @param {Function} action - Execute the action function and get the next state
 * @returns {void}
 */