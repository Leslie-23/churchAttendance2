/* function calculateAttendance() {
  // Get values from input fields
  const totalMales = parseInt(document.getElementById("totalMales").value);
  const totalFemales = parseInt(document.getElementById("totalFemales").value);
  const boys = parseInt(document.getElementById("boys").value);
  const girls = parseInt(document.getElementById("girls").value);
  const totalCars = parseInt(document.getElementById("totalCars").value);
  const latecomersMales = parseInt(
    document.getElementById("latecomersMales").value
  );
  const latecomersFemales = parseInt(
    document.getElementById("latecomersFemales").value
  );
  const latecomersChildren = parseInt(
    document.getElementById("latecomersChildren").value
  );

  // Calculate total attendance
  const totalMalesAttendance = totalMales + latecomersMales;
  const totalFemalesAttendance = totalFemales + latecomersFemales;
  const totalChildrenAttendance = boys + girls + latecomersChildren;

  // Display total attendance
  document.getElementById("displayMales").textContent = totalMalesAttendance;
  document.getElementById("displayFemales").textContent =
    totalFemalesAttendance;
  document.getElementById("displayChildren").textContent =
    totalChildrenAttendance;
  document.getElementById("displayCars").textContent = totalCars;
}
 */

function calculateAttendance() {
  // Get all input fields
  const maleInputs = document.querySelectorAll('input[id^="totalMales"]');
  const femaleInputs = document.querySelectorAll('input[id^="totalFemales"]');
  const boysInputs = document.querySelectorAll('input[id="boys"]');
  const girlsInputs = document.querySelectorAll('input[id="girls"]');
  const carsInput = document.getElementById("totalCars");

  // Initialize variables to store totals
  let totalMales = 0;
  let totalFemales = 0;
  let totalChildren = 0;

  // Calculate total males
  maleInputs.forEach((input) => {
    totalMales += parseInt(input.value) || 0; // Add value to totalMales, default to 0 if input is empty or not a number
  });

  // Calculate total females
  femaleInputs.forEach((input) => {
    totalFemales += parseInt(input.value) || 0; // Add value to totalFemales, default to 0 if input is empty or not a number
  });

  // Calculate total children (boys and girls)
  boysInputs.forEach((input) => {
    totalChildren += parseInt(input.value) || 0; // Add value to totalChildren, default to 0 if input is empty or not a number
  });
  girlsInputs.forEach((input) => {
    totalChildren += parseInt(input.value) || 0; // Add value to totalChildren, default to 0 if input is empty or not a number
  });

  // Calculate total cars
  const totalCars = parseInt(carsInput.value) || 0; // Get value of total cars, default to 0 if input is empty or not a number

  // Display total attendance
  document.getElementById("displayMales").textContent = totalMales;
  document.getElementById("displayFemales").textContent = totalFemales;
  document.getElementById("displayChildren").textContent = totalChildren;
  document.getElementById("displayCars").textContent = totalCars;
  document.getElementById("displayTotal").textContent =
    totalMales + totalFemales + totalChildren;
}
