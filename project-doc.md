# Personal Portfolio Terminal Website

## Project Goal
Create a personal portfolio website that mimics a retro terminal interface using only HTML, CSS, and JavaScript (no frameworks or build tools). The site should support commands for navigation, theming, fun features like games and ASCII art, and must be accessible and responsive.

## Task Plan and Checklist

- [x] **1. Project Setup**
  - [x] 1.1 Create base directory structure (`index.html`, `css/`, `js/`, `assets/`)
  - [x] 1.2 Initialize README with project description
  - [x] 1.3 Add this `project-doc.md` documenting plan and progress

- [x] **2. Base Terminal Interface**
  - [x] 2.1 Implement HTML skeleton with terminal layout
  - [x] 2.2 Style default dark theme with CSS variables
  - [x] 2.3 Basic JS for input focus, history, and scrolling

- [x] **3. Core Command System**
  - [x] 3.1 Implement command parser and dispatcher
  - [x] 3.2 Implement built-in commands: `help`, `about`, `projects`, `skills`, `contact`, `github`, `linkedin`, `email`, `theme`, `clear`, `cowsay`
  - [x] 3.3 Add five extra commands: `joke`, `fortune`, `art`, `weather` (dummy), `stats`

- [x] **4. Theming**
  - [x] 4.1 Define CSS themes (`dark`, `light`, `dracula`, `onedark`, `tokyo`, `monokai`, `nord`, `cyberpunk`, `hacker`, `retro`, `ocean`)
  - [x] 4.2 Implement `theme` command to switch themes via `data-theme`


  - Added `helpInfo` and `projectsData` to provide real output for commands.
9. Replaced placeholder command outputs with real data and added detailed help text.
- [x] **5. Advanced Features**
  - [x] 5.1 ASCII welcome message and large art
  - [x] 5.2 Animated progress bars for system stats
  - [x] 5.3 Cursor style selection (`block`, `line`, `underscore`)
  - [x] 5.4 Real-time ASCII clock
  - [x] 5.5 Interactive ASCII World component

- [x] **6. Games and Leaderboards**
  - [x] 6.1 Implement ASCII Snake game with leaderboard in `localStorage`
  - [x] 6.2 Implement ASCII Tetris simulation with leaderboard

## Implementation Notes
- Use `localStorage` for offline storage of leaderboards and preferences.
- Keep code modular: separate command definitions into functions.
- Document any issues and resolutions here as development progresses.
  - Implemented command registry object for easy extension.

  - Exposed `print` as `window.termPrint` for use in game modules.


## Change History
1. Initial plan created.
2. Project setup and base interface implemented.
3. Core command system implemented.
4. Added multiple color themes and theme command.
5. Implemented welcome message, progress bars, cursor command, and ASCII clock.
6. Added interactive world animation and basic Snake and Tetris games with localStorage leaderboards.
7. Fixed scope issue for game functions by exposing `print` globally and updating `startSnakeGame` and `startTetrisGame`.
8. Added welcome ASCII art, animated stats bars, interactive world controls, random art command, leaderboard command, assets folder, and fixed `cowsay`.

## Issues

All issues identified have been resolved:
- ~~`print` not defined in game functions.~~
- ~~Missing advanced features and welcome ASCII art.~~
- ~~`art` command placeholder.~~
- ~~Static `stats` command.~~
- ~~Non-interactive `world` command.~~
- ~~No leaderboard command.~~
- ~~Missing `assets/` directory.~~
- ~~Malformed `cowsay` output.~~
- ~~Welcome message lacked ASCII art.~~

## Issue Resolution Plan

### Issue 1: `print` is not defined in game functions
- [x] **Investigate scope**: Check how `print` is defined in `app.js` and why `startSnakeGame` and `startTetrisGame` cannot access it.
- [x] **Expose `print` globally**: Attach the `print` function to `window` or pass it as an argument to the game functions.
- [x] **Update game functions**: Modify `startSnakeGame` and `startTetrisGame` to use the global `print` or received parameter.
- [x] **Verify**: Run the `snake` and `tetris` commands and confirm no errors appear in the console.

### Issue 2: Missing advanced features
- [x] **Add large ASCII welcome art**: Create a multiline ASCII art string and display it in `welcome()`.
- [x] **Animated progress bars**: Enhance `stats` command to animate bars over time instead of static text.
- [x] **Interactive world component**: Replace placeholder spinning text with a small canvas or ASCII animation reacting to input.

### Issue 3: `art` command placeholder
- [x] **Create ASCII art collection**: Store several art pieces in an array or object.
- [x] **Implement random selection**: `art` command should print a random piece from the collection.

### Issue 4: `stats` command lacks animation
- [x] **Implement animation loop**: Update bars smoothly using `setInterval` until reaching target values.

### Issue 5: `world` command not interactive
- [x] **Design interaction**: Decide on keyboard/mouse controls for the ASCII world.
- [x] **Implement controls**: Update `world` command to respond to events and update output accordingly.

### Issue 6: No leaderboard view commands
- [x] **Create `leaderboard` command**: Display top scores from `snakeScores` or `tetrisScores` in `localStorage`.
- [x] **Support arguments**: `leaderboard snake` or `leaderboard tetris` to choose game.

### Issue 7: Missing `assets/` directory
- [x] **Create directory or update docs**: Either add `assets/` folder if needed for future images/files or remove reference from docs.

### Issue 8: Malformed `cowsay`
- [x] **Fix template**: Adjust string formatting so ASCII cow renders correctly around the message.

### Issue 9: Welcome message lacks ASCII art
- [x] **Integrate art**: Update `welcome()` to print the large ASCII art from Issue 2 followed by greeting text.

