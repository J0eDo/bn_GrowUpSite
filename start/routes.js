'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('welcome')
Route.get('/login/',"UserController.authorization")



/* 
const  LoginRequest= (login,password)=>{
    ///TO DO TRANSACTION IT EMULATION
    let user = USERS_BD_EMUL.filter(elem=> elem.login===login)[0] 
    if(user&&user.password===password){
        return user
    }else{
        return false
    } */
