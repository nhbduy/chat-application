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

  const [conversationList, setConversationList] = useState([]);

  const [message, setMessage] = useState(''); // messsage from input
  const [messageList, setMessageList] = useState([]); // message list from socket

  const [joindedRooms, setJoindedRooms] = useState([]); // joined room list
  const [notificationRoom, setNotificationRoom] = useState({});

  // handle user connect/disconnect
  useEffect(() => {
    const data = queryString.parse(paramsURL);

    // set current user and room name
    const { user = '', room = '' } = data;
    // call socket from server
    socket = socketio(SERVER_URL);

    // connect
    socket.emit(
      'userConnect',
      { userName: user, roomName: room },
      ({ userRes, roomRes }) => {
        if (userRes) setUserData(userRes);

        // if user has invitation link
        if (roomRes) setRoomData(roomRes);

        socket.on('getOnlineUsers', data => setUserList(data));

        socket.on('getAvailableRooms', data => setRoomList(data));
      }
    );

    return () => handleSocketDisconnect(user);
  }, [SERVER_URL, paramsURL]);

  // handle user send message
  useEffect(() => {
    socket.on(SOCKET_MSG.message, list => setMessageList(list));
  }, [messageList]);

  // handle user notification
  useEffect(() => {
    socket.on('notification', ({ user, room }) => {
      // Structure: {senderId: [roomId1, roomId2, ...]}
      const newObj = {
        ...notificationRoom,
        [user.id]:
          notificationRoom[user.id] &&
          !notificationRoom[user.id].includes(room.id)
            ? [...notificationRoom[user.id], room.id]
            : [room.id]
      };

      setNotificationRoom(newObj);
    });
  }, [messageList]);

  // handle user join room
  useEffect(() => {
    if (Object.keys(userData).length && Object.keys(roomData).length) {
      // TODO: improve switch channels
      // if (joindedRooms.includes(roomData.id)) handleSwitchRoom(roomData);
      // else handleSocketJoinRoom(userData, roomData);

      handleSocketJoinRoom(userData, roomData);
    }
  }, [roomData]);

  function handleSocketJoinRoom(user, room) {
    socket.emit(SOCKET_MSG.join, { user, room }, room => {
      setJoindedRooms([...joindedRooms, room.id]);
      // setRoomData(room);
    });
  }

  // function handleSwitchRoom(room) {
  //   console.log(room.name, 'switched');
  // }

  function handleClickChooseRoom(room) {
    if (room) {
      setRoomData(room);

      // reset notification when click on room notified
      if (
        notificationRoom &&
        notificationRoom.room &&
        room.name === notificationRoom.room.name
      ) {
        const index = notificationRoom[userData.id].indexOf(room.id);
        if (index > -1) {
          notificationRoom[userData.id].splice(index, 1);
        }

        const newObj = {
          ...notificationRoom,
          [userData.id]: [...notificationRoom[userData.id]]
        };

        setNotificationRoom(newObj);
      }
    }
  }

  function handleSocketDisconnect(user) {
    socket.emit('userDisconnect', user);
    // disconnect and turn off socket
    socket.emit(SOCKET_MSG.disconnect);
    socket.disconnect();
  }

  function handleClickCreateRoom(event) {
    event.preventDefault();

    const room = window.prompt(
      'To create new room, please enter room name here'
    );

    if (room) {
      socket.emit(
        'createNewRoom',
        { user: userData, roomName: room, roomType: 2 },
        data => setRoomData(data)
      );
    }
  }

  function handleClickJoinP2P(user) {
    // if (user) {
    //   socket.emit(
    //     'createNewRoom',
    //     {
    //       user: userData,
    //       roomName: `${userData.name}-${user.name}`, // UserAUserB
    //       roomType: 1
    //     },
    //     data => {
    //       setRoomData(data);
    //       setActiveMessagePanel(true);
    //     }
    //   );
    // }
    alert('TODO: P2P feature is coming soon');
  }

  function handleClickLeaveRoom(room) {
    if (room) {
      socket.emit(SOCKET_MSG.leave, { user: userData, room }, room => {
        setRoomData({});
      });
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

  return (
    <React.Fragment>
      <SidePanel
        currentUser={userData}
        userList={userList}
        currentRoom={roomData}
        roomList={roomList}
        notificationRoom={notificationRoom}
        conversationList={conversationList}
        func={{
          handleClickCreateRoom,
          handleClickJoinP2P,
          handleClickChooseRoom,
          handleClickDisconnect
        }}
      />

      <Message
        currentUser={userData}
        userList={userList}
        currentRoom={roomData}
        message={message}
        messageList={messageList}
        func={{
          handleClickLeaveRoom,
          handleOnChangeMessage,
          handleOnKeyPressMessage,
          sendMessage
        }}
      />
    </React.Fragment>
  );
}

export default Chat;
