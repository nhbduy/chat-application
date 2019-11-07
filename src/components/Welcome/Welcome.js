import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  function handleOnChangeUsername(event) {
    const { value = '' } = event.target;

    setUserName(value);
  }

  function handleOnChangeRoomName(event) {
    const { value = '' } = event.target;

    setRoomName(value);
  }

  function handleOnClickLink(event) {
    if (!userName || !roomName) return event.preventDefault();

    return null;
  }

  return (
    <div class='h-100 d-flex justify-content-center flex-column p-5'>
      <h1 className='p-3 text-center'>Welcome</h1>
      <div>
        <div className='form-group'>
          <input
            type='username'
            className='form-control'
            id='username'
            placeholder='Username'
            onChange={handleOnChangeUsername}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='roomName'
            placeholder='Room name'
            value={roomName}
            onChange={handleOnChangeRoomName}
          />
        </div>
        <div className='text-center'>
          <Link
            to={`/chat?user=${userName}&room=${roomName}`}
            onClick={handleOnClickLink}>
            <button type='submit' className='btn btn-primary'>
              Let's go
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
