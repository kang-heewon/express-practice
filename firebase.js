const firebase = require("firebase-admin");

const serviceAccount = require("./firebaseKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});
module.exports = firebase;
