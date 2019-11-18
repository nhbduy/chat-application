### Real-time chat application (client)

> **Tech Stack**
>
> - React JS - thanks to [Create React App](https://github.com/facebook/create-react-app)
> - Bootstrap CSS - thanks to [Bootstrap](https://getbootstrap.com)
> - [Chat App Template](https://bootsnipp.com/snippets/exR5v) - credit to [musichitz](https://bootsnipp.com/musichitz) at Bootsnipp
> - Socket.io CLI - thanks to [Socket.io](https://socket.io)


After cloning the repository to your local machine, run this commande to install all dependencies needed

```cmd
npm install
```

> NOTE: Do not forget to configure your setting environment at [config.js](https://raw.githubusercontent.com/nhbduy/chat-application/master/src/config.js) file

Runs the app in the development mode.

```cmd
npm start
```

Open [http://localhost:3000](http://localhost:3000) (port 3000 by default) to view it in the browser.

---

#### HOW TO USE

(...to be edited...)

---

> #### NOTE: need to be run with [server-side](https://github.com/nhbduy/chat-application-server) part that you can explore.


___

#### OVERVIEW

1. Tech Stack: React JS, Node JS, Socket.io (socket for real-time chat), Knex.js (query builder for database) 
2. Features:
    - Case A. The application need to fill in the name before to start any conversation ✅
    - Case B. The application is able to chat either in a group ✅or peer to peer ❎(to be implemented)
    - Case C. The application is able to join the conversation by entering specific link ✅
3. The chat need to be shown the following information:
   - Message ✅
   - Date Time ✅
   - Username Bonus ✅

4. Chat Performance: response time
5. Notification: (Read or unread Message)
   - Individual notification ✅
   - Multiple notifications ❎(to be implemented)

6. Deployment Procedure:
   - Client: Heroku ✅/ GitHub Pages ❎ (to be fixed, currently do not work with 'react-router-dom')
   - Server: Heroku ✅
   - Database: PostgreSQL on Heroku ✅

___