'use strict'


const Users = use('App/Models/User')


class UserController {
    async authorization({request,respone}){
        const users = await Users.all()
        const all = await request.get()

        return  all
    }

}

module.exports = UserController
