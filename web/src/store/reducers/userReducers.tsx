import { userState } from '../types/userState';
import defaultState from '../initState'
import * as actions from '../actions/index';
import actionType from '../actions/actionType'
// , { NEWS_ITEM, NEWS_LIST }


export function userReducers(state: userState = defaultState.userState, action: actionType): userState {
  // console.log(action.data)
  switch (action.type) {
    case actions.USER_ITEM:
      return { ...state, id: state.id + 1 };
    case actions.USER_LIST:
      return { ...state,  id: action.data.id   };
  }
  return state;
}
