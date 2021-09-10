## Getting started - URL SHORTENER

Get neccessary environmental variables from .env.example and add it to .env

## Starting the application

There are two ways to start the application, with docker and without docker.

First: create a new file called .env in the root of the project folder.

Then copy the contents of .env.example into the .env file you just created.

- Make sure you are on node version 14 or higher, you can switch your node version easily using this tool [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- RUN `yarn install`
- Once packages have successfully installed, RUN `yarn start`. This should open the app in your browser on URL localhost:3000
- Also make sure the backend api service is running concurrently, otherwise you have a client with no support(backend api)

## Hosting

This client side is hosted at https://shutliy.herokuapp.com/ on Heroku servers.

Note: Heroku servers go idle after some time of inactvity, so you'd likely notice a delay when accessing the URL the first time.

## Other notes

There are no beautiful stylings :D, apologies in advance.
