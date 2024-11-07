import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue'
import About from './About.vue'
import Projects from './Projects.vue'

// rotte

const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;