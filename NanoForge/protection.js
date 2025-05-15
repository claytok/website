// Password protection for NanoForge
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
      // Allow page to continue loading normally
    } else {
      // Incorrect password, redirect to home
      alert('Incorrect password. Access denied.');
      window.location.href = '/';
      // Prevent further execution but don't throw error which might cause console errors
      document.body.innerHTML = '';
      return false;
    }
  }
})(); 