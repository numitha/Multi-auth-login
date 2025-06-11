// Mock user data stored in JavaScript object
const users = [
  {
    email: 'anu@gmail.com',
    username: 'anumitha',
    phone: '9042198656',
    password: 'anu@123',
    otp: '12345',
  },
  {
    email: 'dad@gmail.com',
    username: 'sajeesh',
    phone: '9840967530',
    password: 'abc@123',
    otp: '56789',
  }
];

let currentMode = 'email'; // default

function switchMode(mode) {
  currentMode = mode;

  // Hide all input groups
  document.getElementById('emailField').classList.add('hidden');
  document.getElementById('usernameField').classList.add('hidden');
  document.getElementById('phoneField').classList.add('hidden');

  // Show only selected mode
  if (mode === 'email') {
    document.getElementById('emailField').classList.remove('hidden');
  } else if (mode === 'username') {
    document.getElementById('usernameField').classList.remove('hidden');
  } else if (mode === 'phone') {
    document.getElementById('phoneField').classList.remove('hidden');
  }

  document.getElementById('message').textContent = '';
}

function handleLogin(event) {
  event.preventDefault();
  const password = document.getElementById('password').value.trim();
  let validUser = false;

  users.forEach(user => {
    if (
      (currentMode === 'email' && user.email === document.getElementById('email').value.trim() && user.password === password) ||
      (currentMode === 'username' && user.username === document.getElementById('username').value.trim() && user.password === password) ||
      (currentMode === 'phone' && user.phone === document.getElementById('phone').value.trim() && user.otp === password)
    ) {
      validUser = true;
    }
  });

  const msg = document.getElementById('message');
  if (validUser) {
    msg.style.color = 'green';
    msg.textContent = 'Login successful!';
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Invalid credentials. Please try again.';
  }

  return false;
}
