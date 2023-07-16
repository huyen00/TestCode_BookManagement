<template>
  
  <div id="app fixed h-full" style="height:100%">
   <sidebar />
    
  </div>
</template>

<script>
import sidebar from './components/layout/Sidebar.vue'
export default {
  name: 'App',
 
  
  components: {
    sidebar
    
  
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
 
}
</style>
