'use strict'

class PostController {
    async index(){
        return (
        `<h1>Привет из пост контроллера</h1>
         <p>JSX нервно курит в сторонке</p>`)
        
    }
    
}

module.exports = PostController
