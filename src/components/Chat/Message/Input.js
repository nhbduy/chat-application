import React from 'react';

function Input({ msg, func }) {
  const { handleOnChangeMessage, handleOnKeyPressMessage, sendMessage } = func;

  return (
    <div className='message-input'>
      <div className='wrap'>
        <input
          type='text'
          placeholder='Write your message...'
          value={msg}
          onChange={handleOnChangeMessage}
          onKeyPress={handleOnKeyPressMessage}
        />
        <button
          className='submit'
          onClick={() => {
            alert('Go');
          }}>
          <i className='fa fa-paper-plane' aria-hidden='true'></i>
        </button>
      </div>
    </div>
  );
}

export default Input;
