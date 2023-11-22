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


    // Get the HTML element where mock details will be displayed
    const fakeDetailsElement = document.getElementById('fakeDetails');

    // Fetch and display additional details from the D&D 5th Edition API for dragonborn race
    fetch(`https://www.dnd5eapi.co/api/races/dragonborn`)
    .then(response => response.json())
    .then(data => {
        fakeDetailsElement.innerHTML += `
        <hr/>
        <h3>Race Details</h3>
        <p><strong>Speed: </strong>${data.speed}</p>
        <p><strong>Alignment: </strong>${data.alignment}</p>
        <p><strong>Age: </strong>${data.age}</p>
        <p><strong>Size: </strong>${data.size}</p>
        <p><strong>Size Description: </strong>${data.size_description}</p>
        <p><strong>Languages: </strong>${data.languages.map(traits => traits.name).join(', ')}</p>
        <p><strong>Language Description: </strong>${data.language_desc}</p>
        <p><strong>Traits: </strong>${data.traits.map(traits => traits.name).join(', ')}</p>
        <p><strong>Starting Proficiencies: </strong>${data.starting_proficiencies.map(proficiency => proficiency.name).join(', ')}</p>
        <p><strong>Ability Bonuses: </strong>${data.ability_bonuses.map(ability => `${ability.bonus} ${ability.ability_score.name}`).join(', ')}</p>
        <p><strong>Subraces: </strong>${data.subraces.map(subraces => subraces.name).join(', ')}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API:', error);
    });

    // Fetch and display additional details from the D&D 5th Edition API for paladin class
    fetch(`https://www.dnd5eapi.co/api/classes/paladin`)
    .then(response => response.json())
    .then(data => {
        fakeDetailsElement.innerHTML += `
        <hr/>
        <h3>Class Details</h3>
        <p><strong>Hit Dice: </strong>${data.hit_die}</p>
        <p><strong>Proficiencies: </strong>${data.proficiencies.map(proficiency => proficiency.name).join(', ')}</p>
        <p><strong>Saving Throw: </strong>${data.saving_throws.map(throws => throws.name).join(', ')}</p>
        <p><strong>Starting Equipment: </strong>${data.starting_equipment.map(equip => `${equip.quantity} ${equip.equipment.name}`).join(', ')} </p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API for class:', error);
    });


    // Fetch and display additional details from the D&D 5th Edition API for lawful evil alignment
    fetch(`https://www.dnd5eapi.co/api/alignments/lawful-evil`)
    .then(response => response.json())
    .then(data => {
        fakeDetailsElement.innerHTML += `
        <hr/>
        <h3>Alignment Details</h3>
        <p>${data.desc}</p>
        
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API for class:', error);
    });


    // Fetch and display additional details from the D&D 5th Edition API for draconic language
    fetch(`https://www.dnd5eapi.co/api/languages/draconic`)
    .then(response => response.json())
    .then(data => {
        fakeDetailsElement.innerHTML += `
        <hr/>
        <h3>Language Details</h3>
        <p><strong>Language: </strong>${data.name}</p>
        <p><strong>Type: </strong>${data.type}</p>
        <p><strong>Typical Speakers: </strong>${data.typical_speakers.map(speakers => speakers).join(', ')}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API for class:', error);
    });

  });
