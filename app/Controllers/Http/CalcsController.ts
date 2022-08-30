import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'

export default class CalcsController {
    public async add({request}:HttpContextContract){
        
        const dataSchema = schema.create({
            num1: schema.number() ,
            num2: schema.number(), 
            sym : schema.number()
        })
        try{
        const payload = await request.validate({schema: dataSchema})
        console.log('schema checked')
        const num1: number = payload.num1
        const num2: number = payload.num2
        const sym: number = payload.sym
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
        catch (error) {
            console.log('wrong data')

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