import React from 'react';

function Input({ message, func }) {
  const { handleOnChangeMessage, handleOnKeyPressMessage, sendMessage } = func;

  return (
    <div className='message-input'>
      <div className='wrap'>
        <input
          type='text'
          placeholder='Write your message...'
          value={message}
          onChange={handleOnChangeMessage}
          onKeyPress={handleOnKeyPressMessage}
        />
        <button className='submit' onClick={sendMessage}>
          <i className='fa fa-paper-plane' aria-hidden='true'></i>
        </button>
      </div>
    </div>
  );
}

export default Input;
