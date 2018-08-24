import { newsState } from '../types/newsState';
import defaultState from '../initState'
import * as actions from '../actions/index';
import actionType from '../actions/actionType'
// , { NEWS_ITEM, NEWS_LIST }


export function newsReducers(state: newsState = defaultState.newsState, action: actionType): newsState {
  // console.log(action.data)
  switch (action.type) {
    case actions.NEWS_ITEM:
      return { ...state, id: state.id + 1 };
    case actions.NEWS_LIST:
      return { ...state,  id: action.data.id   };
  }
  return state;
}
