// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAO8k7MK24tuP8B4gOatmK4O1aSJI-Q_dE",
    authDomain: "contact-form-e6ded.firebaseapp.com",
    projectId: "contact-form-e6ded",
    storageBucket: "contact-form-e6ded.appspot.com",
    messagingSenderId: "767268150857",
    appId: "1:767268150857:web:1f148f5a8436ef42826998"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference contant info collections
let contactInfo = firebase.database().ref("infos");

//Listens for a submit
document.querySelector(".main").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
//Get input values
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;

    saveContactInfo(name, email, message);

    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("message-input").value = "";

    if (name==null || name==""){  
        alert("Name can't be blank");
    }
}

//Save infos to firebase
function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    })
}

//Validate form
/* function validateform(){  
    var name=document.myform.name.value;

    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
      }
} */