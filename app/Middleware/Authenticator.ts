import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Authenticator {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log('test')
    await next()
  }
}
