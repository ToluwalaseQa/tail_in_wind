let isPasswordVisible = false;

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('passwordInput');
  const passwordToggleIcon = document.getElementById('passwordToggleIcon');

  isPasswordVisible = !isPasswordVisible;
  if (isPasswordVisible) {
    passwordInput.type = 'text';
    passwordToggleIcon.src = '../assets/Icon.png'; // Show password icon
    passwordToggleIcon.alt = 'Hide password';
  } else {
    passwordInput.type = 'password';
    passwordToggleIcon.src = '../assets/Icon.png'; // Hide password icon
    passwordToggleIcon.alt = 'Show password';
  }
}

function verifyOTP() {
  const otp =
    document.getElementById('otp1').value +
    document.getElementById('otp2').value +
    document.getElementById('otp3').value +
    document.getElementById('otp4').value +
    document.getElementById('otp5').value +
    document.getElementById('otp6').value;
  if (otp.length === 6) {
    document.getElementById('otpScreen').classList.add('hidden');
    document.getElementById('emailScreen').classList.remove('hidden');
    checkButtonState(); // Check button state when switching to email screen
  }
}

function goBackToOTP() {
  document.getElementById('emailScreen').classList.add('hidden');
  document.getElementById('otpScreen').classList.remove('hidden');
  document.getElementById('errorContainer').classList.add('hidden'); // Hide error when going back
}

function validateEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password must be exactly 6 characters long
  return password.length === 6;
}

function checkButtonState() {
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const signInButton = document.getElementById('signInButton');
  const errorContainer = document.getElementById('errorContainer');
  const errorMessage = document.getElementById('errorMessage');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const emailValid = validateEmail(email);
  const passwordValid = validatePassword(password);

  let errorText = '';

  // Check email and password validity
  if (!email) {
    errorText = 'Email is required.';
  } else if (!emailValid) {
    errorText = 'Please enter a valid email address.';
  } else if (!password) {
    errorText = 'Password is required.';
  } else if (!passwordValid) {
    errorText = 'Password must be exactly 6 characters long.';
  }

  // Update button state and error message
  if (emailValid && passwordValid) {
    signInButton.classList.remove(
      'bg-gray-300',
      'text-gray-500',
      'cursor-not-allowed'
    );
    signInButton.classList.add('bg-black', 'text-white', 'hover:bg-black/10');
    errorContainer.classList.add('hidden');
  } else {
    signInButton.classList.remove(
      'bg-black',
      'text-white',
      'hover:bg-black/10'
    );
    signInButton.classList.add(
      'bg-gray-300',
      'text-gray-500',
      'cursor-not-allowed'
    );
    errorContainer.classList.remove('hidden');
    errorMessage.textContent = errorText;
  }
}

function verifyCredentials() {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const errorContainer = document.getElementById('errorContainer');
  const errorMessage = document.getElementById('errorMessage');

  // Only proceed if button is enabled (i.e., all validations passed)
  const signInButton = document.getElementById('signInButton');
  if (signInButton.classList.contains('bg-gray-300')) {
    return; // Do nothing if button is disabled
  }

  if (email === 'samsmith@gmail.com' && password.length === 6) {
    alert('Login successful!');
    errorContainer.classList.add('hidden');
  } else {
    errorContainer.classList.remove('hidden');
    errorMessage.textContent = 'Email or password is incorrect.';
  }
}

// Add event listeners to check button state on input change
document
  .getElementById('emailInput')
  .addEventListener('input', checkButtonState);
document
  .getElementById('passwordInput')
  .addEventListener('input', checkButtonState);

// Initial check when page loads
window.onload = checkButtonState;

const otpInputs = document.querySelectorAll('#otpInput input');
otpInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (e.target.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});
