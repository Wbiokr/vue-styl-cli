import Template from './tem.vue';

const Loading={};

Loading.lock=false;

Loading.install=($)=>{

  if(Loading.lock){return ;}

  Loading.lock=true;
  

  const Constructor=$.extend(Template);

  const MyLoading=new Constructor();

  MyLoading.$mount(document.createElement('div'));

  document.body.appendChild(MyLoading.$el);

  $.prototype.$loading = {
    open(content='loading...'){
      MyLoading.isLoading = true;
      MyLoading.content = content;
    },
    close(){
      MyLoading.isLoading = false

    }
  }
};

export default Loading ;


/* 調用 */
/* 
  this.$toast('test','danger',2000,50)

  test為内容
  danger為type，type：danger、success、info、warning
  2000為毫秒數
  50為距離瀏覽器頂部的距離

*/