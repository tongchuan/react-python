import * as Promise from 'promise';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
console.log(axios.defaults.headers)
export function getList(start:number, end:number){
  return new Promise((resolve,rejects)=>{
    axios.get('http://0.0.0.0:8888/api/user/list/'+start+'/'+end+'').then((response)=>{
      resolve(response);
    }).catch((error)=>{
      rejects(error);
    })
  })
}

export function testGet() {
  return new Promise((resolve,rejects)=>{
    axios.get('http://0.0.0.0:8888/ana',{
      params: {name: '张', age: 100}
    }).then((response)=>{
      resolve(response);
    }).then((error)=>{
      rejects(error);
    })
  })
}

export function testPost() {
  return new Promise((resolve,rejects)=>{
    axios.post('http://0.0.0.0:8888/ana',{name: 'zhang', age: 100}).then((response)=>{
      resolve(response);
    }).then((error)=>{
      rejects(error);
    })
  })
}
