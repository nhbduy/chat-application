import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import socketio from 'socket.io-client';

import { SERVER_URL, SOCKET_MSG } from '../../config';

import Message from './Message/Message';

import './Chat.css';
import SidePanel from './SidePanel/SidePanel';

let socket;

function Chat({ location }) {
  const paramsURL = location.search;

  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [msg, setMsg] = useState('');
  const [msgList, setMsgList] = useState([]);
  const [userList, setUserList] = useState([]);

  // handle user connect/disconnect
  useEffect(() => {
    const data = queryString.parse(paramsURL);

    // set current user and room name
    const { user, room } = data;
    setUserName(user);
    setRoomName(room);

    // call socket from server
    socket = socketio(SERVER_URL);

    // broadcasting the message
    socket.emit(SOCKET_MSG.join, { user, room }, () => {});

    // get online users list
    socket.emit(SOCKET_MSG.onlineUsers, {}, list => setUserList(list));

    return () => {
      // disconnect and turn off socket
      socket.emit(SOCKET_MSG.disconnect);
      socket.disconnect();
    };
  }, [SERVER_URL, paramsURL]);

  // handle user send message
  useEffect(() => {
    socket.on(SOCKET_MSG.message, message => {
      setMsgList([...msgList, message]);
    });
  }, [msgList]);

  function sendMessage(event) {
    //prevent browser reload the whole page when pressing key or clicking button
    event.preventDefault();

    if (msg) {
      socket.emit(SOCKET_MSG.sendMessage, msg, () => setMsg(''));
    }
  }

  function handleOnChangeMessage(event) {
    const { value = '' } = event.target;

    setMsg(value);
  }

  function handleOnKeyPressMessage(event) {
    const { key } = event;

    if (key === 'Enter') sendMessage(event);

    return null;
  }

  // TEST console.log
  // console.log(msg, msgList);

  return (
    <React.Fragment>
      <SidePanel currentUser={userName} userList={userList} />

      <Message
        user={userName}
        msg={msg}
        msgList={msgList}
        func={{ handleOnChangeMessage, handleOnKeyPressMessage, sendMessage }}
      />
    </React.Fragment>
  );
}

export default Chat;
