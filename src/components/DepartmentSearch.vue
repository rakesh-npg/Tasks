<template>
    <div>
        <h1>dept</h1>
        <SearchBox :flag="this.searchFiledLink" @searchEmitPop="searchFunc" />
        <p>{{table_data}}</p>
    </div>
</template>

<script>
// import {searchBus} from '../main'
export default{
    
    data() {
        return {
            name:"DepartmentSearch", 
            searchFiledLink:'http://127.0.0.1:3333/read', 
            table_data:"hello", 
            searchFieldFlag:'', 

        };
    },
    methods: {
        searchFunc(val) {

          console.log('gotva;l')
          console.log(val)
          this.table_data = val.data
          this.searchFieldFlag= true
        }, 
    },
}
</script>