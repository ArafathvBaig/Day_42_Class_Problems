// Name Validation
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.oninput = function(){
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
};

// Password Validation
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.oninput = function () {
  let pwdRegex = RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$');
  if (pwdRegex.test(pwd.value)) pwdError.textContent = "";
  else pwdError.textContent = "Enter a valid Password";
};

// Email Validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.oninput = function () {
  let emailRegex = RegExp('(([a-z A-Z]{3,})([.|+|_|-]?[0-9 a-z A-Z]{3,})?@([0-9 a-z A-Z]{1,})([.][a-z]{2,3})([.][a-z]{2,3})?)');
  if (emailRegex.test(email.value)) emailError.textContent = "";
  else emailError.textContent = "Email is Incorrect";
};

// Tel Number validation
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.oninput = function () {
  let telRegex = RegExp('^[1-9]{1}[0-9]{1} [1-9]{1}[0-9]{9}$');
  if (telRegex.test(tel.value)) telError.textContent = "";
  else telError.textContent = "Tel No. is Incorrect";
};

// Salary Validation
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
  output.textContent = salary.value;
});





