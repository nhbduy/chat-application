import React from 'react';

function SidePanel(props) {
  return (
    <div id='sidepanel'>
      <div id='profile'>
        <div className='wrap'>
          <img
            id='profile-img'
            src='img/avatar-male.png'
            className='online'
            alt=''
          />
          <p>User</p>
          {/* <i
              className='fa fa-chevron-down expand-button'
              aria-hidden='true'></i> */}
          {/* <div id='status-options'>
              <ul>
                <li id='status-online' className='active'>
                  <span className='status-circle'></span>
                  <p>Online</p>
                </li>
                <li id='status-away'>
                  <span className='status-circle'></span>
                  <p>Away</p>
                </li>
                <li id='status-busy'>
                  <span className='status-circle'></span>
                  <p>Busy</p>
                </li>
                <li id='status-offline'>
                  <span className='status-circle'></span>
                  <p>Offline</p>
                </li>
              </ul>
            </div> */}
        </div>
      </div>
      {/* <div id='search'>
          <label for=''>
            <i className='fa fa-search' aria-hidden='true'></i>
          </label>
          <input type='text' placeholder='Search...' />
        </div> */}
      <div id='contacts'>
        <ul>
          <li className='contact'>
            <div className='wrap'>
              <span className='contact-status online'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Louis Litt</p>
                <p className='preview'>You just got LITT up, Mike.</p>
              </div>
            </div>
          </li>
          <li className='contact'>
            <div className='wrap'>
              <span className='contact-status online'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Louis Litt</p>
                <p className='preview'>You just got LITT up, Mike.</p>
              </div>
            </div>
          </li>
          <li className='contact'>
            <div className='wrap'>
              <span className='contact-status online'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Louis Litt</p>
                <p className='preview'>You just got LITT up, Mike.</p>
              </div>
            </div>
          </li>
          <li className='contact'>
            <div className='wrap'>
              <span className='contact-status online'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Louis Litt</p>
                <p className='preview'>You just got LITT up, Mike.</p>
              </div>
            </div>
          </li>
          <li className='contact'>
            <div className='wrap'>
              <span className='contact-status online'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Louis Litt</p>
                <p className='preview'>You just got LITT up, Mike.</p>
              </div>
            </div>
          </li>
          <li className='contact active'>
            <div className='wrap'>
              <span className='contact-status busy'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Harvey Specter</p>
                <p className='preview'>
                  Wrong. You take the gun, or you pull out a bigger one. Or, you
                  call their bluff. Or, you do any one of a hundred and forty
                  six other things.
                </p>
              </div>
            </div>
          </li>
          <li className='contact'>
            <div className='wrap'>
              <span className='contact-status away'></span>
              <img src='img/avatar-male.png' alt='' />
              <div className='meta'>
                <p className='name'>Rachel Zane</p>
                <p className='preview'>
                  I was thinking that we could have chicken tonight, sounds
                  good?
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id='bottom-bar'>
        <button id='addcontact' className='active'>
          <i className='fa fa-exchange fa-fw' aria-hidden='true'></i>
          <span>Conversations</span>
        </button>
        <button id='settings'>
          <i className='fa fa-users fa-fw' aria-hidden='true'></i>
          <span>List</span>
        </button>
      </div>
    </div>
  );
}

export default SidePanel;
