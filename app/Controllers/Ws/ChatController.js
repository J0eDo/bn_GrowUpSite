'use strict'

class ChatController {
  constructor ({ socket, request ,auth}) {
    this.socket = socket
    this.request = request
    this.auth = auth
  }
  onMessage (message) {
    this.socket.broadcastToAll('message', message)
  }

  onPush(action){
    this.socket.broadcastToAll('push', action) 
  }

}

module.exports = ChatController
