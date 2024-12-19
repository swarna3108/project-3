// Sample data for the content grid (Movies and TV Shows)
const contentData = [
  { 
      title: "Stranger Things", 
      image: "./assetsmovie1.jpg" 
  },
  { 
      title: "The Witcher", 
      image: "./assetsmovie3.jpg" 
  },
  { 
      title: "Money Heist", 
      image: "assetsmovie4.jpg" 
  },
  { 
      title: "Breaking Bad", 
      image: "./bre.jpeg" 
  },
  { 
      title: "True Beauty", 
      image: "beau.jpeg" 
  },
  { 
    title: "I Want To Eat Your Pancreas", 
    image: "./assestsmovie6.jpg" 
},
{ 
  title: "Howl's Moving Castle", 
  image: "./howluh.jpg" 
},

];
function displayContent(items) {
  const grid = document.getElementById('contentGrid');
  grid.innerHTML = ''; // Clear previous content
  items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.innerHTML = `<img src="${item.image}" alt="${item.title}" /><p>${item.title}</p>`;
    grid.appendChild(div);
  });
}
// Filter the content based on the search term
document.getElementById('searchBar').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredContent = contentData.filter(item => item.title.toLowerCase().includes(searchTerm));
  displayContent(filteredContent);
});

// Show or hide FAQ answers
const faqItems = document.querySelectorAll('.faq-question');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Handle email submission
function submitEmail() {
  const email = document.getElementById('userEmail').value;
  if (email) {
    alert(`Welcome to Netflix!: ${email}`);
  } else {
    alert('Please enter a valid email.');
  }
}

// Initially display all content
displayContent(contentData);


