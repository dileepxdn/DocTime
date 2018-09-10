"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const env = functions.config();
const algoliasearch = require("algoliasearch");
const sgMail = require("@sendgrid/mail");
const firestoreDB = admin.firestore();
//sendgrid
sgMail.setApiKey(env.sendgrid.key);
// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('doctors');
exports.indexDoctor = functions.firestore
    .document('doctors/{doctorId}')
    .onCreate((snap, context) => {
    const data = snap.data();
    const objectID = snap.id;
    // Add the data to the algolia index
    return index.addObject(Object.assign({ objectID }, data));
});
exports.unindexDoctor = functions.firestore
    .document('doctors/{doctorId}')
    .onDelete((snap, context) => {
    const objectId = snap.id;
    // Delete an ID from the index
    return index.deleteObject(objectId);
});
exports.createUserAccount = functions.auth.user().onCreate((user) => {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL || 'https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406_960_720.png';
    const roles = {
        admin: false,
        subscriber: true,
        doctor: false,
        superadmin: false
    };
    const newUserRef = firestoreDB.collection('users').doc(uid);
    return newUserRef.set({
        uid: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        roles: roles,
    }).then(function () {
        console.log("User data created sucessfully for :" + email);
    })
        .catch(function (error) {
        console.error("Error in creating the user data in firestore", error);
    });
});
exports.deleteUserAccount = functions.auth.user().onDelete((user) => {
    const UserRef = firestoreDB.collection('users').doc(user.uid);
    return UserRef.delete().then(function () {
        console.log("User data deleted sucessfully for :" + user.email);
    }).catch(function (error) {
        console.error("Error in deleting the user data in firestore", error);
    });
});
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const msg = {
        to: user.email,
        from: 'dileepxdn@gmail.com',
        subject: 'Welcome to Doc Time',
        templateId: 'd-d55dbdde899f42c3b2d4e33b5c52f738',
        substitutionWrappers: ['{{', '}}'],
        substitutions: {
            name: user.displayName || user.email,
        }
    };
    return sgMail.send(msg).then(function () {
        console.log('welcome email sent to: ' + user.email);
    })
        .catch(function (error) {
        console.error("Error: welcome mail failed:" + user.email + "  ", error);
    });
});
//# sourceMappingURL=index.js.map