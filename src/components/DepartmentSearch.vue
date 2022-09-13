<template>
    <div>
        <h1>dept</h1>
        <SearchBox :flag="this.name" @searchEmitDept="searchFunc" />
    </div>
</template>

<script>
// import {searchBus} from '../main'
export default{
    
    data() {
        return {
            name:"DepartmentSearch", 

        };
    },
    methods: {
        searchFunc(val){        
            //console.log('this is dept workign')
            console.log(val)
        },
    },
}
</script>