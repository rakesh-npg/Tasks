import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios)

// class apiC extends axios{
//     constructor(){
//         super()
//     }
//     read(URL){
//         return super.get(URL)
//     }
// }


// let api = apiC
// export {api}

// function read(URL){
//     return axios.get(URL)
// }

// function post(URL, data){
//     axios.post(URL, data) 
//     return read(URL)
// }

// export{read, post}

class API{
    constructor() {
        this.baseURL = `${process.env.VUE_APP_URL}`
    }

    async read(url){
        return await axios.get(this.baseURL+url)
        
    }
    
    async post(url, data){
        //console.log(this.baseURL+ url)
        let result = await axios.post(this.baseURL+url, data)
        console.log(result)
        return result 
    }
    async put(url, data){
        console.log(this.baseURL+url)
        return await axios.put(this.baseURL+url, data)
    }
    
}
let api = new API 
export{api}