# Landing Example 02

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This is a Repository for a Landing Example Page.

In /Screenshot Folder you can see the Finish Page.

![Landing Example](/Screenshot/EsercizioLandingDesktop01.jpg)

We want a Landing Page with 2 Box in the Header:

* Newsletter Form (with Validation)
* Web Push Form (only for Browser that support Web Push Notifications)

In Fallback for other Browser we want a Box with:

* App Download

![Landing App Download Box](/Screenshot/EsercizioLandingDesktop02.jpg)

For the Colored Box you have to use this API:

https://jsonplaceholder.typicode.com/photos

For retrieve __Title__ and __Images__.

We can filter the box with the __Input Search__.

---

We need a Mobile Version like the Example:

![Landing Mobile Example](/Screenshot/EsercizioLandingMobile01.jpg)

with the Tab for switch the Box in the Header

![Landing Mobile Example Tab 02](/Screenshot/EsercizioLandingMobile02.jpg)

## Installation

Install dependencies:

	npm install

## Run the project

Run the project on http://localhost:3000

	npm start

## Run the tests

	npm test

OR

    npm run test

Generate code coverage reports

    npm run test -- --coverage

## Build project

Builds static files to deploy on server:

	npm run build

## Code Linter

Launch ESLint from the local installation:

### Windows:

All JS files:

	node_modules\.bin\eslint src\components\*.js

Single file:

	node_modules\.bin\eslint src\components\<filename.js>

### Linux:

All JS files:

	./node_modules/.bin/eslint src/components/*.js

Single file:

	./node_modules/.bin/eslint src/components/<filename.js>

## Additional dependencies

- [Axios HTTP client](https://github.com/axios/axios)
- [ESLint](https://eslint.org/)
