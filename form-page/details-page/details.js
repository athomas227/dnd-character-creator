function goBack() {
    window.history.back();
}

function displayCharacterDetails() {
    const name = new URLSearchParams(window.location.search).get('name');
    const race = new URLSearchParams(window.location.search).get('race');
    const characterClass = new URLSearchParams(window.location.search).get('class');
    const background = new URLSearchParams(window.location.search).get('background');
    const alignment = new URLSearchParams(window.location.search).get('alignment');
    const gender = new URLSearchParams(window.location.search).get('gender');
    const language = new URLSearchParams(window.location.search).get('language');

    const characterDetailsElement = document.getElementById('characterDetails');
    characterDetailsElement.innerHTML = `
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Race: </strong>${race}</p>
        <p><strong>Class: </strong>${characterClass}</p>
        <p><strong>Background: </strong>${background}</p>
        <p><strong>Alignment: </strong>${alignment}</p>
        <p><strong>Gender: </strong>${gender}</p>
        <p><strong>Language: </strong>${language}</p>
    `;

    fetch(`https://www.dnd5eapi.co/api/races/${race}`)
    .then(response => response.json())
    .then(data => {
        characterDetailsElement.innerHTML += `
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
    

    fetch(`https://www.dnd5eapi.co/api/classes/${characterClass}`)
    .then(response => response.json())
    .then(data => {
        characterDetailsElement.innerHTML += `
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


    fetch(`https://www.dnd5eapi.co/api/alignments/${alignment}`)
    .then(response => response.json())
    .then(data => {
        characterDetailsElement.innerHTML += `
        <hr/>
        <h3>Alignment Details</h3>
        <p>${data.desc}</p>
        
        `;
    })
    .catch(error => {
        console.error('Error fetching data from D&D 5th Edition API for class:', error);
    });


    fetch(`https://www.dnd5eapi.co/api/languages/${language}`)
    .then(response => response.json())
    .then(data => {
        characterDetailsElement.innerHTML += `
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
}

window.onload = displayCharacterDetails;
