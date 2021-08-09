import firebase from 'firebase';
require("@firebase/firestore")

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script>
  // Your web app's Firebase configuration*/
  var firebaseConfig = {
    apiKey: "AIzaSyD1G5b4el3WZlNaD2S98BXqrpdg6AKn0OU",
    authDomain: "project71-a8fbf.firebaseapp.com",
    projectId: "project71-a8fbf",
    storageBucket: "project71-a8fbf.appspot.com",
    messagingSenderId: "588853585465",
    appId: "1:588853585465:web:e496d85240067659980fe8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//</script>

export default firebase.firestore();