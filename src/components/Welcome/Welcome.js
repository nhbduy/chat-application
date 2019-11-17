import React, { useState, useRef } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { SERVER_URL } from '../../config';

function Welcome({ location, history }) {
  // check custom link (user and/or roomName)
  const paramsURL = location.search;
  const { room = '' } = queryString.parse(paramsURL);

  const [notification, setNotification] = useState(
    'Please check your username'
  );

  const userNameRef = useRef(null);

  function redirectToLink(name) {
    let link = '';
    if (name && room) link = `/chat?user=${name}&room=${room}`;
    else if (name) link = `/chat?user=${name}`;

    history.push(link);
  }

  function handleOnClickLink(event) {
    if (!userNameRef || !userNameRef.current || !userNameRef.current.value) {
      setNotification('Please type your username');
      return event.preventDefault();
    }

    fetch(`${SERVER_URL}/checkLogin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userNameRef.current.value
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200 && data.user.id) {
          console.log(data.message, 'log in to chat');
          setNotification('Username found');
          redirectToLink(data.user.name);
        } else if (data.status === 400)
          console.log(data.message, 'error to join, please try again');
      });

    return null;
  }

  function handleOnKeyPressInput(event) {
    const { key } = event;

    if (key === 'Enter') handleOnClickLink(event);

    return null;
  }

  return (
    <div className='h-100 d-flex justify-content-center flex-column p-5'>
      <h1 className='text-center'>Welcome</h1>
      <hr className='pt-4 pb-2 w-25 border-info' />
      <div>
        <div className='form-group d-flex flex-column'>
          {/* <label
            htmlFor='username'
            className='p-0 m-0 font-weight-bold align-self-center'>
            Username
          </label> */}
          <input
            ref={userNameRef}
            type='username'
            className='form-control'
            id='username'
            placeholder='Type your username...'
            onKeyPress={handleOnKeyPressInput}
          />
        </div>
        {room && (
          <div className='form-group d-flex flex-column align-items-center'>
            <label htmlFor='roomname' className='p-0 m-0 font-weight-bold'>
              Room
            </label>
            <input
              value={room}
              disabled
              type='text'
              className='form-control'
              id='roomname'
              placeholder='Join to room name...'
            />
          </div>
        )}
        <div className='text-center p-4 d-flex flex-column align-items-center'>
          {/* <div>{notification}</div> */}
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleOnClickLink}>
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
