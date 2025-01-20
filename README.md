# Starter Express Mongoose Project

This project provides a starting point for building an application with **Express** and **Mongoose**, focusing on connecting a Node.js server to a MongoDB database using Mongoose as the Object Data Modeling (ODM) library.

## Features
- Express setup with route handling
- Mongoose integration with MongoDB for database operations
- Example schema and models for managing data

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thinkful-Ed/starter-express-mongoose.git
   ```
2. Navigate to the project directory:
   ```bash
   cd starter-express-mongoose
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file and include your MongoDB URI:
     ```
     MONGO_URI=<your-mongo-database-URI>
     ```

5. Run the application:
   ```bash
   npm start
   ```

### Usage
This starter template provides the basic structure for building RESTful APIs. You can extend it by adding more routes, controllers, and Mongoose models.

## Local Setup with Docker
- Uses custom image: [kernel528/mongodb-community-server](https://hub.docker.com/repository/docker/kernel528/mongodb-community-server/tags)
- MongoDB Docker Source Repo:  [mongodb-docker](https://github.com/kernel528/mongo-docker)
  - This image and source contain sample seed data in the `mongo-seed` folder for testing purposes.
- Deploy container based on the `mongo-docker` image and follow the steps to seed data (optional).

#### Technologies
- **Express**: Web framework for Node.js.
- **Mongoose**: ODM library for MongoDB.
- **MongoDB**: NoSQL database.
