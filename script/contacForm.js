const firebaseConfig = {
    apiKey: "AIzaSyDXh_zqBzt-lpqFifjc1Ba6jQWt-x4hO7I",
    authDomain: "contactform-168f9.firebaseapp.com",
    databaseURL: "https://contactform-168f9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contactform-168f9",
    storageBucket: "contactform-168f9.appspot.com",
    messagingSenderId: "42231829523",
    appId: "1:42231829523:web:a6a885bee2996ffbd15be6"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};