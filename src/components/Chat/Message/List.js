import React from 'react';

import { MSG_TYPE } from '../../../config';

function List({ msgList }) {
  const contentAdminMsgDOM = (message, time) => (
    <li className='admin'>
      <p>{message}</p>
      <span>{time}</span>
    </li>
  );

  const contentUserMsgDOM = (type, avatar, message, time) => (
    <li className={type === MSG_TYPE.sent ? 'sent' : 'replies'}>
      {type === MSG_TYPE.sent && <img src={avatar.src} alt={avatar.name} />}
      <div>
        <p>{message}</p>
        <span>{time}</span>
      </div>
      {type === MSG_TYPE.replies && <img src={avatar.src} alt={avatar.name} />}
    </li>
  );

  return (
    <div className='messages'>
      <ul>
        {msgList.map(item =>
          item.type === MSG_TYPE.admin
            ? contentAdminMsgDOM(item.text, item.time)
            : contentUserMsgDOM(
                item.type,
                { src: 'img/avatar-male.png', name: 'Avatar' },
                item.text,
                item.time
              )
        )}
      </ul>
    </div>
  );
}

export default List;

{
  /* contentUserMsgDOM(
                MSG_TYPE_REPLIES,
                { src: 'img/avatar-male.png', name: 'Avatar' },
                'Test sdfdsfd sdfsdf',
                'Today'
              ) */
}
