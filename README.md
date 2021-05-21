# Spotify Clone

## Installation
Clone the repo and open it in your favourite text editor

Before running the project, delete both the package-lock.json files from client and server folders.

Then you have to install all the node files for the client:
```bash
cd client
npm install
```
Do the same thing for server:
```bash
cd server
npm install
```

## Setting up Auth for SpotifyAPI
Go to -> <a href="https://developer.spotify.com/dashboard/">https://developer.spotify.com/dashboard/ <a/> 
Log into your Spotify Account or Create a new one.
Accept all the terms and conditions

After logging in click on Create an App, give it a name and description and click on create.

Now you will be shown your Client Id and Client Secret which you will need to paste into the .env file of server and client in the repective variables
  
Next Click on EDIT SETTINGS and add a Redirect URI. In this case as we are in development, type "http://localhost:3000" and click on add and the save.
You'll also need to copy this Redirect URI to the .env file

After these steps your .env file in the server should look something like this:
```.env
REDIRECT_URI=http://localhost:3000
CLIENT_ID=gs67256
CLIENT_SECRET=sajh2618
```
and the .env file in the client should look like this:
```.env
REACT_APP_MY_REDIRECT_URI=http://localhost:3000
REACT_APP_MY_CLIENT_ID=gs67256
```  

## Usage  
Finally run the server and the client:
```bash
cd server
yarn start
```

```bash
cd client
yarn start
```
