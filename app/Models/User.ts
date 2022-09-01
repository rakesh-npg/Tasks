import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Task from './Task'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public username: string 

  @column() 
  public email: string 

  @column() 
  public password: string 

  @column() 
  public remember_me_token?: string

  @column.dateTime({ autoCreate: true })  
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Task, {
    foreignKey: 'id'
  })
  public tasks: HasOne<typeof Task> 
}
