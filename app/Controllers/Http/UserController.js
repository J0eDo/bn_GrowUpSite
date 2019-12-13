'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class UserController {
  async registration({ request, auth, response }) {
    const { login, password, name } = request.all()
    const rules = {
      login: 'required|string|min:5|max:10',
      password: 'required|string|min:6|max:10',
      name: 'required|string|min:4|max:10'
    }

    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      return validation.messages()
    }
    let logiNotUnique = await User.findBy('login', login) === ({})
    let nameNotUnique = await User.findBy('name', name) === ({})

    if (logiNotUnique) {
      return response.json([{ field: "login", validation: "notunique" }]) 
    }

    if (nameNotUnique) {
      return response.json({ field: "name", validation: "notunique" })
    }



    let user = new User()
    user.login = login;
    user.password = password;
    user.name = name;
    await user.save();

    let accessToken = await auth.generate(user)
    return response.json({ accessToken })
  }


  async login({ request, auth, response }) {
    const { login, password } = request.all()
    return auth.attempt(login, password)

  }

  async info({ request, auth, response }) {
    let user = await auth.getUser()
    return response.json({ user })
  }

  async exit({ request, auth, response, session }) {
    const {token} = request.all()
    await auth.check()
    await auth.revokeTokens([token],true)
  }

}

module.exports = UserController
