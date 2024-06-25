const currentUser = 'Grace Hopper';

// Define welcome message
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excited welcome message
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define short greeting
const firstInitial = currentUser[0]; // Get the first character (initial) of the name
const shortGreeting = `Welcome, ${firstInitial}!`;

// Export variables (if needed)
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};


