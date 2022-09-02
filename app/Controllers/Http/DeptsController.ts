import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dept from 'App/Models/Dept'
import DeptValidator from 'App/Validators/DeptValidator'

export default class DeptsController {
    public async create({request}:HttpContextContract){
        
        const payload = await request.validate(DeptValidator)
        const dept = new Dept() 
        dept.rollno = payload.rollno
        dept.dept = payload.dept 
        await dept.save() 
        return Dept.all() 
    }
    public async read({request}:HttpContextContract){
        return Dept.all() 
    }

    public async read_id({request}:HttpContextContract){
        console.log('test')
        console.log(request.routeParams.id)
        return Dept.findByOrFail("rollno", request.routeParams.id)
    }

    public async update({request}:HttpContextContract){
        //const payload 
        const payload = await request.validate(DeptValidator)
        const dept = await Dept.findByOrFail("rollno", payload.rollno)
        dept.rollno = payload.rollno
        dept.dept = payload.dept 
        await dept.save() 
        return Dept.all() 

    }

    public async del({request}:HttpContextContract){
        const empid = request.routeParams.id 
        console.log(empid)
        const dept = await Dept.findByOrFail("rollno", request.routeParams.id)
        await dept.delete() 
        return Dept.all() 
    }

    public async createMany(){
        const usre = await Dept.createMany([
            {
                rollno: 1, 
                dept: 'HR'
            }, 
            {
                rollno: 2, 
                dept: 'HR'
            }, 
            {
                rollno: 3, 
                dept: 'Dev'
            }, 
            {
                rollno: 4, 
                dept: 'Intern'
            }, 
            {
                rollno: 5, 
                dept: 'Dev'
            }, 
            {
                rollno: 6, 
                dept: 'Intern'
            }, 
        ])
        return Dept.all() 
    }

}
