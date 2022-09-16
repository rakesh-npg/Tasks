<template>
    <div>
        <v-text-field @keydown="searchFunc" label="Search" placeholder="Search" v-model="searchVal" >Search</v-text-field>
        <!-- <v-btn @click="searchDebounce(searchFunc, 2000)"></v-btn> -->
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
            searchVal:"",
        }
    },
    methods:{


        async searchFunc() {
        console.log('working')
        this.$emit('searchEmitPop', this.searchVal  )
        
        
        },
    },
    props:{
        flag:String,
      
    }
}
</script>