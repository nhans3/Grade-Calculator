// CS10 Grade Calculator

document.getElementById("output-btn").addEventListener("click", calculateGrade);

function calculateGrade() {
  let client1 = +document.getElementById("client-input").value;
  let struct1 = +document.getElementById("struc-input").value;
  let struct2 = +document.getElementById("struc2-input").value;
  let client2 = +document.getElementById("client2-input").value;
  let project = +document.getElementById("project-input").value;

  let grade = (client1 + struct1 + struct2 + client2 + project) / 5;

  document.getElementById("output").innerHTML = Math.round(grade);
}
