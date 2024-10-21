document.addEventListener("DOMContentLoaded", function () {
  const appointmentsList = document.getElementById("appointments-list");

  // Sample appointment data
  const appointments = [
    {
      patient: "Utsha Chowdhury",
      doctor: "Nilkanto Bhattacharya",
      date: "2024-10-22",
      time: "10:00 AM",
    },
    {
      patient: "Nabila akhter",
      doctor: "Amit Dey",
      date: "2024-10-23",
      time: "11:00 AM",
    },
  ];

  // Function to load appointments into the table
  function loadAppointments() {
    appointments.forEach((appointment) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${appointment.patient}</td>
                <td>${appointment.doctor}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td><button onclick="deleteAppointment('${appointment.patient}')">Delete</button></td>
            `;
      appointmentsList.appendChild(row);
    });
  }

  // Load appointments on page load
  loadAppointments();

  // Add appointment button functionality
  document
    .getElementById("add-appointment-btn")
    .addEventListener("click", function () {
      const patient = prompt("Enter Patient Name:");
      const doctor = prompt("Enter Doctor Name:");
      const date = prompt("Enter Appointment Date (YYYY-MM-DD):");
      const time = prompt("Enter Appointment Time:");

      if (patient && doctor && date && time) {
        appointments.push({ patient, doctor, date, time });
        appointmentsList.innerHTML = ""; // Clear existing rows
        loadAppointments(); // Reload appointments
      }
    });
});

// Function to delete appointment (dummy function)
function deleteAppointment(patient) {
  alert(`Deleted appointment for: ${patient}`);
}
