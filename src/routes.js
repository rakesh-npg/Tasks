import PostVueVue from "./components/PostVue.vue"
import SkillsName from "./components/SkillsName.vue"
import tableRead from "./components/tableRead.vue"


export default[
    {
        path: '/', 
        component: SkillsName, 
        name: 'home'
    }, 
    { 
        path: '/about', 
        component: tableRead, 
        name: 'about'
    }, 
    {
        path: '/posts/:slug', 
        component: PostVueVue, 
        name: 'post'
    }
]