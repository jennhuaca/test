const leafContainer = document.querySelector('.falling-leaves');
const numberOfLeaves = 20; // Number of leaves to fall

// Function to create falling leaves
function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  
  // Randomize leaf position and animation timing
  const startX = Math.random() * window.innerWidth; // Random horizontal position
  const animationDuration = Math.random() * 5 + 5; // Randomize animation duration (5s to 10s)
  const delay = Math.random() * 5; // Random delay before starting

  // Set styles for leaf's starting position and animation
  leaf.style.left = `${startX}px`;
  leaf.style.animationDuration = `${animationDuration}s`;
  leaf.style.animationDelay = `${delay}s`;

  leafContainer.appendChild(leaf);

  // Remove leaf from DOM after animation completes to prevent memory issues
  setTimeout(() => {
    leaf.remove();
  }, (animationDuration + delay) * 1000);
}

// Create multiple leaves
for (let i = 0; i < numberOfLeaves; i++) {
  createLeaf();
}

// Continuously create new leaves every 1 second
setInterval(createLeaf, 1000);
