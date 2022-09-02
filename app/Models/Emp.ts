import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Emp extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public phone: string 

  @column() 
  public name: string

  @column() 
  public rollno: number  
}
