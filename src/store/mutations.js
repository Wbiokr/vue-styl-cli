export default {
  changeKey(state,payload){
    for(let i in payload){
      state[i] = null ;
      state[i] = payload[i]
    }
  },
}