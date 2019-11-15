import React, { useState } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

function Welcome({ location }) {
  // check custom link (user and/or roomName)
  const paramsURL = location.search;
  const { user = '', room = '' } = queryString.parse(paramsURL);

  const [userName, setUserName] = useState(user);
  const [roomName, setRoomName] = useState(room);

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
    <div className='h-100 d-flex justify-content-center flex-column p-5'>
      <h1 className='text-center'>Welcome</h1>
      <hr className='p-4 w-25 border-info' />
      <div>
        <div className='form-group d-flex flex-column'>
          <label
            htmlFor='username'
            className='p-0 m-0 font-weight-bold align-self-center'>
            Username
          </label>
          <input
            value={userName}
            type='username'
            className='form-control'
            id='username'
            placeholder='Type your username...'
            onChange={handleOnChangeUsername}
          />
        </div>
        <div className='form-group d-flex flex-column'>
          <label
            htmlFor='roomname'
            className='p-0 m-0 font-weight-bold align-self-center'>
            Room
          </label>
          <input
            value={roomName}
            disabled={room}
            type='text'
            className='form-control'
            id='roomname'
            placeholder='Type room name...'
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
