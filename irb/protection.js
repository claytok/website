// Password protection for IRBreeze
(function() {
  // Check if already authenticated
  const isAuthenticated = sessionStorage.getItem('auth_token') === 'hymgyx-jyvqe8-Sebcox';
  
  if (!isAuthenticated) {
    // Request password
    const password = prompt('This area is password protected. Please enter the password:');
    
    // Validate password
    if (password === 'hymgyx-jyvqe8-Sebcox') {
      // Store authentication in session storage
      sessionStorage.setItem('auth_token', password);
    } else {
      // Incorrect password, redirect to home
      alert('Incorrect password. Access denied.');
      window.location.href = '/';
    }
  }
})(); 