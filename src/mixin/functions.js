// 常用的小型的全局组件
Vue.component('Icon',{
  render(){
    return <i onClick={()=>this.$emit('click')} class={"iconfont "+this.type}></i>
  },
  props:{
    type:{
      type:String,
      isRequired:true,
    }
  }
})

Vue.component('NoData',{
  render(){
    return  <div  class="f-column f-c p-a-c m-b-30">
                <img class='w-80 h-80' src={require('@/image/icon/icon_nodata.png')} />
                <div class="m-t-10 f-s-14 c-ccc">NO DATA</div>
            </div>
  }
})


