<template>
    <div>
        <v-text-field label="Search" placeholder="Search" v-model="SearchVal" >Search</v-text-field>
        <v-btn @click="SearchFunc">
            Search
        </v-btn>
    </div>
</template>

<script>
// import {searchBus} from '../main'
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
          //  bus.$emit('searchEmitDept', 'testVal')
          let tempData = {"searchVal":this.SearchVal}
          console.log(this.flag)
          await Vue.axios.post(this.flag, tempData).then((response)=> {
            console.log('recieved')
            this.$emit('searchEmitPop', response)
          })
          
            this.SearchVal = ''
        
        },
    },
    props:{
        flag:String,
      
    }
}
</script>