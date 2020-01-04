'use strict'

const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Database = use('Database')
const { validate } = use('Validator')

class UserController {

  async registration({ request, auth, response }) {
    const { login, password, name } = request.all()
    const rules = {
      login: 'unique:users|required|string|min:5|max:10',
      password: 'required|string|min:6|max:10',
      name: 'unique:users|required|string|min:4|max:10'
    }

    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      return validation.messages()
    }

    let user = new User()
    user.login = login;
    user.password = password;
    user.name = name;
    await user.save();
    await user.profile().save(await new Profile())

    let accessToken = await auth.generate(user)
    return response.json({ accessToken })
  }


  async login({ request, auth }) {
    const { login, password } = request.all()
    return auth.attempt(login, password)

  }

  async getData({ auth, response }) {
    let user = await auth.getUser()
    let profile = await user.profile().fetch()
    return response.json({ user, profile })
  }

  async editProfile({ auth, request, response }) {
    const { avatar } = request.all()
    let user = await auth.getUser()
    await user
      .profile()
      .select("*")
      .update({ avatar })
    const profileUpdated = await user.profile().fetch()
    return response.json({ profileUpdated })
  }

  async exit({ request, auth, response, session }) {
    const { token } = request.all()
    await auth.check()
    await auth.revokeTokens([token], true)
  }

  async getUsers({ response }) {
   /*      const users =await Database.select('id','name').table('users')/* .with('profile') */ 
    /*   const usersWithProfile = await users.profile().fetch() */
    let users = await User.query()
    .select('name','id')
    .with('profile')
    .fetch()
    response.json({users})
  }

}

module.exports = UserController
