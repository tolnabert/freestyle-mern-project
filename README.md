## Connecting Canine
Connecting Canine is a web platform that allows users to find partners for walking their dogs. Whether you're looking for a playmate for your furry friend or simply want to connect with other dog owners in your area, Connecting Canine makes it easy to find suitable companions for your walks.

# Technologies
- Node.js
- Express.js
- React.js
- MongoDB
- Mongoose

# Overview
For the project we used MERN stack. In the frontend we used React with React-router to navigate easly through different pages.
In the backend we used Node with Express handle our request and responses to the client side.
For storage we used MongoDB with Mongoose to help our connection and CRUD operations with the database.

## Installation

1. Clone the repository to your local machine
2. Open terminal
    - `CTRL+Ö`
2. Install server dependencies
    - Navigate to the server folder
        - cd .\server\
    - Install dependencies with below command:
        - `npm install`
3. Add database connection
    - Navigate to the server folder (like in the previous step)
    - Create .env file based on the .env.sample file
    - Insert your MongoDB connection (username, password, cluster and identifier for cluster)
4. Start server
    - Navigate to the server folder (like in the previous step)
    - Start server with `npm run dev` command
5. Install frontend dependencies
    - Open a new terminal, if the terminal is not shown press `CTRL+ö` and with the `+` on the right
    - Navigate to the client folder from root
        - cd .\client\
    - Install dependencies with `npm install` command
6. Start frontend server
    - Navigate to the client folder (like in the previous step)
    - Start the client server with `npm run dev` command
7. Visit `http://localhost:5173` in your web browser to access the app.


### Customer Site

- Register to the site, with fictional information.
- Login to the site. (username, password has to match case sensitive)
- Add a dog on the top middle
    - image source is not required
    - email must contain `@` and part after that including `.com` or something
