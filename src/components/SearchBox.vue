<template>
    <div>
        <v-text-field @keypress="SearchFunc" label="Search" placeholder="Search" v-model="SearchVal" >Search</v-text-field>
    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios)
export default{
    data() {
        return{
            SearchVal:'', 
        }
    },
    methods:{
        async SearchFunc() {
            let time = true 
            if(time){
                clearTimeout(time)
                time = null 
            }
            time =  setTimeout(async () => {
                console.log('working')
          let tempData = {"searchVal":this.SearchVal}
          console.log(this.flag)
          await Vue.axios.post(this.flag, tempData).then((response)=> {
            console.log('recieved')
            this.$emit('searchEmitPop', response)
          })
          
           
            }, 800)
            
        
        },
    },
    props:{
        flag:String,
      
    }
}
</script>