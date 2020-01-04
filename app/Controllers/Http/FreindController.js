'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Users = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Freind = use('App/Models/Freind')
const Database = use('Database')

/**
 * Resourceful controller for interacting with freinds
 */
class FreindController {
  /**
   * Show a list of all freinds.
   * GET freinds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response, auth }) {
    let user = await auth.getUser()
    let freinds = await user.freinds().select('freind_id').fetch()
    freinds = freinds.toJSON()

    let freindsID = []
    freinds.forEach(element => {
      freindsID.push(element['freind_id']);
    });

/*     const users = await Database
      .from('users')
      .whereIn('id', freindsID)
      */

      const users = await Users .query()
      .whereIn('id', freindsID)
      .with('profile')
      .fetch()

    response.json({ users })
  }

  async create({ request, response, view, auth }) {
    const { friendID } = request.all()
    let friend = await new Freind()
    let user = await auth.getUser()
    friend.freind_id = friendID
    await friend.save()
    await friend.user().associate(user)
  }

  /**
   * Create/save a new freind.
   * POST freinds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single freind.
   * GET freinds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing freind.
   * GET freinds/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update freind details.
   * PUT or PATCH freinds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a freind with id.
   * DELETE freinds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = FreindController
