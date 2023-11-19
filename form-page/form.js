// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to fill each select element with a random option if it's still at the default value
    function fillWithRandomOptionIfDefault(selectId) {
      const select = document.getElementById(selectId);
      if (select.selectedIndex === 0) {
        const options = select.getElementsByTagName('option');
        const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
        select.selectedIndex = randomIndex;
      }
    }
  
    // Function to reset each select element to its default value
    function resetSelects() {
      const selects = document.getElementsByTagName('select');
      for (const select of selects) {
        select.selectedIndex = 0; // Set to the default option
      }
    }
  
    // Event listener for the "Generate" button
    document.getElementById('generateButton').addEventListener('click', function() {
      fillWithRandomOptionIfDefault('race');
      fillWithRandomOptionIfDefault('class');
      fillWithRandomOptionIfDefault('background');
      fillWithRandomOptionIfDefault('alignment');
      fillWithRandomOptionIfDefault('gender');
      fillWithRandomOptionIfDefault('language');
    });
  
    // Event listener for the "Reset" button
    document.getElementById('resetButton').addEventListener('click', function() {
      resetSelects();
    });

    // Event listener for the "Get Details" button
    document.getElementById('getDetailsButton').addEventListener('click', function() {
      // Get the player's name
      const playerName = document.getElementById('name').value;

      // Check if the player's name is empty
      if (!playerName.trim()) {
        // Show an alert if the player's name is empty
        alert('Please enter name');
        return; // Stop further execution
      }

      // Get selected values from the select elements
      const name = document.getElementById('name').value;
      const race = document.getElementById('race').value;
      const characterClass = document.getElementById('class').value;
      const background = document.getElementById('background').value;
      const alignment = document.getElementById('alignment').value;
      const gender = document.getElementById('gender').value;
      const language = document.getElementById('language').value;

      
  
      // Redirect to the details page with query parameters
      window.location.href = `details-page/details.html?name=${name}&race=${race}&class=${characterClass}&background=${background}&alignment=${alignment}&gender=${gender}&language=${language}`;
    });
  });