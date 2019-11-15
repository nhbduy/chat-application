import React from 'react';

function Users({ list }) {
  return (
    <React.Fragment>
      <ul>
        {list.map(item => (
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
