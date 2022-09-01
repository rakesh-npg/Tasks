import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Task from 'App/Models/Task'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CalcsController {
    public async testing({request}:HttpContextContract){
        const ins = new User() 
        const qu = new Task() 
        ins.id = 3
        ins.username = 'test3' 
        ins.email = 'test3' 
        ins.password = 'test3'

        qu.id = 3
        qu.status_id = 1

        await ins.save() 
        await qu.save() 
        console.log('done')


        
    }


    public async meh({request}:HttpContextContract){
        const value = await Database.from('users')
        .join('tasks', 'users.id', '=','tasks.id')
        .select('users.*')
        .select('tasks.*')

        console.log(value)
    }

     
     }


