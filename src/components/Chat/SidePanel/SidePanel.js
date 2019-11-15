import React, { useState } from 'react';
import Conversations from './Conversations';
import Users from './Users';

const ACTIVE_TAB = {
  conversations: 1,
  users: 2
};

function SidePanel({ currentUser, userList }) {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.conversations);
  return (
    <div id='sidepanel'>
      <div id='profile'>
        <div className='wrap d-flex flex-row justify-content-between'>
          <div>
            <img
              id='profile-img'
              src='img/avatar-male.png'
              className='online'
              alt=''
            />
            <p>{currentUser}</p>
          </div>
          <i className='fa fa-plus expand-button pr-3' aria-hidden='true'></i>
        </div>
      </div>
      {/* <div id='search'>
          <label for=''>
            <i className='fa fa-search' aria-hidden='true'></i>
          </label>
          <input type='text' placeholder='Search...' />
        </div> */}
      <div id='conversations'>
        {activeTab === ACTIVE_TAB.conversations ? (
          <Conversations />
        ) : (
          <Users list={userList} />
        )}
      </div>

      <div id='bottom-bar'>
        <button
          id='conversations'
          className={activeTab === ACTIVE_TAB.conversations ? 'active' : ''}
          onClick={() => setActiveTab(ACTIVE_TAB.conversations)}>
          <i className='fa fa-exchange fa-fw' aria-hidden='true'></i>
          <span>Conversations</span>
        </button>
        <button
          id='users'
          className={activeTab === ACTIVE_TAB.users ? 'active' : ''}
          onClick={() => setActiveTab(ACTIVE_TAB.users)}>
          <i className='fa fa-users fa-fw' aria-hidden='true'></i>
          <span>Users</span>
        </button>
      </div>
    </div>
  );
}

export default SidePanel;
