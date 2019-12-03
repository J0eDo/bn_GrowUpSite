'use strict'
const USERS_BD_EMUL=[
    {
        id:"001",
        login:":admin",
        password:"123456",
        name:"Эдуард",
        sex:"men"
    },
    {
        id:"002",
        login:":user",
        password:"123456",
        name:"Winderton",
        sex:"women"
    }
]


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('welcome')
Route.get('/posts',"PostController.index")
Route.get('/login/:log/:password' ,function({params}){
     const res =LoginRequest(params.log,params.password)  
    return res
})




const  LoginRequest= (login,password)=>{
    ///TO DO TRANSACTION IT EMULATION
    let user = USERS_BD_EMUL.filter(elem=> elem.login===login)[0] 
    if(user&&user.password===password){
        return user
    }else{
        return false
    }
}