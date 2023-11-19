// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Function to display character details
function displayCharacterDetails() {
    // Retrieve values from the query parameters
    const name = new URLSearchParams(window.location.search).get('name');
    const race = new URLSearchParams(window.location.search).get('race');
    const characterClass = new URLSearchParams(window.location.search).get('class');
    const background = new URLSearchParams(window.location.search).get('background');
    const alignment = new URLSearchParams(window.location.search).get('alignment');
    const gender = new URLSearchParams(window.location.search).get('gender');
    const language = new URLSearchParams(window.location.search).get('language');

    // Display details in the characterDetails div
    const characterDetailsElement = document.getElementById('characterDetails');
    characterDetailsElement.innerHTML = `
        <p>Name: ${name}</p>
        <p>Race: ${race}</p>
        <p>Class: ${characterClass}</p>
        <p>Background: ${background}</p>
        <p>Alignment: ${alignment}</p>
        <p>Gender: ${gender}</p>
        <p>Language: ${language}</p>
    `;

    // Fetch additional details from the D&D 5th Edition API
    fetch(`https://www.dnd5eapi.co/api/races/${race}`)
    .then(response => response.json())
    .then(data => {
        // Update characterDetailsElement with API information
        characterDetailsElement.innerHTML += `
        <hr/>
        <p>Race Details:</p>
        <p>Speed: ${data.speed}</p>
        <p>Alignment: ${data.alignment}</p>
        <p>Age: ${data.age}</p>
        <p>Size: ${data.size}</p>
        <p>Size Description: ${data.size_description}</p>
        <p>Languages: ${data.languages.map(traits => traits.name).join(', ')}
        <p>Language Description: ${data.language_desc}</p>
        <p>Traits: ${data.traits.map(traits => traits.name).join(', ')}</p>
        <p>Starting Proficiencies: ${data.starting_proficiencies.map(proficiency => proficiency.name).join(', ')}
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API:', error);
    });
    

    fetch(`https://www.dnd5eapi.co/api/classes/${characterClass}`)
    .then(response => response.json())
    .then(data => {
        // Update characterDetailsElement with API information
        characterDetailsElement.innerHTML += `
        <hr/>
        <p>Class Details:</p>
        <p>Hit Dice: ${data.hit_die}</p>
        <p>Proficiencies: ${data.proficiencies.map(proficiency => proficiency.name).join(', ')}</p>
        <p>Saving Throw: ${data.saving_throws.map(throws => throws.name).join(', ')}</p>
        <p>Starting Equipment: ${data.starting_equipment.map(equip => `${equip.quantity} ${equip.equipment.name}`).join(', ')} </p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API for class:', error);
    });

}

// Call the displayCharacterDetails function when the page loads
window.onload = displayCharacterDetails;
