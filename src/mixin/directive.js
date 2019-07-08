Vue.directive('focusInput',{
  bind(el){
    el.className+=' ease-400 '
  },
  inserted:(el,binding)=>{
    el.onfocus=()=>{
      el.style.borderColor='#1C71B7';
    }
    el.onblur=()=>{
      el.style.borderColor=binding.value||'#eee'
    };
    el.focus();
  }
})
