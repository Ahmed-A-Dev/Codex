
(function() {
  const output = document.getElementById('output');
  const input = document.getElementById('command');
  window.terminalInput = input;
  let history = [];
  let historyIndex = 0;
  const welcomeArt = `
   ____          _
  / ___|___   __| | ___  _ __
 | |   / _ \ / _\` |/ _ \| '__|
 | |__| (_) | (_| | (_) | |
  \____\___/ \__,_|\___/|_|
  `;
  const artCollection = [
`  _   _
 (.)_(.)
  (o o)
   \\_/`,
` /\\/\\
( o_o )
 > ^ <`,
`  ,--.
 ( oo|\\
_/  /\\
(__)
`];

  const helpInfo = {
    help: 'Show help information',
    about: 'About the site owner',
    projects: 'List portfolio projects',
    skills: 'Show technical skills',
    contact: 'Display contact information',
    github: 'Open GitHub profile',
    linkedin: 'Open LinkedIn profile',
    email: 'Copy email address to clipboard',
    theme: 'Change the color theme',
    clear: 'Clear the terminal output',
    cowsay: 'Display an ASCII cow',
    joke: 'Random programming joke',
    fortune: 'Random fortune message',
    art: 'Show a random ASCII art piece',
    weather: 'Show fake local weather',
    stats: 'Display animated system stats',
    cursor: 'Change the cursor style',
    snake: 'Play the Snake game',
    tetris: 'Play the Tetris simulation',
    leaderboard: 'Show game high scores',
    world: 'Interactive ASCII world demo'
  };

  const projectsData = [
    {name: 'Terminal Portfolio', desc: 'This interactive portfolio site.'},
    {name: 'Vanilla JS Games', desc: 'Collection of small browser games.'},
    {name: 'Blog Template', desc: 'A lightweight static blog design.'}
  ];

  function asciiClock() {
    const clockLine = document.createElement('div');
    output.appendChild(clockLine);
    function update() {
      const now = new Date();
      clockLine.textContent = now.toLocaleString();
    }
    setInterval(update, 1000);
    update();
  }

  function welcome() {
    print(welcomeArt);
    print('Welcome to Codex Portfolio!');
    print('Type "help" to see available commands.');
  }

  function print(text, className) {
    const div = document.createElement('div');
    if (className) div.className = className;
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  // expose print so game functions can use it
  window.termPrint = print;

  const commands = {
    help(args) {
      if (args.length === 0) {
        print('Available commands:');
        Object.keys(commands).forEach(c => {
          const desc = helpInfo[c] || '';
          print(`  ${c} - ${desc}`);
        });
      } else {
        const cmd = args[0];
        if (commands[cmd]) {
          print(`${cmd}: ${helpInfo[cmd] || 'No details available.'}`);
        } else {
          print(`No help available for ${cmd}`, 'error');
        }
      }
    },
    about() {
      print('Codex is a software engineer who loves minimal UIs and JavaScript.');
    },
    projects() {
      projectsData.forEach(p => print(`${p.name} - ${p.desc}`));
    },
    skills() {
      print('Skills: JavaScript, HTML, CSS, Node.js, Git');
    },
    contact() {
      print('Email: example@example.com');
      print('GitHub: https://github.com/codexuser');
      print('LinkedIn: https://www.linkedin.com/in/codexuser');
    },
    github() {
      window.open('https://github.com/codexuser', '_blank');
    },
    linkedin() {
      window.open('https://www.linkedin.com/in/codexuser', '_blank');
    },
    email() {
      navigator.clipboard.writeText('example@example.com');
      print('Email copied to clipboard: example@example.com');
    },
    theme(args) {
      const theme = args[0];
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
      } else {
        print('Usage: theme [name]', 'error');
      }
    },
    clear() {
      output.innerHTML = '';
    },
    cowsay(args) {
      const msg = args.join(' ') || 'moo';
      const top = ' ' + '_'.repeat(msg.length + 2);
      const bottom = ' ' + '-'.repeat(msg.length + 2);
      const cow = `        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||`;
      print(top);
      print(`< ${msg} >`);
      print(bottom);
      print(cow);
    },
    joke() {
      print('Why do programmers prefer dark mode? Because light attracts bugs.');
    },
    fortune() {
      print('You will write great code today!');
    },
    art() {
      const conditions = ['sunny','cloudy','rainy','windy','foggy','snowy'];
      const cond = conditions[Math.floor(Math.random()*conditions.length)];
      const temp = Math.floor(Math.random()*40)+50;
      print(`Weather for ${city}: ${cond}, ${temp}\u00B0F`);
      const art = artCollection[Math.floor(Math.random()*artCollection.length)];
      print(art);

    },
    weather(args) {
      const city = args.join(' ') || 'your location';
      print(`Weather for ${city} is sunny.`);
    },
    stats() {

      const lines = {
        cpu: document.createElement('div'),
        ram: document.createElement('div'),
        disk: document.createElement('div')
      };
      Object.values(lines).forEach(l => output.appendChild(l));
      const targets = {cpu:40, ram:70, disk:50};
      const values = {cpu:0, ram:0, disk:0};
      function bar(v){
        const filled = Math.round(v / 5);
        return '[' + '#'.repeat(filled) + '-'.repeat(20 - filled) + `] ${v}%`;
      }
      const interval = setInterval(() => {
        let done = true;
        for (const key in values) {
          if (values[key] < targets[key]) {
            values[key]++;
            lines[key].textContent = key.toUpperCase() + ' ' + bar(values[key]);
            done = false;
          }
        }
        if (done) clearInterval(interval);
      }, 50);

    },
    cursor(args) {
      const style = args[0];
      const cursorEl = document.getElementById('cursor');
      if (style === 'line') {
        cursorEl.textContent = '|';
      } else if (style === 'underscore') {
        cursorEl.textContent = '_';
      } else {
        cursorEl.textContent = '█';
      }
    },
    snake() {
      startSnakeGame();
    },
    tetris() {
      startTetrisGame();
    },

    leaderboard(args) {
      const game = args[0] === 'tetris' ? 'tetris' : 'snake';
      const key = game === 'tetris' ? 'tetrisScores' : 'snakeScores';
      const scores = JSON.parse(localStorage.getItem(key)||'[]').sort((a,b)=>b.score - a.score);
      if (scores.length === 0) {
        print('No scores yet.');
        return;
      }
      print(game.toUpperCase() + ' LEADERBOARD');
      scores.forEach(s => print(`${s.score} - ${s.date.slice(0,10)}`));
    },
    world() {
      const width = 20, height = 10;
      const worldDiv = document.createElement('div');
      output.appendChild(worldDiv);
      let player = {x:Math.floor(width/2), y:Math.floor(height/2)};
      function draw(){
        let g='';
        for(let y=0;y<height;y++){
          let r='';
          for(let x=0;x<width;x++){
            r += (x===player.x && y===player.y) ? '@' : '·';
          }
          g += r+'\n';
        }
        worldDiv.textContent=g;
      }
      function key(e){
        if(e.key==='ArrowUp') player.y=Math.max(0,player.y-1);
        if(e.key==='ArrowDown') player.y=Math.min(height-1,player.y+1);
        if(e.key==='ArrowLeft') player.x=Math.max(0,player.x-1);
        if(e.key==='ArrowRight') player.x=Math.min(width-1,player.x+1);
        draw();
      }
      document.addEventListener('keydown', key);
      draw();
      setTimeout(()=>{
        document.removeEventListener('keydown', key);
        print('World animation done.');
      },5000);

    }
  };

  function handleCommand(cmd) {
    const args = cmd.trim().split(/\s+/);
    const command = args.shift();
    if (commands[command]) {
      commands[command](args);
    } else if (command) {
      print(`Command '${command}' not found. Type 'help' to see all available commands.`, 'error');
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value;
      print(`$ ${cmd}`);
      handleCommand(cmd);
      history.push(cmd);
      historyIndex = history.length;
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = '';
      }
    }
  });

  // focus input on click anywhere
  document.getElementById('terminal').addEventListener('click', () => input.focus());

  welcome();
  asciiClock();
})();

