import React from 'react';

function Groups({
  currentUser,
  currentRoom,
  roomList,
  notificationRoom,
  handleClickChooseRoom
}) {
  const filteredList = roomList;

  const notifCondition = room => {
    if (
      currentUser &&
      currentUser.id &&
      notificationRoom &&
      Object.keys(notificationRoom).length &&
      notificationRoom[currentUser.id]
    ) {
      return (
        Object.keys(notificationRoom).includes(currentUser.id) &&
        notificationRoom[currentUser.id].includes(room.id)
      );
    }

    return false;
  };

  return (
    <React.Fragment>
      <p className='tag'>Groups</p>
      <ul>
        {filteredList.map(item => (
          <li
            key={`room${item.id}`}
            className={`contact ${
              currentRoom.name === item.name ? 'active' : ''
            }`}
            onClick={() => handleClickChooseRoom(item)}>
            <div className='wrap d-flex align-items-center justify-content-between'>
              <div className='meta'>
                <p
                  className={`name ${notifCondition(item) ? 'text-bold' : ''}`}>
                  {item.name}
                </p>
              </div>
              {notifCondition(item) && (
                <div className='contact-status online'></div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Groups;
