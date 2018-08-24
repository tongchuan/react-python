import { createStore } from 'redux';
import middleware from './middleware';
import reducers from './reducers';
import storeType from './types';

export default function () {
  const store = createStore<storeType,any,any,any>(reducers, middleware);
  // const store = createStore<StoreState,any,any,any>(enthusiasm, initState, compose(
  //   applyMiddleware(thunk, logger)
  // ));
  return store;
}
// export const store = createStore<StoreState,{ type: constants.DECREMENT_ENTHUSIASM },{},{}>(enthusiasm,initState)