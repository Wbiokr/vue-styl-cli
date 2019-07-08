import { mapState } from 'vuex'

Vue.mixin({
  computed:{
    ...mapState(['winHeight','winWidth','winLan','winTheme'])
  },
  methods: {
    encodeURIComponent(url){
      return encodeURIComponent(url)
    }
  }
})