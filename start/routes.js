'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.get('/registration',  "UserController.registration").middleware('guest')
Route.get('/login',         "UserController.login").middleware('guest')
Route.get('/userData',      "UserController.getData").middleware('auth')
Route.get('/setUserSetting',"UserController.info").middleware('auth')
Route.get('/editProfile',   "UserController.editProfile").middleware('auth')
Route.get('/exit',          "UserController.exit").middleware('auth')

//Contact panel
Route.get('/addFriend',     "FreindController.create").middleware(['auth'])
Route.get('/getFriend',     "FreindController.index").middleware(['auth'])
Route.get('/getUsers',      "UserController.getUsers").middleware(['auth'])

