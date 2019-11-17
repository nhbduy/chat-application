import React from 'react';

function Conversations({ currentRoom, roomList, handleClickJoinRoom }) {
  const filteredList = roomList;

  return (
    <React.Fragment>
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
        {/* <li className='contact'>
          <div className='wrap'>
            <span className='contact-status online'></span>
            <img src='img/avatar-male.png' alt='' />
            <div className='meta'>
              <p className='name'>Louis Litt</p>
              <p className='preview'>You just got LITT up, Mike.</p>
            </div>
          </div>
        </li>
        <li className='contact active'>
          <div className='wrap'>
            <span className='contact-status busy'></span>
            <img src='img/avatar-male.png' alt='' />
            <div className='meta'>
              <p className='name'>Harvey Specter</p>
              <p className='preview'>
                Wrong. You take the gun, or you pull out a bigger one. Or, you
                call their bluff. Or, you do any one of a hundred and forty six
                other things.
              </p>
            </div>
          </div>
        </li>
        <li className='contact'>
          <div className='wrap'>
            <span className='contact-status away'></span>
            <img src='img/avatar-male.png' alt='' />
            <div className='meta'>
              <p className='name'>Rachel Zane</p>
              <p className='preview'>
                I was thinking that we could have chicken tonight, sounds good?
              </p>
            </div>
          </div>
        </li> */}
      </ul>
    </React.Fragment>
  );
}

export default Conversations;
