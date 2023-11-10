# express-locallibrary-tutorial

**Currently still a work in progress** 🚧

This is a tutorial project that's built following [Mozzila's guide for Express web framework (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

The guide provides an overview of node.js and express, walks through the setup process for the node/express development enviroment, and works through an exercise of building a local library web app. 

## Why Did I Work Through This?

I have been studying the basics of JavaScript, TypeScript, and Node.js. I wanted to dive in deeper and walk through the prcoess of actually building a functional web app using what I've been studying. 

My main focus was to learn how a node backend project is setup, and this provided an excellent learning while doing experience. 

## What Does This Project Use?

- JavaScript
- Node.js
- Express
- Docker
- Mongo
- Express Async Handler
- Cookie-Parser
- Debug
- Http-Errors
- Luxon
- Mongoose
- Morgan
- Pug

## How Do I Run This Project?

Two key components are required for running this project - Install links below

1. [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
2. [Docker](https://docs.docker.com/engine/install/)

### Step 1.

**Once Node.js and Docker are installed**, we then are able to get the mongo database up and running. 

Navigate to the root of the project in your terminal and run the `start-mongo.sh` script

```shell
./start-mongo.sh
```

### Step 2. 

Now that the database is up and running, time to download the project dependencies.

This can be done using `npm` – Navigate to the root of this project in your terminal and run the command provided below. 

```shell
npm install
```

This will check the `package.json` file and use `npm` to download the node modules into a folder titled `node_modules`.

### Step 3. 

So now we have the database running, and we have downloaded the node dependencies for this project. 

Time to get the database populated. This is accomplished using node and the `populatedb.js` file. Run the command below to accomplish this.

```shell
node populatedb.js "mongodb://localhost:27017/"
```

*Typically a database connection string is treated as a secret, and is not something that is shared. This project is currently setup to run locally, so above lists the default mongo database connection string*

### Step 4. 

That covers all the prep-work, time to get this project running. 

Run the following command which will run the project locally in `Debug` mode.

```shell
npm run debug
```

*This runs a script that is stored in the `package.json` file. This provides a simpler alias to use to get the project running in a configured `debug` mode.*

### Step 5. 

The project is now running via Node.js. Time to take a look at it. 

Node defaults to running the project on port `3000`. In a web browser, type into the search bar `http://localhost:3000/`, and you will see the home page rendered within the web browser.
