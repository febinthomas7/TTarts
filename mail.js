// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8qUjsTEnAkycOlL75TjMAnw3m3IzVWfs",
  authDomain: "form-c01bc.firebaseapp.com",
  databaseURL: "https://form-c01bc-default-rtdb.firebaseio.com",
  projectId: "form-c01bc",
  storageBucket: "form-c01bc.appspot.com",
  messagingSenderId: "200758324440",
  appId: "1:200758324440:web:70a5057f801014633d3bad",
   
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var email = getElementVal("Email");
  var message = getElementVal("message");

  saveMessages(fname,lname, email, message);

  //   enable alert
  document.querySelector(".FormAlert").style.display = "block";
  

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".FormAlert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (fname,lname, email, message) => {
  let newContactForm = contactFormDB.push();
  let today =new Date()

  let month= today.getMonth()+1;
  let year =today.getFullYear()
  let day =today.getDate()
  let hour =today.getHours()
  let min =today.getMinutes()
  let sec =today.getSeconds()

  let Time=`${hour}:${min}:${sec}`

  let date=`${day}|${month}|${year}`

  newContactForm.set({
    fname: fname,
    lname:lname,
    email: email,
    message: message,
    date:date,
    Time:Time
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};