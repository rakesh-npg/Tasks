// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CalcsController {
    public async add({request}){
        const num1: number = request.input("num1")
        const num2: number = request.input("num2")
        const sym: number = request.input("sym")
        // let num3: number = num1 + num2
        switch(sym) {
            case 1: 
            return num1 + num2
            
            case 2: 
            return num1 - num2

            case 3: 
            return num1 * num2

            case 4: 
            return num1 / num2

            default: 
            break 
        }
    }
     public async test(){
        let num1:number = 1 
        let num2:number = 2
        return {"add" : num1 + num2, 
        "sub" : num1 - num2, 
        "mul" :num1 * num2,
        "div" : num1 / num2}
     }

}