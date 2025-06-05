# Dragon Repeller RPG 🐉⚔️

A browser-based, text-adventure RPG game where players must defeat a mighty dragon to save the town. Navigate through different locations, purchase weapons and health, battle various monsters, and discover hidden easter eggs in this classic role-playing adventure.

## 🎮 Game Overview

**Dragon Repeller** is an interactive text-based RPG that runs directly in your web browser. Players start in a town square and must prepare themselves by gathering resources, purchasing better weapons, and gaining experience before facing the ultimate challenge - the dragon that's terrorizing the town.

### Key Features

- **Progressive Combat System**: Battle increasingly difficult monsters (slime → fanged beast → dragon)
- **Weapon & Inventory Management**: Purchase and upgrade weapons with different power levels
- **Health & Resource Management**: Buy health potions and manage gold carefully
- **Experience Points System**: Gain XP from battles to increase your combat effectiveness
- **Dynamic UI**: Real-time updates of player stats and monster information
- **Victory Celebration**: Confetti animation upon defeating the dragon
- **Hidden Mini-Game**: Discover the secret easter egg number guessing game
- **Replay System**: Restart and play again after winning or losing

## 🛠️ Technologies Used

### Frontend Technologies

- **HTML5**: Semantic markup and game structure
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript (ES6+)**: Game logic, DOM manipulation, and event handling

### External Libraries

- **Canvas Confetti**: Victory celebration animations
  - CDN: `https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js`

### Game Architecture

- Object-oriented design with modular functions
- Location-based navigation system
- Dynamic UI updates through DOM manipulation
- Random number generation for combat mechanics

## 🚀 Getting Started

### Prerequisites

No special software installation required! You only need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for confetti library CDN)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rpg-game
   ```

2. **No build process required** - This is a client-side only application

3. **Launch the game**

   - **Option 1**: Double-click `index.html` to open in your default browser
   - **Option 2**: Use a local server for better development experience:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (if you have http-server installed)
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```

   - **Option 3**: Use VS Code Live Server extension

4. **Start playing** by opening `http://localhost:8000` (if using local server) or directly opening the HTML file

## 📁 Project Structure

```
rpg-game/
├── index.html          # Main HTML file and game structure
├── script.js           # Core game logic and functionality
├── style.css          # Game styling and visual design
└── README.md          # Project documentation
```

### File Breakdown

- **`index.html`**: Contains the game's HTML structure, player stats display, control buttons, and CDN imports
- **`script.js`**: Implements all game mechanics including combat, navigation, inventory management, and UI updates
- **`style.css`**: Defines the visual styling with a retro dark theme and responsive layout

## 🎯 How to Play

### Game Flow

1. **Start**: Begin in the town square with 100 health, 100 gold, and a basic stick
2. **Prepare**: Visit the store to buy health potions (10 gold) and better weapons (30 gold)
3. **Train**: Go to the cave to fight weaker monsters (slime, fanged beast) to gain XP and gold
4. **Final Battle**: When ready, fight the dragon to win the game
5. **Victory**: Defeat the dragon to complete the game with a celebration!

### Game Mechanics

- **Combat**: Attack, dodge, or run during battles
- **Weapons**: Stick (5 power) → Dagger (30) → Claw Hammer (50) → Sword (100)
- **Monster Progression**: Slime (15 HP) → Fanged Beast (60 HP) → Dragon (300 HP)
- **Weapon Breaking**: 10% chance weapons break during combat (except your last weapon)
- **Easter Egg**: Find the secret number guessing mini-game after defeating monsters

### Controls

- **Button Navigation**: Use the three main buttons to navigate and make choices
- **Dynamic Interface**: Buttons change based on your current location
- **Real-time Stats**: Monitor your XP, Health, and Gold at all times

## 🎨 Game Features

### Combat System

- Turn-based combat with attack, dodge, and run options
- Weapon effectiveness scales with XP level
- Monster difficulty increases progressively
- Strategic resource management required

### Economy System

- Earn gold by defeating monsters
- Purchase health potions and weapons
- Sell weapons when inventory is full
- Balance spending between offense and defense

### Visual Experience

- Retro-styled dark theme interface
- Monster stats appear during combat
- Confetti celebration for victory
- Clean, readable typography

## 🐛 Troubleshooting

### Common Issues

**Game doesn't load confetti effects:**

- Ensure you have an active internet connection
- Check browser console for CDN loading errors
- Try refreshing the page

**Buttons not responding:**

- Check browser console for JavaScript errors
- Ensure all files are in the same directory
- Try opening in a different browser

**Layout appears broken:**

- Verify that `style.css` is loading correctly
- Check file paths are correct
- Clear browser cache and reload

### Browser Compatibility

- **Recommended**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **Minimum**: Any browser supporting ES6 JavaScript features

## 🔧 Development

### Code Structure

The game uses a location-based system where each location has:

- Button text arrays
- Button function arrays
- Location-specific text descriptions

### Key Functions

- `update(location)`: Updates UI based on current location
- `attack()`: Handles combat mechanics
- `buyWeapon()`/`buyHealth()`: Store transactions
- `pick(guess)`: Easter egg mini-game logic

### Customization Ideas

- Add more weapons or monsters
- Create additional locations
- Implement character classes
- Add sound effects
- Create save/load functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs by opening issues
- Suggest new features
- Submit pull requests for improvements
- Enhance documentation

## 🎮 Future Enhancements

- Save game progress to localStorage
- Add character customization
- Implement multiple story paths
- Add sound effects and background music
- Create mobile-responsive design improvements
- Add more complex combat mechanics

---

**Enjoy your adventure, brave dragon slayer!** 🗡️✨
