<template>
  <v-app>

    <div id="app">  
      <router-link class="PopupVue" to="/emp">Employee</router-link>
      <br>
      <router-link class="DepartmentSearch" to="/dept">Department</router-link>     
      
      <router-view/>
     
    </div>
  </v-app>
</template>

<script>

// import PopupVueVue from './components/PopupVue.vue';
// import DepartmentSearch from './components/DepartmentSearch.vue';
export default{
  name:"App", 
  components: {
  // PopupVueVue, 
  // DepartmentSearch, 
}
}
</script>
