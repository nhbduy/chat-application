import React from 'react';

import List from './List';
import Input from './Input';

function copyToClipboard(url) {
  try {
    const textField = document.createElement('textarea');
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    const message = `Copied to clipboard! ${url}`;
    console.log(message, 'success');
  } catch (error) {
    const message = 'Cannot copy to clipboard. Please try again!';
    console.log(message);
  }
}

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

  function copyGroupLink(name) {
    const url = `${window.location.origin}?room=${encodeURI(name)}`;
    copyToClipboard(url);
  }

  return (
    <div className='content'>
      {Object.keys(currentRoom).length ? (
        <React.Fragment>
          <div className='contact-profile d-flex justify-content-between align-items-center pl-4 pr-4'>
            <i
              className='fa fa-share'
              aria-hidden='true'
              onClick={() => copyGroupLink(currentRoom.name)}></i>
            <p>{formattedName(currentRoom.room_type, currentRoom.name)}</p>
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
