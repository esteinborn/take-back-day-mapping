'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyAGqSVpUm81B-KYs-cyKYq8XnLTbZ8HHJw',
  authDomain: process.env.FIREBASE_DOMAIN || 'takebackmap.firebaseapp.com',
  databaseURL: process.env.FIREBASE_DB_URL || 'https://takebackmap.firebaseio.com',
  projectId: process.env.FIREBASE_ID || 'takebackmap',
  storageBucket: process.env.FIREBASE_BUCKET || 'takebackmap.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID || '257650412128'
}; // src/firebase.js


_firebase2.default.initializeApp(config);
exports.default = _firebase2.default;