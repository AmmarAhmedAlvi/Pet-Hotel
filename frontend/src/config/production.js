const firebaseConfig = {
  apiKey: "AIzaSyDVlzczb5-rvsAc-ATmJ1sRC1gIcE1h4Hc",
  authDomain: "pet-hotel-prod-8b81f.firebaseapp.com",
  databaseURL: "https://pet-hotel-prod-8b81f.firebaseio.com",
  projectId: "pet-hotel-prod-8b81f",
  storageBucket: "pet-hotel-prod-8b81f.appspot.com",
  messagingSenderId: "402592711543",
  appId: "1:402592711543:web:559679c4e7ce945a181772",
  measurementId: "G-FM8HV5J1CE"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
