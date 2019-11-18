import React from 'react';

import { MSG_TYPE } from '../../../config';

import moment from 'moment';

const TIME_FORMAT = 'DD-MM-YYYY HH:MM';

function Item({ currentUser, userList, message }) {
  const {
    id = 0,
    sender_id = 0,
    room_id = 0,
    content = '',
    created_at = '1975-01-01 00:00:00',
    seen_by = []
  } = message;

  let isCurrentUserSent = false;

  if (sender_id === currentUser.id) isCurrentUserSent = true;

  const contentAdminMsgDOM = () => {
    return (
      <li className='admin'>
        <p>{content}</p>
        <span>{moment(created_at).format(TIME_FORMAT)}</span>
      </li>
    );
  };

  const contentUserMsgDOM = avatar => {
    let senderName = '';
    const sender = userList.filter(u => u.id === sender_id)[0];
    if (sender) senderName = sender.name;

    return (
      <li className={isCurrentUserSent ? 'sent' : 'received'}>
        {!isCurrentUserSent && <img src={avatar.src} alt={avatar.name} />}
        <div>
          <span className='name'>{isCurrentUserSent ? 'You' : senderName}</span>
          <p>{content}</p>
          <span>{created_at}</span>
        </div>
        {isCurrentUserSent && <img src={avatar.src} alt={avatar.name} />}
      </li>
    );
  };

  return sender_id === MSG_TYPE.admin
    ? contentAdminMsgDOM()
    : contentUserMsgDOM({ src: 'img/avatar-male.png', name: 'Avatar' });
}

export default Item;
