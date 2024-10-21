document.addEventListener("DOMContentLoaded", function () {
  const recordsList = document.getElementById("records-list");

  // Sample medical records data
  const records = [
    {
      patient: "Utsha Chowdhury",
      date: "2024-10-01",
      description: "Regular Check-up",
    },
    {
      patient: "Nabila akhter",
      date: "2024-10-02",
      description: "Flu Symptoms",
    },
  ];

  // Function to load records into the table
  function loadRecords() {
    records.forEach((record) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${record.patient}</td>
                <td>${record.date}</td>
                <td>${record.description}</td>
                <td><button onclick="deleteRecord('${record.patient}')">Delete</button></td>
            `;
      recordsList.appendChild(row);
    });
  }

  // Load records on page load
  loadRecords();
});

// Function to delete record (dummy function)
function deleteRecord(patient) {
  alert(`Deleted medical record for: ${patient}`);
}
