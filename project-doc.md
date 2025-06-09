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

- [ ] **5. Advanced Features**
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

## Change History
1. Initial plan created.
2. Project setup and base interface implemented.
3. Core command system implemented.
4. Added multiple color themes and theme command.
5. Implemented welcome message, progress bars, cursor command, and ASCII clock.
6. Added interactive world animation and basic Snake and Tetris games with localStorage leaderboards.

