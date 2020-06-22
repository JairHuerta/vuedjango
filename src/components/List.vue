<template>
  <div class="container">

    <router-link to detail="/detail">Detail</router-link>

    <div v-for="e in elements" v-bind:key="e.id">
      <router-link :to=" '/detail/' + e.id">
        <b-card
          :title="e.title"
        >

        </b-card>
        <b-card-text>
          {{e.description}}
        </b-card-text>
      </router-link>

    </div>
  </div>
</template>

<script>
{/* import ListDefault from "../partials/_ListDefault"; */}
export default {
  components: {
    //ListDefault
  },
  created() {
    this.findAll();
  },
  data() {
    return {
      elements: []
    };
  },
  methods: {
    findAll: function() {
      fetch("http://localhost:8000/api/element/?format=json")
        .then(res => res.json())
        .then(res => (this.elements = res));
    }
  }
};
</script>
