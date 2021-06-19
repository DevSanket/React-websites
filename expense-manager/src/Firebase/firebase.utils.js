import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDJjWx7ktW7NIUl7YTor9zbJBUqkoi4nnE",
    authDomain: "expense-manager-859d6.firebaseapp.com",
    projectId: "expense-manager-859d6",
    storageBucket: "expense-manager-859d6.appspot.com",
    messagingSenderId: "949950183953",
    appId: "1:949950183953:web:8353090d7f3ebd15584fb0",
    measurementId: "G-QXVLHTTSQB"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebaseApp.firestore();
  export const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth,additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`expence_users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(error){
        console.log('Error while creating User ',error.message);
      }
    }

    return userRef;
  }


  // Send Data To Firebase 
   export const SendExpenses = (value,msg) => {
     var user = firebase.auth.currentUser;
     console.log(user);
     const userId = user.uid;
     const userDatabase = firestore.collection('users').doc(userId).collection('Expenses');
     let myDate = String(firebase.firestore.FieldValue.serverTimestamp());
    //  const finalDate = myDate.substr(1, 15);

     try{
      userDatabase.add({
        value:value,
        message :msg,
        Date: myDate
      })
     }catch(e){
      console.log('error adding Data to firebase', e.message);
     }

   }  






  
  export default firebase;