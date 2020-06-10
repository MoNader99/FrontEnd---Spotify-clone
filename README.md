[To use our app]
# Get the Code (Type in the command in Git Bash):
```
git clone (https://github.com/MohammedNader99/FrontEnd---Spotify-clone)
```
# Install Packages:
## to get all the pachages we used in the app:
* you can run these commands:
```sh
npm install														# Install dependencies
```
# How to run tests
## Running unit tests

```sh
npm run test
```
# How to run for developers.
## Production (default)
1.Go to the constants folder and open baseURL.js
2.Make sure the BASEURL is (http://52.14.190.202:8000/)

## Mock server
1.Go to the constants folder and open baseURL.js
2.Change the BASEURL to be (https://b9b31d99-4598-43e6-90a8-893c3988d489.mock.pstmn.io/)

## Development server

Navigate to http://localhost:3000/. The app will automatically reload 

# Running:

```sh
npm start
```

# Functional documentation

* To install the jsdoc as a devDependency
```sh
npm i -D jsdoc
```
* Now create a jsdoc.json file as a config file to specify the following
1. where the jsdoc will look for the folders [source]
2. what files will it include [includePattern]
3. what files will it exclude [excludePattern]
4. certain authentications that have to do with recursing into folders, using markdowns, ...etc

* Add the following to the scripts in the package.json file 

```js
"doc" : "jsdoc -C jsdoc.json" 
```

* To run the documentation
```sh
npm run doc
```
