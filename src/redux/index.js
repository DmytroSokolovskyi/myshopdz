import {createStore} from "redux";
import {reducer} from './reducers';

export const store = createStore(reducer);

export * from './actions-types';
export * from './actiion-creators';