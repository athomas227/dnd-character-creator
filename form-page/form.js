document.addEventListener('DOMContentLoaded', function() {
    function fillWithRandomOptionIfDefault(selectId) {
      const select = document.getElementById(selectId);
      if (select.selectedIndex === 0) {
        const options = select.getElementsByTagName('option');
        const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
        select.selectedIndex = randomIndex;
      }
    }
  
    function resetSelects() {
      const selects = document.getElementsByTagName('select');
      for (const select of selects) {
        select.selectedIndex = 0;
      }
    }
  
    document.getElementById('generateButton').addEventListener('click', function() {
      fillWithRandomOptionIfDefault('race');
      fillWithRandomOptionIfDefault('class');
      fillWithRandomOptionIfDefault('background');
      fillWithRandomOptionIfDefault('alignment');
      fillWithRandomOptionIfDefault('gender');
      fillWithRandomOptionIfDefault('language');
    });
  
    document.getElementById('resetButton').addEventListener('click', function() {
      resetSelects();
    });

    document.getElementById('getDetailsButton').addEventListener('click', function() {
      const playerName = document.getElementById('name').value;

      if (!playerName.trim()) {
        alert('Please enter name');
        return;
      }

      const name = document.getElementById('name').value;
      const race = document.getElementById('race').value;
      const characterClass = document.getElementById('class').value;
      const background = document.getElementById('background').value;
      const alignment = document.getElementById('alignment').value;
      const gender = document.getElementById('gender').value;
      const language = document.getElementById('language').value;

      window.location.href = `details-page/details.html?name=${name}&race=${race}&class=${characterClass}&background=${background}&alignment=${alignment}&gender=${gender}&language=${language}`;
    });
  });