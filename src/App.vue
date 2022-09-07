<template>
  <div id="app">
    <TableName></TableName>
  </div>
</template>

<script>
import TableName from './components/tableName.vue';

export default {
  name: 'App',
  components: {
    TableName
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
