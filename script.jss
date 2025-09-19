const rides = [
  { from: "Mumbai", to: "Pune", date: "2025-09-20", driver: "Amit", seats: 3 },
  { from: "Delhi", to: "Agra", date: "2025-09-21", driver: "Priya", seats: 2 },
  { from: "Bangalore", to: "Chennai", date: "2025-09-20", driver: "Salma", seats: 4 }
];

document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const from = document.getElementById('from').value.toLowerCase();
  const to = document.getElementById('to').value.toLowerCase();
  const date = document.getElementById('date').value;
  const results = rides.filter(ride =>
    ride.from.toLowerCase().includes(from) &&
    ride.to.toLowerCase().includes(to) &&
    ride.date === date
  );
  displayRides(results);
});

function displayRides(rides) {
  const rideList = document.getElementById('ride-list');
  rideList.innerHTML = '';
  if (rides.length === 0) {
    rideList.innerHTML = '<p>No rides found for your search.</p>';
    return;
  }
  rides.forEach(ride => {
    const div = document.createElement('div');
    div.className = 'ride-card';
    div.innerHTML = `
      <div><strong>${ride.from}</strong> → <strong>${ride.to}</strong></div>
      <div>Date: <b>${ride.date}</b></div>
      <div>Driver: ${ride.driver}</div>
      <div>Seats Available: ${ride.seats}</div>
      <button class="book-btn" disabled>Book Now (Demo)</button>
    `;
    rideList.appendChild(div);
  });
}

// Show all rides by default
displayRides(rides);
