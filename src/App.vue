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
    <div class="projects-list">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<style scoped>

</style>
