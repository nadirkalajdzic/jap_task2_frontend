## Instruction to set up the project

# Firstly, you will find here the instructions how to set up both backend and frontend for this app 
# The backend is on the following link: https://github.com/nadirkalajdzic/jap_task2_backend

When you clone this "frontend repository" you need to do the following:
   1. add a .env file in the root folder and add the following enviroment variable: REACT_APP_API_URL=https://localhost:5001,
      the localhost url will be the one of the backend api
   2. run npm install in the root folder
   3. run npm start to start the react app
 
After this, go to the backend repository from the given url, clone it and then in the Startup.cs file in the method Configure 
change the origin url if the react app localhost url IS NOT THE SAME, otherwise do not change anything.

When you clone the "backend repository" you need to do the following:
   1. make sure SQL Server is active and if you have a database called "moviesapp" then delete it from the SQL Server or change the name moviesapp
      from the DefaultConnection of the appsettings.json in the root folder to some available database name for your SQL Server  
   3. run in the terminal from Visual Studio dotnet ef database update
   4. your SQL Server should now have a database named "moviesapp" or the name you decided to have customly
   5. check again if the localhost url matches the url from the enviroment variable in the react app!!!
   6. thats all, enjoy
  

## Mock up design

-- https://app.moqups.com/TrK4Xmtss4/view/page/ad96b0eab --

### design v2

#### added button for item cards

## ERD

-- https://lucid.app/lucidchart/de4a5cf7-437b-4b29-8b11-8d2ac41d14ef/edit?viewport_loc=209%2C-3%2C1707%2C833%2C0_0&invitationId=inv_47d6f1e3-3326-4123-a41e-17243806e0c8
