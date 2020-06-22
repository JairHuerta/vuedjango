<template>
  <div id="app">
    <Header/>
    <Types/>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Types from './components/Types.vue'

export default {
  name: 'App',
  components: {
    Header,
    Types
  }
}
</script>
