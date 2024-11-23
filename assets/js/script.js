// Register User (Sign Up)
function registerUser() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Validasi input kosong
  if (email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simpan data pengguna di localStorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  alert('Account created! Please log in.');
  window.location.href = 'login.html'; // Redirect ke halaman login
}

// Validasi Login
function validateLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Ambil data pengguna dari localStorage
  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  // Validasi input kosong
  if (email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Cek apakah data login cocok
  if (email === storedEmail && password === storedPassword) {
    alert('Login successful!');
    window.location.href = 'landing.html'; // Redirect ke halaman utama
  } else {
    alert('Invalid email or password.');
  }
}
