// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
  // Function to fill a dropdown with a random option if the default option is selected  
  function fillWithRandomOptionIfDefault(selectId) {
      const select = document.getElementById(selectId);
      // Check if the default option is selected
      if (select.selectedIndex === 0) {
        const options = select.getElementsByTagName('option');
        // Generate a random index to select a non-default option
        const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
        // Set the selected index to the randomly generated index
        select.selectedIndex = randomIndex;
      }
    }
  
    // Function to reset all dropdowns to their default option
    function resetSelects() {
      const selects = document.getElementsByTagName('select');
      // Loop through all dropdowns and set the selected index to the default (0)
      for (const select of selects) {
        select.selectedIndex = 0;
      }
    }
  
    // Event listener for the 'Generate' button click
    document.getElementById('generateButton').addEventListener('click', function() {
      // Fill each dropdown with a random option if the default option is selected
      fillWithRandomOptionIfDefault('race');
      fillWithRandomOptionIfDefault('class');
      fillWithRandomOptionIfDefault('background');
      fillWithRandomOptionIfDefault('alignment');
      fillWithRandomOptionIfDefault('gender');
      fillWithRandomOptionIfDefault('language');
    });
  
    // Event listener for the 'Reset' button click
    document.getElementById('resetButton').addEventListener('click', function() {
      // Reset all dropdowns to their default option
      resetSelects();
    });

    // Event listener for the 'Get Details' button click
    document.getElementById('getDetailsButton').addEventListener('click', function() {
      // Get the player name from the input field
      const playerName = document.getElementById('name').value;

      // Check if the player name is not empty or just whitespace
      if (!playerName.trim()) {
        // Alert the user to enter a name if the input is empty
        alert('Please enter name');
        return;
      }

      // Get values from various input fields
      const name = document.getElementById('name').value;
      const race = document.getElementById('race').value;
      const characterClass = document.getElementById('class').value;
      const background = document.getElementById('background').value;
      const alignment = document.getElementById('alignment').value;
      const gender = document.getElementById('gender').value;
      const language = document.getElementById('language').value;

      // Redirect to the details page with the gathered parameters
      window.location.href = `details-page/details.html?name=${name}&race=${race}&class=${characterClass}&background=${background}&alignment=${alignment}&gender=${gender}&language=${language}`;
    });
  });