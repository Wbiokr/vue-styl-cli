import axios from 'axios'
import formatParams from '@/utils/formData';
axios.defaults.method = 'post';
axios.defaults.baseURL = window.config && window.config.api;
axios.defaults.transformRequest = [(data,res) =>{
  return formatParams(Object.assign({},data,{
    access_token:localStorage.access_token
  }))
} 
];

axios.interceptors.request.use(config=>{
  
  return config ;

},error=>{
  return Promise.reject(error)
})


axios.interceptors.response.use((res)=>{

  if( data.code == 200  ){
    return data;
  };


  return Promise.reject(data)
  


},(err)=>{
  

  return Promise.reject(err)
})



export default axios;