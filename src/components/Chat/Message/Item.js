import React from 'react';

import { MSG_TYPE } from '../../../config';

function Item({ currentUser, userList, message }) {
  let isCurrentUserSent = false;

  if (message.sender === currentUser.id) isCurrentUserSent = true;

  const contentAdminMsgDOM = data => {
    const { content, time } = data;

    return (
      <li className='admin'>
        <p>{content}</p>
        <span>{time}</span>
      </li>
    );
  };

  const contentUserMsgDOM = (avatar, data) => {
    const { content, time } = data;

    const { name = '' } = userList.filter(u => u.id === message.sender)[0];

    return (
      <li className={isCurrentUserSent ? 'sent' : 'received'}>
        {!isCurrentUserSent && <img src={avatar.src} alt={avatar.name} />}
        <div>
          <span className='name'>{isCurrentUserSent ? 'You' : name}</span>
          <p>{content}</p>
          <span>{time}</span>
        </div>
        {isCurrentUserSent && <img src={avatar.src} alt={avatar.name} />}
      </li>
    );
  };

  return message.type === MSG_TYPE.admin
    ? contentAdminMsgDOM(message)
    : contentUserMsgDOM(
        { src: 'img/avatar-male.png', name: 'Avatar' },
        message
      );
}

export default Item;
