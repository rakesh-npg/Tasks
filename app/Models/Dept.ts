import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Dept extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public rollno: number 
  
  @column() 
  public dept: string
}
