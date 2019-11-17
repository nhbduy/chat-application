import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import socketio from 'socket.io-client';

import { SERVER_URL, SOCKET_MSG } from '../../config';

import Message from './Message/Message';

import './Chat.css';
import SidePanel from './SidePanel/SidePanel';

let socket;

function Chat({ location, history }) {
  const paramsURL = location.search;

  const [userData, setUserData] = useState({});
  const [userList, setUserList] = useState([]);
  const [roomData, setRoomData] = useState({});
  const [roomList, setRoomList] = useState([]);

  const [activeMessagePanel, setActiveMessagePanel] = useState(false);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  // handle user connect/disconnect
  useEffect(() => {
    const data = queryString.parse(paramsURL);

    // set current user and room name
    const { user = '', room = '' } = data;

    // check user is already online

    // if (user) setUserName(user);
    // if (room) setRoomName(room); // if user has an invatation link

    // call socket from server
    socket = socketio(SERVER_URL);

    // connect
    socket.emit('userConnect', user, data => {
      setUserData(data);

      socket.on('getOnlineUsers', data => setUserList(data));

      socket.on('getAvailableRooms', data => setRoomList(data));
    });

    return () => {
      socket.emit('userDisconnect', user);
      // disconnect and turn off socket
      socket.emit(SOCKET_MSG.disconnect);
      socket.disconnect();
    };
  }, [SERVER_URL, paramsURL]);

  // handle user send message
  useEffect(() => {
    socket.on(SOCKET_MSG.message, message => {
      setMessageList([...messageList, message]);
    });
  }, [messageList]);

  useEffect(() => {
    if (Object.keys(userData).length && Object.keys(roomData).length)
      socket.emit(SOCKET_MSG.join, { user: userData, room: roomData });
  }, [roomData]);

  function handleClickCreateRoom(event) {
    event.preventDefault();

    const room = window.prompt(
      'To create new room, please enter room name here'
    );

    if (room) {
      socket.emit(
        'createNewRoom',
        { user: userData, roomName: room, roomType: 2 },
        data => {
          setRoomData(data);
          setActiveMessagePanel(true);
        }
      );
    }
  }

  function handleClickJoinRoom(room) {
    if (room) {
      setRoomData(room);
      setActiveMessagePanel(true);
    }
  }

  function handleClickDisconnect(event) {
    event.preventDefault();

    const popup = window.confirm('Are you sure you want to disconnect?');
    if (popup) {
      history.push('/');
    }
  }

  function sendMessage(event) {
    //prevent browser reload the whole page when pressing key or clicking button
    event.preventDefault();

    if (message) {
      socket.emit(
        SOCKET_MSG.sendMessage,
        { user: userData, room: roomData, message },
        () => setMessage('')
      );
    }
  }

  function handleOnChangeMessage(event) {
    const { value = '' } = event.target;

    setMessage(value);
  }

  function handleOnKeyPressMessage(event) {
    const { key } = event;

    if (key === 'Enter') sendMessage(event);

    return null;
  }

  // TEST console.log
  // console.log(userData);
  // console.log(userData);
  // console.log(userList);

  return (
    <React.Fragment>
      <SidePanel
        currentUser={userData}
        userList={userList}
        currentRoom={roomData}
        roomList={roomList}
        func={{
          handleClickCreateRoom,
          handleClickJoinRoom,
          handleClickDisconnect
        }}
      />

      <Message
        active={activeMessagePanel}
        currentUser={userData}
        userList={userList}
        currentRoom={roomData}
        message={message}
        messageList={messageList}
        func={{ handleOnChangeMessage, handleOnKeyPressMessage, sendMessage }}
      />
    </React.Fragment>
  );
}

export default Chat;
