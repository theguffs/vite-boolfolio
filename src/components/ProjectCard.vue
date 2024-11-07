<script >
  export default {
    props: ['project'],
  };
</script>

<template>
  <div class="project-card">
    <h3> {{ project.name }}</h3>
    <p> {{ project.description}}</p>
  </div>
</template>

<style scoped>
.project-card{
  border: 1px solid white;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
}
</style>
