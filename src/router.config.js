
Vue.use(VueRouter)

/* 
  根路由配置；

  拼接pages中一級子路由，並到處配置對象

*/

export default new VueRouter({
  mode:'history',
  routes: [],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
