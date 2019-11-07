import React from 'react';

import { MSG_TYPE } from '../../../config';

function Item({ user, data }) {
  let isCurrentUserSent = false;

  const nameFormatted = user.trim().toLowerCase();

  if (data.user === nameFormatted) isCurrentUserSent = true;

  const contentAdminMsgDOM = data => {
    const { text, time } = data;

    return (
      <li className='admin'>
        <p>{text}</p>
        <span>{time}</span>
      </li>
    );
  };

  const contentUserMsgDOM = (avatar, data) => {
    const { user, text, time } = data;

    return (
      <li className={isCurrentUserSent ? 'sent' : 'received'}>
        {!isCurrentUserSent && <img src={avatar.src} alt={avatar.name} />}
        <div>
          <span className='name'>{isCurrentUserSent ? 'You' : user}</span>
          <p>{text}</p>
          <span>{time}</span>
        </div>
        {isCurrentUserSent && <img src={avatar.src} alt={avatar.name} />}
      </li>
    );
  };

  return data.type === MSG_TYPE.admin
    ? contentAdminMsgDOM(data)
    : contentUserMsgDOM({ src: 'img/avatar-male.png', name: 'Avatar' }, data);
}

export default Item;
