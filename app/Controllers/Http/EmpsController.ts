import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Dept from 'App/Models/Dept'
import Emp from 'App/Models/Emp'
import EmpValidator from 'App/Validators/EmpValidator'

export default class EmpsController {
    public async create({request}:HttpContextContract){
        
        const payload = await request.validate(EmpValidator)
        const emp = new Emp() 
        emp.phone = payload.phone
        emp.name = payload.name 
        emp.rollno = payload.rollno 
        await emp.save() 
        return Emp.all() 
    }
    public async read({request}:HttpContextContract){
        return Emp.all() 
    }

    public async read_id({request}:HttpContextContract){
        //console.log('test')
        console.log(request.params().id)
        return Emp.findByOrFail("id", request.params().id)
    }

    public async update({request}:HttpContextContract){
        //const payload 
        const payload = await request.validate(EmpValidator)
        const emp = await Emp.findByOrFail("rollno", payload.rollno)
        emp.phone = payload.phone
        emp.name = payload.name
        await emp.save() 

    }

    public async del({request}:HttpContextContract){
        const empid = request.params().id 
        console.log(empid)
        const emp = await Emp.findByOrFail("rollno", request.params().id)
        await emp.delete() 
        return Emp.all() 
    }

    public async getDept({request}:HttpContextContract){
        return await Database
        .from('emps')
        .join('depts', 'emps.id', 'depts.id')
        .select('emps.name')
        .select('depts.dept')
        .select('emps.phone')
        .select('emps.id')
        .where('emps.id', request.params().id)
        // const emprollno = request.params().id
        // const empname = await Emp.findByOrFail("rollno", emprollno) 
        // const empdept = await Dept.findByOrFail("rollno", emprollno)
        // return [empname.name, empdept.dept]

    }

    public async getEmps({request}:HttpContextContract){
        const department =  request.input('dept')
        //console.log(department)
        return await Database
        .from('depts')
        .join('emps', 'depts.id', 'emps.id')
        .orderBy('depts.dept')
        .select('emps.name')
        .select('emps.phone')
        .select('depts.dept')
        .where('depts.dept' ,'like', department)
    }

    public async getSearch({request}:HttpContextContract){
        return await Database.rawQuery('select * from emps where ? in (name, phone, id)', ["James"])
    }

}
