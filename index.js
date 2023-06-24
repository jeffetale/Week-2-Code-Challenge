
  const animalList = document.querySelector('.animal-list ul');
  const animalDetails = document.querySelector('.animal-details');
  const animalImage = document.querySelector('.animal-image');
  const animalName = document.querySelector('.animal-info h3');
  const votesCount = document.querySelector('.votes-count');
  const voteButton = document.querySelector('.vote-button');

  // Fetch data from db.json
  fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
      // Display animal names in the list
      data.forEach(animal => {
        const listItem = document.createElement('li');
        listItem.textContent = animal.name;
        listItem.addEventListener('click', () => {
          displayAnimalDetails(animal);
        });
        animalList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));