function startSnakeGame() {
  const width = 20;
  const height = 10;
  let snake = [{x:5,y:5}];
  let dir = {x:1,y:0};
  let food = {x:10,y:5};
  let score = 0;
  const gameDiv = document.createElement('div');
  document.getElementById('output').appendChild(gameDiv);
  window.terminalInput.blur();

  function draw() {
    let grid = '';
    for (let y=0;y<height;y++) {
      let row='';
      for (let x=0;x<width;x++) {
        let cell=' ';
        if (x===food.x && y===food.y) cell='*';
        for (const s of snake) if (s.x===x && s.y===y) cell='o';
        row+=cell;
      }
      grid+=row+'\n';
    }
    gameDiv.textContent = grid + `Score: ${score}`;
  }

  function move() {
    const head = {x:snake[0].x+dir.x, y:snake[0].y+dir.y};
    if (head.x<0||head.x>=width||head.y<0||head.y>=height||snake.some(s=>s.x===head.x&&s.y===head.y)) {
      endGame();
      return;
    }
    snake.unshift(head);
    if (head.x===food.x && head.y===food.y) {
      score++;
      food = {x:Math.floor(Math.random()*width), y:Math.floor(Math.random()*height)};
    } else {
      snake.pop();
    }
    draw();
  }

  function endGame() {
    clearInterval(timer);
    document.removeEventListener('keydown', keyDown);
    saveScore('snakeScores', score);
    window.termPrint(`Game over! Final score: ${score}`);
    window.terminalInput.focus();
  }

  function keyDown(e) {
    if (e.key==='ArrowUp') dir={x:0,y:-1};
    if (e.key==='ArrowDown') dir={x:0,y:1};
    if (e.key==='ArrowLeft') dir={x:-1,y:0};
    if (e.key==='ArrowRight') dir={x:1,y:0};
  }

  document.addEventListener('keydown', keyDown);
  const timer = setInterval(move, 300);
  draw();
}

