document.addEventListener("DOMContentLoaded", function () {
  const doctorSchedule = document.getElementById("doctor-schedule");

  // Sample doctor data
  const doctors = [
    {
      name: "Nilkanto Bhattacharya",
      specialization: "Cardiology",
      availability: "9 AM - 5 PM",
    },
    {
      name: "Amit Dey",
      specialization: "Medicine",
      availability: "10 AM - 4 PM",
    },
  ];

  // Function to load doctors into the table
  function loadDoctors() {
    doctors.forEach((doctor) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${doctor.name}</td>
                <td>${doctor.specialization}</td>
                <td>${doctor.availability}</td>
                <td><button onclick="deleteDoctor('${doctor.name}')">Delete</button></td>
            `;
      doctorSchedule.appendChild(row);
    });
  }

  // Load doctors on page load
  loadDoctors();

  // Add doctor button functionality
  document
    .getElementById("add-doctor-btn")
    .addEventListener("click", function () {
      const name = prompt("Enter Doctor Name:");
      const specialization = prompt("Enter Specialization:");
      const availability = prompt("Enter Availability:");

      if (name && specialization && availability) {
        doctors.push({ name, specialization, availability });
        doctorSchedule.innerHTML = ""; // Clear existing rows
        loadDoctors(); // Reload doctors
      }
    });
});

// Function to delete doctor (dummy function)
function deleteDoctor(name) {
  alert(`Deleted doctor: ${name}`);
}
