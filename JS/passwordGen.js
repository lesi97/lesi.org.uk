function copyPassword() {
  const copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}


function generatePassword() {
    let password = '';
    const passwordLength = 64;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const array = new Uint32Array(64);
    window.crypto.getRandomValues(array);
 
  for (let i = 0; i < passwordLength; i++) {
    password += chars[array[i] % chars.length]; 
  }
 
 document.getElementById("password").value = password;
}