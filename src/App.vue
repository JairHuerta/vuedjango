<template>
  <div id="app">
    <Header/>
    <List/>
  </div>
</template>

<script>
{/* import HolaMundo from './components/HolaMundo.vue' */}
import List from './components/List.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    List,
    Header
  }
}
</script>
