import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import SearchBox from './components/SearchBox.vue'

Vue.config.productionTip = false
Vue.component('SearchBox', SearchBox)

//Custom directive 
Vue.directive('rainbow',{
  update(el){
    el.style.color = "#FF0000"
  }
});

Vue.directive('currency', {
  update(el,binding, vnode) {
    let val = binding.value 
    val=val.replace(/\D/g,"")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    vnode.context.salaryInput = val
    }
  }),
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