function saveScore(key, score) {
  const scores = JSON.parse(localStorage.getItem(key)||'[]');
  scores.push({score, date:new Date().toISOString()});
  localStorage.setItem(key, JSON.stringify(scores.slice(-5)));
}

function startTetrisGame() {
  const width = 10;
  const height = 20;
  const shapes = [
    [[1,1,1,1]],
    [[1,1],[1,1]],
    [[0,1,0],[1,1,1]],
    [[1,1,0],[0,1,1]],
    [[0,1,1],[1,1,0]]
  ];
  let board = Array.from({length:height},()=>Array(width).fill(0));
  let piece = {shape:shapes[0], x:3, y:0};
  let score=0;
  const gameDiv = document.createElement('div');
  document.getElementById('output').appendChild(gameDiv);
  window.terminalInput.blur();

  function draw() {
    let grid='';
    for(let y=0;y<height;y++){
      let row='';
      for(let x=0;x<width;x++){
        let val=board[y][x];
        // check piece
        if(y-piece.y>=0 && y-piece.y<piece.shape.length && x-piece.x>=0 && x-piece.x<piece.shape[0].length){
          if(piece.shape[y-piece.y][x-piece.x]) val=1;
        }
        row+=val?'#':' ';
      }
      grid+=row+'\n';
    }
    gameDiv.textContent=grid+`Score: ${score}`;
  }

  function collide(px,py,s){
    for(let y=0;y<s.length;y++){
      for(let x=0;x<s[0].length;x++){
        if(s[y][x]){
          let nx=x+px, ny=y+py;
          if(nx<0||nx>=width||ny>=height|| (ny>=0 && board[ny][nx])) return true;
        }
      }
    }
    return false;
  }

  function mergePiece(){
    const s=piece.shape;
    for(let y=0;y<s.length;y++){
      for(let x=0;x<s[0].length;x++){
        if(s[y][x]) board[y+piece.y][x+piece.x]=1;
      }
    }
  }

  function clearLines(){
    for(let y=height-1;y>=0;y--){
      if(board[y].every(v=>v)){ board.splice(y,1); board.unshift(Array(width).fill(0)); score++; y++; }
    }
  }

  function spawn(){
    piece.shape = JSON.parse(JSON.stringify(shapes[Math.floor(Math.random()*shapes.length)]));
    piece.x=3; piece.y=0;
    if(collide(piece.x,piece.y,piece.shape)){ endGame(); }
  }

  function moveDown(){
    if(!collide(piece.x,piece.y+1,piece.shape)){ piece.y++; } else { mergePiece(); clearLines(); spawn(); }
    draw();
  }

  function moveLeft(){ if(!collide(piece.x-1,piece.y,piece.shape)) piece.x--; draw(); }
  function moveRight(){ if(!collide(piece.x+1,piece.y,piece.shape)) piece.x++; draw(); }
  function rotate(){
    const rotated = piece.shape[0].map((_,i)=>piece.shape.map(r=>r[i]).reverse());
    if(!collide(piece.x,piece.y,rotated)) piece.shape=rotated;
    draw();
  }

  function keyDown(e){
    if(e.key==='ArrowLeft') moveLeft();
    if(e.key==='ArrowRight') moveRight();
    if(e.key==='ArrowUp') rotate();
    if(e.key==='ArrowDown') moveDown();
  }

  document.addEventListener('keydown', keyDown);
  const timer=setInterval(moveDown,500);
  spawn();
  draw();

  function endGame(){
    clearInterval(timer);
    document.removeEventListener('keydown', keyDown);
    saveScore('tetrisScores', score);
    window.termPrint(`Tetris over! Score: ${score}`);
    window.terminalInput.focus();
  }
}
