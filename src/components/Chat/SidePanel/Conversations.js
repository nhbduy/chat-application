import React from 'react';

function Conversations({
  currentUser,
  currentRoom,
  conversationList,
  handleClickChooseRoom
}) {
  const filteredList = conversationList;

  function formattedName(type, name) {
    // name: CurrentUserAnotherUser
    if (type === 1) return `P2P: ${name.replace(currentUser.name, '')}`;
    else if (type === 2) return `Group: ${name}`;
  }

  return (
    <React.Fragment>
      <ul>
        {filteredList.map(item => (
          <li
            key={item.id}
            className={`contact ${
              currentRoom.name === item.name ? 'active' : ''
            }`}
            onClick={() => handleClickChooseRoom(item)}>
            <div className='wrap'>
              <div className='meta'>
                <p className='name'>{formattedName(item.type, item.name)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Conversations;
