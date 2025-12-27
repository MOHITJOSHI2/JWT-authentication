## Simple jwt authentication
This program contains two folders "jwt" which is the frontend react file and "server" which is the backend file.
This program simply sign you up saves your data into the mongoDB database. when you login into the program with the same data
it will create a JWT token and store it in the cookie which cannot be accessed by the frontend. The jwt token and the cookie both
will expire in "24hrs".

## Some additional work
* Create a .env file in server folder and create two variables calles "KEY" and "DATABASE"
* In "DATABASE" variable paste your mongoDB connection url
* In "KEY" variable wite nay secret key for JWT token generation
* Replace the path in index.js, jwtMiddleware and database.js with your own path of the env file


## Running
* First go to the terminal and wrte "git clone https://github.com/MOHITJOSHI2/JWT-authentication.git"
* Then in terminal write "cd JWT-authentication"
* Then opem two terminal withing same folder and in one write "cd jwt" another "cd server"
* Then in first terminal write "npm run dev" another "npm start"
* Then just click on the link provided in the first terminal and your program is working
