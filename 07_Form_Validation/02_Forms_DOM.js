/*
JavaScript Form Validation
HTML form validation can be done by JavaScript.

If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:
*/

function FormValidation(event){
  event.preventDefault(); // stop form from submitting
  let x = document.forms['myForm']['fname'].value;
  if(x == ""){
    alert("Name Is Required!");
    return false;
  } else {
    alert("Submited!")
    return true;
  }
}


let form = document.getElementById('myForm');
form.addEventListener('submit', FormValidation);
