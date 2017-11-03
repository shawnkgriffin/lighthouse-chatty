# Functional Requirements
* Primarily a client-side SPA (single-page app) built with ReactJS
  - [X] Based on the HTML and CSS provided
  - [X] Contains a chat log displaying messages and notifications
  - [X] Contains an input field to change your name and an input field to send a message
- [X] The client-side app communicates with a server via WebSockets for multi-user real-time updates
- [X] No persistent database is involved; the focus is on the client-side experience
## Behaviour Requirements
- [X] When any connected user sends a chat message, all connected users receive and display the message
- [X] When any connected user changes their name, all connected users are notified of the name change
  - [X] Notifications are styled differently from chat messages
- [X] Header will display the count of connected users
- [X] When the number of connected users changes, this count will be updated for all connected users
- [X] (STRETCH) Different users' names will each be coloured differently
- [X] Bonus: the colouring is consistent between connected user instances 
- [ ] or is calculated algorithmically based on their name,
- [ ] or is manually selectable by users, or any other interesting approach!
## Technical Specifications
### Stack:

- [X] Webpack with Babel, JSX, ES6, webpack dev server (comes with boilerplate)
- [X] WebSockets using Node package ws on the server-side, and native WebSocket on client side
- [X] ReactJS
### React component guidelines:

- [X] A single root component (e.g. App) should be responsible for the main application state, as well as communication with the WebSocket server
- [X] A message list component renders the chat log (chat messages and system notifications)
- [X] A chat bar component provides an input field for changing your username and an input field for sending messages. These input fields do not need to be React-style "controlled inputs", although they can be.
### Client websocket behaviour:

- [X] opens a websocket connection as soon as the App component is mounted
- [X] the connection stays open until the client closes the page (or otherwise disconnects)
- [X] sends chat messages and (name change) notifications initiated by the current user
- [X] handles broadcast messages (chat, notifications, user count) from the server and may alter state accordingly
### Websocket server specs:

- [X] The Chatty client app and Chatty websocket server are separate Node apps each with their own package.json
- [X] It's a simple server using express and ws
- [X] The server should send and receive JSON-encoded messages
#### When a client sends a message:
- [X] the server should determine what to do based on the message's type property
- [X] it should construct a message to send back in response with a corresponding type and a generated unique id (e.g. a UUID)
- [X] When a client connects or disconnects, the server should broadcast the current user count to all connected clients
- [X] (STRETCH) the server may assign and/or keep track of user colours (there are several ways of solving this)
### Submit Requirements
### Step 1: Verify the project is complete
- [X] Functional requirements complete
### Step 2: Clean up the code
- [X] Remove console.logs
- [X] Add comments
- [ ] Check best practices
- [ ] Correct variable declaration and semi-colon use
- [ ] Proper and consistent indentation and spacing
- [ ] Clear and consistent function and variable names
- [ ] Modular and reusable code (no need to break your code into Node modules, but using helper functions to keep the code DRY is a good idea)
- [ ] Well-commented code (in other words, that your code is easy to read)
- [ ] That no debugging, commented-out or dead/un-used code is present
- [ ] Sensible structure for the project's files and directories
### Step 3: Verify your project will install on your mentors' computers
- [X] verify that your package.json files include all the necessary dependencies. Yes, that's files plural: You should have a separate package.json file for each of the two server.

- [X] Open the package.json file in your project's root directory and verify that you've got the following packages listed under the "devDependencies" and/or "dependencies" keys.
* Client 
  * babel-core
  * babel-loader
  * babel-preset-es2015
  * babel-preset-react
  * css-loader
  * node-sass
  * sass-loader
  * sockjs-client
  * style-loader
  * webpack
  * webpack-dev-server
  * react
  * react-dom

* Server
  * express
  * ws
  * uuid

Step 4: Update README file
- [X] README.md
Step 5: Add screenshots

- [X] screenshots
- [X] doc directory
### Step 6: Push the final version to GitHub
- [X] Push the final version of your Chatty project to GitHub (to the master branch).
### Step 7: Submit the project!
- [X] Done