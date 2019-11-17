import React from 'react';

function Groups({ currentRoom, roomList, handleClickJoinRoom }) {
  const filteredList = roomList;

  return (
    <React.Fragment>
      <p className='tag'>Groups</p>
      <ul>
        {filteredList.map(item => (
          <li
            key={item.id}
            className={`contact ${
              currentRoom.name === item.name ? 'active' : ''
            }`}
            onClick={() => handleClickJoinRoom(item)}>
            <div className='wrap'>
              <div className='meta'>
                <p className='name'>{item.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Groups;
