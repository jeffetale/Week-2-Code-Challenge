//import elements
const animalList = document.querySelector('.animal-list ul');
const animalDetails = document.querySelector('.animal-details');
const animalImage = document.querySelector('.animal-image');
const animalName = document.querySelector('.animal-info h3');
const votesCount = document.querySelector('.votes-count');
const voteButton = document.querySelector('.vote-button');

let currentAnimal;

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
        updateSelectedAnimal(listItem);
      });
      animalList.appendChild(listItem);
    });
    // Display initial animal details
    displayAnimalDetails(data[0]);
    // Set the current animal
    currentAnimal = data[0];
    // Highlight the initial selected animal in the list
    const initialSelectedAnimal = animalList.firstChild;
    updateSelectedAnimal(initialSelectedAnimal);
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to display animal details
function displayAnimalDetails(animal) {
  // Update the UI with animal details
  animalImage.innerHTML = `<img src="${animal.image}" alt="${animal.name}">`;
  animalName.textContent = animal.name;
  votesCount.textContent = animal.votes;
  // Set the current animal
  currentAnimal = animal;
}
// Function to update the selected animal in the list
function updateSelectedAnimal(selectedAnimal) {
  // Remove the 'active' class from all list items
  const listItems = animalList.children;
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('active');
  }
  // Add the 'active' class to the selected list item
  selectedAnimal.classList.add('active');
}
// Vote button event listener
voteButton.addEventListener('click', () => {
  currentAnimal.votes++;
  votesCount.textContent = currentAnimal.votes;
});
