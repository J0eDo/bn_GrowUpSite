'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
    users() {
        return this.belongsToMany('App/Models/User')
    }
}

module.exports = Message
