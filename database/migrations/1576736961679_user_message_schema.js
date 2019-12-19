'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserMessageSchema extends Schema {
  up () {
    this.create('user_message', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('users.id')
      table.integer('message_id').unsigned().references('messages.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_message')
  }
}

module.exports = UserMessageSchema
