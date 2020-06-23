<template>
  <div id="app">
    <Header/>
      <div class="container">
          <div class="row">
            <div class="col-4 md">
              <Categories/>
              <Types/>
            </div>
            <div class="col-8 md">
              <router-view></router-view>
            </div>
          </div>
      </div>  
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Categories from './components/Categories.vue'
import Types from './components/Types.vue'

export default {
  name: 'App',
  components: {
    Header,
    Categories,
    Types
  }
}
</script>
