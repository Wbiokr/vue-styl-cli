<template lang='jade'>
  transition(name='loading')
    article.my-loading.p-r.ease-400(v-if='isLoading')
      .loading-left
      .loading-center
      .loading-right
      p.p-a-xc-yb.c-fff.f-s-14(style='bottom:30px!important')
        | {{content}}
</template>
<script>
export default {
  data(){
    return{
      isLoading:false,
      content:''
    }
  }
}
</script>
<style lang='stylus' scoped>
.loading-enter,.loading-leave-to
  opacity 0
  // transform  scale(.3)
  // border-radius 50%
  // margin-top -150px
.my-loading
  position fixed
  z-index 100001
  top 50%
  left 50%
  margin-top -75px
  margin-left -80px
  // transform translate(-50%,-50%)
  height 150px
  width 160px
  background rgba(#000,.8)
  border-radius 8px
  // position relative
  display flex
  justify-content center
  align-items center
  &:after
    content ''
    position fixed
    left -1000px
    right -1000px
    top -1000px
    bottom -1000px
    background transparent
  >div
    height 16px
    width 16px
    background #fff
    border-radius 50%
    margin 0 4px
    animation loading 1.4s infinite ease-in-out both
    for i in 1 2 3
      &:nth-child({i})
        animation-delay (0.26*(i) - 0.55)s
@keyframes loading{
  0%{
    transform scale(0)
  }
  40%{
    transform scale(1)
  }
  80%{
    transform scale(0)
  }
  100%{
    transform scale(0)
  }
}
</style>
