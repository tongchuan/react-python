import { Dispatch } from 'redux';
import * as actions from './index'
import actionType from './actionType'
import { getNews } from '../api/userDB'
export function getItem() {
  return (dispatch: Dispatch, getState: any):actionType => {
    const {newsState} = getState()
    return dispatch({type: actions.USER_ITEM, data: {id: newsState.id-1}}) as actionType
  }
}

export function getList(start: number, end: number) {
  return (dispatch: Dispatch, getState: any) => {
    const {userState} = getState()
    getNews(start,end).then((d)=>{
      console.log(d)
      dispatch({type: actions.USER_LIST, data: {id: userState.id+1}}) as actionType
    }).catch((e)=>{
      console.log(e)
      dispatch({type: actions.USER_LIST, data: {id: userState.id+1}}) as actionType
    })
    
    
  }
}


// export function getList(): INewsList {
//   return (dispatch, getState)<INewsListg> => {
//     const {newsState} = getState()
//     console.log([dispatch,newsState])
//     return dispatch({type: actions.NEWS_LIST})
//     // return {
//     //   type: actions.NEWS_LIST
//     // }
//   }
//   // console.log(arguments)
//   // return {
//   //   type: actions.NEWS_LIST
//   // }
// }