<template>
    <div>
        <v-text-field label="Search" placeholder="Search" v-model="SearchVal">Search</v-text-field>
        <v-btn @click="SearchFunc">
            Search
        </v-btn>
    </div>
</template>

<script>
// import {searchBus} from '../main'
export default{
    data() {
        return{
            SearchVal:'', 
            

        }
    },
    methods:{
        SearchFunc() {
          //  bus.$emit('searchEmitDept', 'testVal')
            if (this.flag == 'PopupVue')
            {  

                console.log('POpup')  
                this.$emit('searchEmitPop', this.SearchVal)
            
            }
            else if (this.flag == 'DepartmentSearch')
            {
                console.log('Dept vue ')
                this.$emit('searchEmitDept', this.SearchVal)
            }
            else 
            console.log('wrong val  ')
            this.SearchVal = ''
        
        },
    },
    props:{
        flag:String
    }
}
</script>