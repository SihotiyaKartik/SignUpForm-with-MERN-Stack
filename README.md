# SIGN UP FORM
##### A SignUp form created using MERN Stack where user can input its details like username, fullname, email and password and these details are stored using MongoDB database.
## Getting Started
##### Your machine should have npm(or yarn), NodeJS and MongoDB server installed.
## Installation
```js
Clone this repository
git clone https://github.com/SihotiyaKartik/SignUpForm-with-MERN-Stack.git
```
## Install server dependencies
```js
cd server
npm install
```
## Install client dependencies
```js
cd client
npm install
```
### you can either use your local mongoDB database or create a mongoDB cluster
```js
go to server/src/db/conn.js
you can change this "mongodb://localhost:27017/loginFormDatabase?readPreference=primary&appname=MongoDB%20Compass&ssl=false" or can keep this.
```
### This app uses concurrently so that you don't have to run 2 different instances for server and client
```js
run this command in root directory
npm run dev
```



