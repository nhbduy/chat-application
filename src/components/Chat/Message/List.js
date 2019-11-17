import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import Item from './Item';

function List({ currentUser, userList, currentRoom, messageList }) {
  const myRef = useRef(null);

  // auto scroll to bottom
  useLayoutEffect(() => {
    if (myRef) myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [messageList]);

  return (
    <div className='messages' ref={myRef}>
      <ul>
        {messageList &&
          messageList
            .filter(m => m.room_id === currentRoom.id)
            .map(msg => (
              <div key={msg.id}>
                <Item
                  currentUser={currentUser}
                  userList={userList}
                  message={msg}
                />
              </div>
            ))}
      </ul>
    </div>
  );
}

export default List;
