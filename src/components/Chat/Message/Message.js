import React from 'react';

import List from './List';
import Input from './Input';

function Message({
  active,
  currentUser,
  userList,
  currentRoom,
  message,
  messageList,
  func
}) {
  return (
    <div className='content'>
      {active ? (
        <React.Fragment>
          <div className='contact-profile d-flex justify-content-between align-items-center pl-4 pr-4'>
            <p>{currentRoom.name}</p>
            <i className='fa fa-close' aria-hidden='true'></i>
          </div>

          <List
            currentUser={currentUser}
            userList={userList}
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
