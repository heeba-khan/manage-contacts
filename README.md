# Contact Manager Backend

A simple backend application for managing contacts. This API allows users to create, read, update, and delete user profiles. It is built with Node.js, Express, and MongoDB.

## Project Overview

The Contact Manager Backend is a RESTful API built to manage user profiles effectively. This application allows users to register, log in, and perform CRUD operations (Create, Read, Update, Delete) on user data. The backend is developed using **Node.js** and **Express.js**, ensuring a robust and scalable architecture. The data is stored in a **MongoDB** database, which provides flexibility and efficiency in handling user information. For user authentication, we utilize **JSON Web Tokens (JWT)** and secure password storage with **bcryptjs**. This project is designed to be a solid foundation for building contact management applications, offering a straightforward approach to user management.

### Tech Stack

- **Node.js**: JavaScript runtime for building scalable applications.
- **Express.js**: Web framework for Node.js that simplifies server-side development.
- **MongoDB**: NoSQL database for storing user data in a flexible format.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **jsonwebtoken**: Library for handling JWT authentication.
- **bcryptjs**: Library for hashing passwords securely.
- **dotenv**: Module for loading environment variables from a `.env` file.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration
- User login (JWT authentication)
- Create, read, update, and delete user profiles
- JSON-based API responses

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- bcryptjs (for password hashing)
- jsonwebtoken (for JWT authentication)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heeba-khan/contact-manager-backend.git

   cd contact-manager-backend

2. Install the required dependencies:
    ```bash
    npm install

3. Create a .env file in the root directory and add your         environment variables.

4. Start the application:
    ```bash
    node app.js



## Usage
You can use tools like Postman or cURL to interact with the API. 


## Contributing
Contributions are welcome! If you have suggestions or improvements,please create a pull request or open an issue.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


