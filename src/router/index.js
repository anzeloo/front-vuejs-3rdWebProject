import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users.vue'
import EditUsers from '../components/EditUsers.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'users',
            component: Users,
           // props: true
        },
        {
            path: '/editusers',
            name: 'editusers',
            component: EditUsers,
            //props: true
        }
    ]
})

export default router;