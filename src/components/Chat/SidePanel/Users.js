import React from 'react';

function Users({ currentUser, userList }) {
  const filteredList = userList.filter(u => u.name !== currentUser.name);
  return (
    <React.Fragment>
      <ul>
        {filteredList.map(item => (
          <li key={item.id} className='contact'>
            {/* active */}
            <div className='wrap'>
              <span className='contact-status online'></span>
              <img src='img/avatar-male.png' alt='' />
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

export default Users;
