<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



Welcome to the Freestyle MERN Project!



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li>
      <a href="#project-setup">Project Setup</a>
      <ul>
        <li><a href="#manual-setup">Manual Setup</a></li>
        <li><a href="#docker-setup">Docker Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

## About The Project

Connecting Canine is a web platform that allows users to find partners for walking their dogs. Whether you're looking for a playmate for your furry friend or simply want to connect with other dog owners in your area, Connecting Canine makes it easy to find suitable companions for your walks.

This project was developed using the MERN stack and includes both a frontend and a backend. The backend is built with Node.js and Express.js to handle server-side operations, while the frontend is built with React.js to provide a seamless user experience. MongoDB is used for database management, with Mongoose facilitating interactions between the server and the database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section is listing  major frameworks/libraries use in my project.

* [![Node][Node.js]][Node-url]
* [![Javascript][Javascript.com]][Javascript-url]
* [![React][Reactjs.org]][Reactjs-url]
* [![Express][Express.com]][Express-url]
* [![MongoDB][MongoDB.com]][MongoDB-url]

### Prerequisites

Before you can set up the project, ensure you have the following installed:

- **Node.js**: Required for running the frontend.
  - Install Node.js from: [Node.js download page](https://nodejs.org/en/download/package-manager)

- **MongoDB**: Required for storing user and dog data.
  - Set up MongoDB from: [MongoDB download page](https://www.mongodb.com/try/download/community)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Project Setup

1. Clone the repository to your local machine
2. Install server dependencies
    - Navigate to the server folder from root
      ```
      cd .\server\
      ```
    - Install dependencies with below command:
      ```
      npm install
      ```
3. Add database connection
    - Create .env file based on the .env.sample file
    - Insert your MongoDB connection (username, password, cluster and identifier for cluster)
4. Start server
    ```
    npm run dev
    ```
5. Install frontend dependencies
    - Navigate to the client folder from root
      ```
      cd .\client\
      ```
    - Install dependencies with below command:
      ```
      npm install
      ```
6. Start frontend server
    ```
    npm run dev
    ```
7. Visit `http://localhost:5173` in your web browser to access the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Usage

Visit **http://localhost:5173** in your web browser to access the app. You can perform the following actions:

- Register: Sign up with fictional information.
- Login: Use your registered credentials to log in (case-sensitive).
- Add a Dog: Provide details about your dog (image source optional, email must be valid).
- 
<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Roadmap

- [x] **User Registration**
- [x] **User Login**
- [x] Add Dog Profile
- [] Search for Partners
- [] Secure Authentication
- [] Admin Panel

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- BANNER -->
[contributors-shield]: https://img.shields.io/badge/CONTRIBUTORS_-3-green?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/badge/FORKS_-0-blue?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/badge/STARS-0-blue?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/badge/ISSUES-0-yellow?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/tolnabert

<!-- TECHNOLOGIES -->
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Javascript.com]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Javascript-url]: https://www.javascript.com/
[Reactjs.org]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Reactjs-url]: https://reactjs.org/
[Express.com]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[MongoDB.com]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
