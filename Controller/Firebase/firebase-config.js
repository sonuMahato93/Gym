const admin = require("firebase-admin");
// path to service account
const serviceAccount = require("./ServiceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// const uid = "some-uid"

// admin.auth().createCustomToken(uid)
// .then((customToken) =>{
// console.log(customToken)
// })
// .catch((error)=>{
//     console.log(error)
// })

module.exports = admin;