public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empID')
      table.string('dept')
    })
  }


  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("empID")
      table.string("phone")
      table.string("name")
    })
  }


  // import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Dept from "App/Models/Dept"
import Database from "@ioc:Adonis/Lucid/Database"

export default class DeptsController {


    public async create({request}:HttpContextContract){
        
        await Database.insertQuery().table('depts').insert({
            empID: 1,
            dept: 'test'
        })

        // const dept = new Dept() 
        // dept.empID = 10 //request.requestBody.ID
        // dept.dept = "test" //request.requestBody.name  
        // await dept.save() 
    }

    public async read(){
        return Dept.all() 
    }

    public async update({request}:HttpContextContract){
        const dept = await Dept.findByOrFail("empID", request.requestBody.ID)
        dept.dept = request.requestBody.dept
        await dept.save() 

    }

    public async del({request}:HttpContextContract){
        const dept = await Dept.findByOrFail("empID", request.ID)
        await dept.delete() 
        
    }

}

import { HttpContext } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employ from 'App/Models/Employ'
import Database from '@ioc:Adonis/Lucid/Database'

export default class EmploysController {

    public async create({request}:HttpContextContract){
        
        await Database.insertQuery().table('employs').insert({
            empID: 1, 
            phone: "0009",
            name: "qq"
        })

        // const emp = new Employ() 
        // console.log(request.requestBody)
        // emp.empID = 1 
        // emp.phone = "90"
        // emp.name = "test"
        // // emp.empID = request.requestBody.ID
        // // emp.phone = request.requestBody.phone 
        // // emp.name = request.requestBody.name 
        // //console.log('done')
        //await emp.save() 
    }

    public async read(){
        return Employ.all() 
    }

    public async update({request}:HttpContextContract){
        const emp = await Employ.findByOrFail("empID", request.requestBody.ID)
        emp.phone = request.requestBody.phone 
        emp.name = request.name 
        await emp.save() 

    }

    public async del({request}:HttpContextContract){
        const emp = await Employ.findByOrFail("empID", request.ID)
        await emp.delete() 

    }




}


