<template>
  <v-app>
  <div id="app">
      <EmployeTable/>
      
    </div>
  </v-app>
</template>

<script>
import EmployeTable from "./components/EmployeTable.vue";


export default {
  name: 'App',

  components: {
    EmployeTable,

},

  data: () => ({
    //
  }),
};
</script>
