'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('login', 80).notNullable().unique()
      table.string('name', 254).unsigned().notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('isBanned').defaultTo(false)
      table.boolean('online').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
