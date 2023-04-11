function handleFormSubmit(event) {
    event.preventDefault(); // prevent form from submitting
  
    // get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // check if username and password are correct
    if (username === 'admin' && password === 'password123') {
      alert('Login successful!');
      window.location.href = 'investor/homeInvest.html';
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  }