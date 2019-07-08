<template lang="jade">
transition(name='view')
  .com-view.p-f-xl-yt.h-per-100.w-per-100.f-c.z-1000.ease-400.f-column(v-if='!!url' @click.prevent.stop='url = ""')
    img.ease-400(:src='url' @click.prevent.stop='url=url')
    Icon.f-s-30.c-fff.ease-400.c-p.m-t-30.o-hover-70(type='icon-cancel')
</template>
<script>
export default {
  data(){
    return {
      url:''
    }
  }
}
</script>

<style lang="stylus">
.com-view
  background rgba(#000,.6)
  // i
  //   opacity 0.7
  //   &:hover
  //     // transform  scale(1.2)
  //     opacity 1
  
  img
    max-height 70%
    max-width 70%
    min-width 500px
    min-height 150px
.view-enter,.view-leave-to
  opacity 0
  i
    transform translateY(100%)
  img
    transform scale(0)
</style>
