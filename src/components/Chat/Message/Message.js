import React from 'react';

import List from './List';
import Input from './Input';

function Message({ user, msg, msgList, func }) {
  return (
    <div className='content'>
      <div className='contact-profile'>
        <img src='img/avatar-male.png' alt='' />
        <p>Harvey Specter</p>
      </div>

      <List user={user} msgList={msgList} />

      <Input msg={msg} func={func} />
    </div>
  );
}

export default Message;
