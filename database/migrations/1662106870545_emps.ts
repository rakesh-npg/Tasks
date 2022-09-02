import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'emps'

    public async up () {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.string("phone")
        table.string("name")
        table.integer("rollno")
      })
    }
     
  

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
