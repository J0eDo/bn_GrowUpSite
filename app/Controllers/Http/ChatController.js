'use strict'

const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Message = use('App/Models/Message')



class ChatController {
    async Test({ response }) {
        const user = await User.find(1)
        const profile = new Profile();
        await user.profile().save(profile)
        let userprof  = await user.profile().fetch()
        return response.json({ userprof })
    }
    async Test2({ response }) {
        const user = await User.find(1)
        const data = {
            idrecipient:21,
            body:'text'
        }
        const message = Message.create(data);
       /*  await user.messages().attach(message) */
        await user.messages().save(message)
    }
}

module.exports = ChatController
