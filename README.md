# Translation API

This API allows users to manage translations, languages, and user accounts with authentication and role-based access. Follow the steps below to set up and run the API locally.

## Prerequisites
Make sure you have the following installed:
 - Node.js (version 14 or higher)
 - npm 
 - MongoDB (local instance or MongoDB Atlas)

## Instalation

1. Clone the Repository
```bash 
git clone https://github.com/Maciek-Sawicki/Translator-app-api
cd Translator-app-api
```

2. Install Dependencies
```bash
npm install
```
3. Set Up Environment Variables
Create a `.env` file in the root of your project with the following:
```bash
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```
Replace `<your-mongodb-connection-string>` with your MongoDB URI and `<your-secret-key>` with a random string for token signing.

4. Start the Server

```bash
npm start
```
The server will run at `http://localhost:3000`.



