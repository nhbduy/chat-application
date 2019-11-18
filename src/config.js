const SERVER_MODE = 2; // 1-DEV, 2-PROD

export const SERVER_URL = (() => {
  if (SERVER_MODE === 1) return 'http://localhost:5000';
  if (SERVER_MODE === 2)
    return 'https://nhbduy-chat-application-server.herokuapp.com';
})();

export const SOCKET_MSG = {
  connection: 'connection',
  disconnect: 'disconnect',
  setOnline: 'setOnline',
  join: 'join',
  leave: 'leave',
  message: 'message',
  sendMessage: 'sendMessage',
  roomData: 'roomData',
  onlineUsers: 'onlineUsers'
};

export const MSG_TYPE = {
  admin: 1,
  sent: 2,
  received: 3
};
