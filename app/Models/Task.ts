import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Status from 'Contracts/Enums/status'
import User from './User'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public status_id: Status 

  @hasOne(() => User, {
    localKey: 'id'
  })
  public user: HasOne<typeof User>
}
