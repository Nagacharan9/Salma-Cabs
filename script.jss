// Demo: Static list of rides
const rides = [
  { from: "Mumbai", to: "Pune", date: "2025-09-20", driver: "Amit", seats: 3 },
  { from: "Delhi", to: "Agra", date: "2025-09-21", driver: "Priya", seats: 2 },
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
    rideList.innerHTML = '<p>No rides found.</p>';
    return;
  }
  rides.forEach(ride => {
    const div = document.createElement('div');
    div.className = 'ride';
    div.innerHTML = `<strong>${ride.from}</strong> → <strong>${ride.to}</strong><br>
      Date: ${ride.date}<br>
      Driver: ${ride.driver}<br>
      Seats Available: ${ride.seats}<br>
      <button disabled>Book Now (Demo)</button>`;
    rideList.appendChild(div);
  });
}
