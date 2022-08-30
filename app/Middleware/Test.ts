import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Test {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    console.log('this is the middleware')
    await next()
  }
}
/*
when will you come to college 
did you attend all exams 
*/