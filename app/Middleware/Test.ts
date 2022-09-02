import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { appKey } from 'Config/app'

export default class Test {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    //console.log('this is the middleware')
    if(appKey !=  request.header('appkey')){
      response.status(404).send('error')
    }
    await next()
  }
}
