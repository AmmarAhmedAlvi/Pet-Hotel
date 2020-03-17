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
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};
