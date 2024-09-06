import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistation from './pages/coaches/CoachRegistation.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { paths: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
