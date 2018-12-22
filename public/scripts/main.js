
const signInBtn = document.querySelector("#signinButton");
const signOutBtn = document.querySelector("#signOutButton");

signInBtn.addEventListener("click", e => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error)
        // ...
    });
})

signOutBtn.addEventListener("click", e => {
    firebase.auth().signOut().then(function() {
        console.log('Sign-out successful.')
      }).catch(function(error) {
        console.log('An error happened.', error);
      });
});

const auth = firebase.auth();
auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser.displayName)
    }
    else {
        console.log('not logged in')
    }
})