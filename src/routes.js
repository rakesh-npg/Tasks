
// import SkillsName from "./components/SkillsName.vue"
import DepartmentSearch from "./components/DepartmentSearch.vue"
import PopupVue from "./components/PopupVue.vue"

export default[
    // {
    //     path: '/', 
    //     component: SkillsName, 
    //     name: 'home'
    // }, 
    {
        path:'/emp',
        component:PopupVue, 
        name: 'employee'
    },
    {
        path:'/dept',
        component:DepartmentSearch, 
        name: 'department'
    }, 
     

]