document.addEventListener('DOMContentLoaded', function () {
    const employees = [
      {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "Engineering",
        role: { title: "Frontend Developer", level: "Mid" },
        contact: { email: "john.doe@example.com", phone: "123-456-7890" },
        skills: ["JavaScript", "React", "CSS"]
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "Design",
        role: { title: "UI/UX Designer", level: "Senior" },
        contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
        skills: ["Figma", "Sketch", "Adobe XD"]
      },
    ];
  
    const tableBody = document.querySelector('#employeeTable tbody');
  
    function generateEmployeeTable() {
      employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.age}</td>
          <td>${employee.department}</td>
          <td>${employee.role.title}</td>
          <td>${employee.role.level}</td>
          <td>${employee.contact.email}</td>
          <td>${employee.contact.phone}</td>
          <td>${employee.skills.join(', ')}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    generateEmployeeTable();
  });