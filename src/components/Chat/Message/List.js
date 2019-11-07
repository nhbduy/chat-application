import React, { useLayoutEffect, useRef } from 'react';

import Item from './Item';

function List({ user, msgList }) {
  const myRef = useRef(null);

  // auto scroll to bottom
  useLayoutEffect(() => {
    if (myRef) myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [msgList]);

  return (
    <div className='messages' ref={myRef}>
      <ul>
        {msgList.map(msg => (
          <div key={msg.id}>
            <Item user={user} data={msg} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
