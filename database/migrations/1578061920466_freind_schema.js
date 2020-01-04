'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FreindSchema extends Schema {
  up () {
    this.create('freinds', (table) => {
      table.increments()
      table.integer("user_id").unsigned().references('users.id')
      table.integer('freind_id')
      table.string('status').defaultTo('unconfirmed')
      table.timestamps()
    })
  }

  down () {
    this.drop('freinds')
  }
}

module.exports = FreindSchema
