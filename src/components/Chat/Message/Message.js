import React from 'react';

import List from './List';
import Input from './Input';

function Message({
  currentUser,
  userList,
  currentRoom,
  message,
  messageList,
  func
}) {
  const { handleClickLeaveRoom } = func;

  function formattedName(type, name) {
    // name: CurrentUserAnotherUser
    if (type === 1) return `${name.replace(currentUser.name, '')}`;
    else if (type === 2) return `${name}`;
  }

  return (
    <div className='content'>
      {Object.keys(currentRoom).length ? (
        <React.Fragment>
          <div className='contact-profile d-flex justify-content-between align-items-center pl-4 pr-4'>
            <p>{formattedName(currentRoom.type, currentRoom.name)}</p>
            <i
              className='fa fa-close'
              aria-hidden='true'
              onClick={() => handleClickLeaveRoom(currentRoom)}></i>
          </div>

          <List
            currentUser={currentUser}
            userList={userList}
            currentRoom={currentRoom}
            messageList={messageList}
          />

          <Input message={message} func={func} />
        </React.Fragment>
      ) : (
        <span className='h-100 d-flex justify-content-center align-items-center'>
          Message Chat
        </span>
      )}
    </div>
  );
}

export default Message;
