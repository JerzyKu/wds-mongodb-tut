npm init -y
npm i mongoose
npm i --save-dev nodemon

ad to package.json: 
 "scripts": {
    "devStart": "nodemon script.js"
  },

npm run devStart