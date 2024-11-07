<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue';
export default {
  name: 'App',
  components: { ProjectCard },
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
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
