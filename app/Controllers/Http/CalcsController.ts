import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CalcsController {
    public async add({request}:HttpContextContract){
        
        const dataSchema = schema.create({
            num1: schema.number() ,
            num2: schema.number(), 
            sym : schema.number()
        })
        try{
        const payload = await request.validate({schema: dataSchema})
        console.log('schema')
        const num1: number = payload.num1
        const num2: number = payload.num2
        const sym: number = payload.sym
        const user = new User() 

        user.name = 'test' 
        user.email = 'test@test.com'
        const user1=new User()
        user1.name='karthik'
        user1.email='karthik@.com'
        await user1.save()
        await user.save() 
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

     public async query() {
        
        const user = await User.all() 
        console.log(user) 
        return user

     }

     public async update() {
        const user = await User.findByOrFail('name', 'test')
        user.email = 'test1@tet1.com'
        await user.save() 
        return await User.all() 
     }

     public async delete({request}: HttpContextContract) {
        const reqSchema = schema.create({
            id: schema.number()
        })

        const payload = await request.validate({schema: reqSchema})
        const user = await User.findByOrFail('id', payload.id)
        await user.delete() 
        return await User.all() 
        }

     }

