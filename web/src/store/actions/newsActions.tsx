import { Dispatch } from 'redux';
import * as actions from './index'
import actionType from './actionType'
import { getNews } from '../api/newsDB'
export function getItem() {
  return (dispatch: Dispatch, getState: any):actionType => {
    const {newsState} = getState()
    return dispatch({type: actions.NEWS_LIST, data: {id: newsState.id-1}}) as actionType
  }
}

export function getList(start: number, end: number) {
  return (dispatch: Dispatch, getState: any) => {
    const {newsState} = getState()
    getNews(start,end).then((d)=>{
      console.log(d)
      dispatch({type: actions.NEWS_LIST, data: {id: newsState.id+1}}) as actionType
    }).catch((e)=>{
      console.log(e)
      dispatch({type: actions.NEWS_LIST, data: {id: newsState.id+1}}) as actionType
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