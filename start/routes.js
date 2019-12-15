'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('welcome')
Route.get('/registration', "UserController.registration").middleware('guest')
Route.get('/login', "UserController.login").middleware('guest')
Route.get('/userData', "UserController.info").middleware('auth')
Route.get('/exit', "UserController.exit").middleware('guest')
Route.get('/sendMessage', "ChatController.sendMessage").middleware('auth')


