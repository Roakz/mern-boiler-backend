<h1>MERN Stack Boilerplate</h1>

This is a basic MERN stack boilerplate that has some basic data passed through from MongoDB to an express back end that responds with the data to an API call from the REACT front end.

I found a sweet tutorial on youtube by Brad from Traversty media ---> https://www.youtube.com/watch?v=v0t42xBIYIs. I liked what i saw but thought a basic Mongo integration using Mongoose with some basic seeded data might be helpful for some beginners. So here it is!!

The boilerplate is set up in an MVC Archtiectural pattern. The Code is commented to help those new to the stack & or coding understand what everything is doing.

Im a linux man and most of my instructions will reflect this. So please be aware of potential differences for your particular operating system.

If you dont currently have the latest versions of npm and Node plus react and Mongo installed: 
- link to installation of NPM/NODE.js ----> https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- sudo npm install -g create-react-app <---- create a react app from anywhere globally.
- link to Installation of Mongo ---> https://docs.mongodb.com/manual/installation/

---

**Getting started**

Clone this repository from github then cd into the working directory and open it in vs code. Once this is done, run **npm install** from the project root. 

I didnt install any special dependancies for the front-end. But If in doubt you could always run npm install in the front end aswell. Also worth mentioning is that by convention the prefered package manager for REACT is called yarn. I stuck with npm for this project but you can install yarn and use that if you would prefer. Just google the heck out of that shiz...

If you have any problems use your technical sophistication. Psssst....(google). To get this thing up amd running.
 
---

**An theeeeen**

**step one** ---> Run the mongoDb server. Commonly done by running the command mongod from terminal. Personally this is a global installation and you can run this from anywhere.

**step two** ---> From the project root run the command **nodemon** if you have it and get the backend server running...or just run **npm start server** this is the script i have set up for running the back end server.

**step 3** --->  Run the command **npm start** from the front end to run the REACT server.

**FIIIINALLLLY** ---> Run the seeds file by navigating to the ./seeds directory and typing **node user-seeds.js**

Once the final step is complete above you should have an operational MERN Boilerplate with some seeded data!

Enjoy amigos!