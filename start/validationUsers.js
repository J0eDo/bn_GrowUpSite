const USERS_BD_EMUL=[
    {
        id:"001",
        login:"admin",
        password:"123456",
        name:"Эдуард",
        sex:"men"
    },
    {
        id:"002",
        login:"user",
        password:"123456",
        name:"Winderton",
        sex:"women"
    }
]

export const  LoginRequest= (login,password)=>{
    ///TO DO TRANSACTION IT EMULATION
    const user = USERS_BD_EMUL.filter(user.login===login)
    if(user&user.password===password){
        return "GOOOD"
    }else{
        return "BAAD"
    }
}