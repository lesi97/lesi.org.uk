function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}


function generatePassword() {
  var password = '';
  var passwordLength = 24;
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Possible characters that can appear in password
 
  const array = new Uint32Array(24); // Create 'unsigned' array
  window.crypto.getRandomValues(array); // Assign random values to new array
 
  for (var i = 0; i < passwordLength; i++) {
    password += chars[array[i] % chars.length]; // % operator returns remainder of division
  }
 
 document.getElementById("password").value = password;
}
 
generatePassword(5); // Returns 5-character password (e.g. "R^Xgg")
generatePassword(10); // Returns 10-character password (e.g. "j93Di*7vQb")