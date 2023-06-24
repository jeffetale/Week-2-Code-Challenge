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
      // Display initial animal details
      displayAnimalDetails(data[0]);
   })
   .catch(error => console.error('Error fetching data:', error));
// Function to display animal details
function displayAnimalDetails(animal) {
  // Update the UI with animal details
  animalImage.innerHTML = `<img src="${animal.image}" alt="${animal.name}">`;
  animalName.textContent = animal.name;
  votesCount.textContent = animal.votes;

   // Vote counter
   voteButton.addEventListener('click', () => {
    animal.votes++;
    votesCount.textContent = animal.votes;
  });

}
  
   
