document.addEventListener("DOMContentLoaded", function () {
  const patientList = document.getElementById("patient-list");

  // Sample patient data
  const patients = [
    { name: "Utsha Chowdhury", age: 30, gender: "Male" },
    { name: "Nabila akhter", age: 25, gender: "Female" },
  ];

  // Function to load patients into the table
  function loadPatients() {
    patients.forEach((patient) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td><button onclick="deletePatient('${patient.name}')">Delete</button></td>
            `;
      patientList.appendChild(row);
    });
  }

  // Load patients on page load
  loadPatients();

  // Add patient button functionality
  document
    .getElementById("add-patient-btn")
    .addEventListener("click", function () {
      const name = prompt("Enter Patient Name:");
      const age = prompt("Enter Patient Age:");
      const gender = prompt("Enter Patient Gender:");

      if (name && age && gender) {
        patients.push({ name, age, gender });
        patientList.innerHTML = ""; // Clear existing rows
        loadPatients(); // Reload patients
      }
    });
});

// Function to delete patient (dummy function)
function deletePatient(name) {
  alert(`Deleted patient: ${name}`);
}
