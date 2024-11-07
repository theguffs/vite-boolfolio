<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      projects: [],
    };
  },
  mounted(){
    axios.get('http://localhost:8000/api/projects')
    .then(response => {
      this.projects = response.data;
      console.log(this.projects);
    })
    .catch(error => {
      console.error('non funziona')
    });
  },
};

</script>

<template>
  <div id="app">
    <h1> progetti </h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
