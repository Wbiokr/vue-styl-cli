<template>
  <div class="p-t-70 bg-color-f9f9f9" :style='{minHeight:winHeight +"px"}' >
    <keep-alive include='searchExchange'>
      <transition name='down'>
        <router-view :style="{ minHeight:winHeight + 'px' }" :class="$route.path=='/'?'bg-color-000':'bg-color-f9f9f9'"></router-view>
      </transition>
    </keep-alive>
    
  </div>
</template>
<script>

export default {
  data(){
    return {
    }
  },
  
  components: { 
  },
  computed:{
  },
  mounted(){
  },
  methods:{
  }
}
</script>
