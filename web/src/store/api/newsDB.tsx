import * as Promise from 'promise';
import axios from 'axios';

export function getNews(start:number, end:number) {
  return new Promise((resolve,rejects)=>{
    axios.get('http://0.0.0.0:8888/api/user/list/'+start+'/'+end+'').then((response)=>{
      resolve(response);
    }).catch((error)=>{
      rejects(error);
    })
  })
}
