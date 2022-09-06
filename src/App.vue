<template>
  <div id="app">
    <SkillsName/>
  </div>
</template>

<script>
import SkillsName from './components/SkillsName.vue';

export default {
  name: 'App',
  components: {
    SkillsName
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
