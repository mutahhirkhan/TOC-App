import {
  auth,
  firestore,
  googleAuthProvider,
  serverTimestamp,
} from "./../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
import history from './../../History/history';

//functions move to reducer
export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});
export var removerUser = () => ({
  type: REMOVE_USER,
});

// third party work
export var signup = ({ email, password, fullName }) => async (dispatch) => {
  try {
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);
    console.log(uid);
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };
    // console.log(userInfo)
    await firestore.collection("users").doc(uid).set(userInfo);

    //navigate to home page
    history.push("/")

  } catch (error) {
    console.log(error);
    alert(error.message)
  }
};

export var signin = ({ email, password }) => async (dispatch) => {
  try {
    //sign in user
     await auth.signInWithEmailAndPassword(email, password);

    //navigate to home page
    history.push("/")
      
  } catch (error) {
    console.log(error);
  }
};

export var signout = () => async (dispatch) => {
  try {
    await auth.signOut();
    
  } catch (error) {
    console.log(error);
  }
};

export var googleSignin = () => async (dispatch) => {
  try {
    //signin user in firebase auth using google provider
    //also saved the photo url of google signed in person
    var {
      additionalUserInfo: { isNewUser },
      user: { displayName, email, photoURL, uid },
    } = await auth.signInWithPopup(googleAuthProvider);
    //checking for new user
    if (isNewUser) {
      //save user data to firestore
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimestamp(),
      };
      console.log(userInfo);
      await firestore.collection("users").doc(uid).set(userInfo);
      //navigate to home page
      history.push("/")
    }
    console.log(photoURL)
   
  } catch (error) {
    console.log(error);
  }
};

//auth listener for our App (centralized auth listener)
//onauthstatechange accepts a function which tells if user is signed in or not
export var authListener = () => async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      var { uid } = user;
      //fetch data from firestore
      var query = await firestore.collection("users").doc(uid).get();
      var { fullName, email } = query.data();

      //set to redux store
      var userData = {
        fullName,
        email,
        uid,
      };
      //navigate to  home page
      // if(userData)  history.push("/");

      dispatch(setUser(userData));
    } else {
      dispatch(removerUser());
    }
  });
};
