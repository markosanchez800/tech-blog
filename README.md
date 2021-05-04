# Tech Blog

## Description
This project was created as a blog for talking about technology and discussing it with others. Using mysql, express, and handlebars the application takes in user data to create
accounts, sign in and verify a logged in status, and create blog posts under that users profile.  Handlebars renders all the necessary page elements and the separate sections of the application when necessary and also utilizes the bootstrap framework to give it a bit of styling as well. It was then uploaded to Heroku to host the application on a live server for public usage.

## Installation
DOWNLOAD NODE.JS FROM [HERE](https://nodejs.dev/download) IF NOT ALREADY INSTALLED
```
npm install sequelize
```
```
npm install mysql2
```
```
npm install dotenv
```
```
npm install express
```
```
npm install express-handlebars
```
```
npm install bcrypt
```
```
npm install connect-session-sequelize
```
```
npm install express-session
```
TO START APPLICATION, FIRST
INITIALIZE DATABASE IN MYSQL, THEN 
```
npm run seeds THEN npm run start
```
## Technologies Used
- JavaScript - Language used to write most of the utilized code and give the application all of its general functionality
- Handlebars - Used as an HTML template engine to render all the site pages and bring up certain sets of data like the created posts
- Heroku - Used to host the application on a live server
- Git - Used to track all working changes and push meaningful commits
- MySQL - Used to hold/create databases that contain all the information being used by the app such as post info and user accounts
- Node.js - Used to run application ffom the command line so that all necessary proccesses can run through javascript
- Express - Middleware used to control requests made by app, navigate through different request routes, and send responses
- dotenv - Used to hide private user information in an environment file
- Sequelize - Used to build all used models and control/edit/update the mySQL database

## Code Snippet
Code used to create a new post on the site, by referencing the input boxes and the logged in user's specific ID
```
const newPosting = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newp-title').value.trim();
    const content = document.querySelector('#newp-body').value.trim();
    console.log('function running');
    if (title && content){
      const response = await fetch('/api/post/newp',{
        method:'POST',
        body: JSON.stringify({title,content}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        document.location.replace('/api/post/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
```
## Author Links
- [LinkedIn](https://www.linkedin.com/in/marko-sanchez-800)
- [GitHub](https://github.com/markosanchez800)