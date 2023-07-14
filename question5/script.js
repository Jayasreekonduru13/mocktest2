const form = document.getElementById('myForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const passwordField = document.getElementById('password');
const ageField = document.getElementById('age');
const genderField = document.getElementById('gender');
const dateField = document.getElementById('date');
const colorField = document.getElementById('color');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = validateForm();

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const phoneValue = phoneField.value.trim();
  const passwordValue = passwordField.value.trim();
  const ageValue = ageField.value.trim();
  const genderValue = genderField.value;
  const dateValue = dateField.value;
  const colorValue = colorField.value;

  // Name validation
  if (nameValue === '') {
    setError(nameField, 'Name is required');
    isValid = false;
  } else {
    setSuccess(nameField);
  }

  // Email validation
  if (emailValue === '') {
    setError(emailField, 'Email is required');
    isValid = false;
  } else if (!isEmailValid(emailValue)) {
    setError(emailField, 'Email is not valid');
    isValid = false;
  } else {
    setSuccess(emailField);
  }

  // Phone number validation
  if (phoneValue === '') {
    setError(phoneField, 'Phone number is required');
    isValid = false;
  } else if (!isPhoneValid(phoneValue)) {
    setError(phoneField, 'Phone number is not valid');
    isValid = false;
  } else {
    setSuccess(phoneField);
  }

  // Password validation
  if (passwordValue === '') {
    setError(passwordField, 'Password is required');
    isValid = false;
  } else if (!isPasswordValid(passwordValue)) {
    setError(passwordField, 'Password must be at least 8 characters long');
    isValid = false;
  } else {
    setSuccess(passwordField);
  }

  // Age validation
  if (ageValue === '') {
    setError(ageField, 'Age is required');
    isValid = false;
  } else if (!isAgeValid(ageValue)) {
    setError(ageField, 'Age must be a positive number');
    isValid = false;
  } else {
    setSuccess(ageField);
  }

  // Gender validation
  if (genderValue === '') {
    setError(genderField, 'Gender is required');
    isValid = false;
  } else {
    setSuccess(genderField);
  }

  // Date validation
  if (dateValue === '') {
    setError(dateField, 'Date is required');
    isValid = false;
  } else {
    setSuccess(dateField);
  }

  // Color validation
  if (colorValue === '') {
    setError(colorField, 'Color is required');
    isValid = false;
  } else {
    setSuccess(colorField);
  }

  return isValid;
}

function setError(field, message) {
  const errorField = document.getElementById(`${field.id}Error`);
  field.classList.add('error');
  errorField.innerText = message;
}

function setSuccess(field) {
  const errorField = document.getElementById(`${field.id}Error`);
  field.classList.remove('error');
  errorField.innerText = '';
}

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isPhoneValid(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function isPasswordValid(password) {
  return password.length >= 8;
}

function isAgeValid(age) {
  const ageValue = parseInt(age, 10);
  return Number.isInteger(ageValue) && ageValue > 0;
}
