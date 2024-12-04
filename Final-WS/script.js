

function displayUserInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;
    }
}

function logout() {
    localStorage.removeItem('user'); // Remove user info
    localStorage.removeItem('isLoggedIn'); // Remove login status
    window.location.href = 'login.html';  // Redirect to login page
}


function loadBookings() {
    const tableBody = document.getElementById('bookingsTableBody');
    tableBody.innerHTML = '';  // Clear any previous rows

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    bookings.forEach((booking) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.flightNumber}</td>
            <td>${booking.departure}</td>
            <td>${booking.destination}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Ensure user info is displayed when the page loads
document.addEventListener('DOMContentLoaded', function () {
    displayUserInfo();  // Show user info
    loadBookings();      // Show user's bookings
});

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your authentication logic here
    console.log('Logged in with', username, password);
}

function handleRegister(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    // Add your registration logic here
    console.log('Registered with', newUsername, newPassword);
}
