const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('scoreValue');


const player = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  size: 30,
  color: 'blue',
  speed: 5,
};

// Bullets
const bullets = [];
const bulletSpeed = 8;

// Enemy spaceships
const enemies = [];
const enemySpeed = 2;
let enemySpawnInterval = 2000;
let score = 0;

function drawPlayer() {
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(player.x - player.size / 2, player.y - player.size);
  ctx.lineTo(player.x + player.size / 2, player.y - player.size);
  ctx.closePath();
  ctx.fillStyle = player.color;
  ctx.fill();
}

function drawBullets() {
  ctx.fillStyle = 'red';
  bullets.forEach(bullet => {
    ctx.fillRect(bullet.x, bullet.y, 5, 10);
  });
}

function drawEnemies() {
  enemies.forEach(enemy => {
    // Rainbow colors for enemies
    const rainbowColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = rainbowColor;
    ctx.fill();
    ctx.stroke();
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawBullets();
  drawEnemies();
}

function update() {
  // Update player position
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }

  if (keys.ArrowRight && player.x < canvas.width) {
    player.x += player.speed;
  }

  // Update bullet positions
  bullets.forEach(bullet => {
    bullet.y -= bulletSpeed;

    // Remove bullets that go off-screen
    if (bullet.y < 0) {
      bullets.splice(bullets.indexOf(bullet), 1);
    }
  });

  // Update enemy positions
  enemies.forEach(enemy => {
    enemy.y += enemySpeed;

    // Check for collisions with bullets
    bullets.forEach(bullet => {
      if (
        bullet.x > enemy.x - 25 &&
        bullet.x < enemy.x + 25 &&
        bullet.y > enemy.y - 25 &&
        bullet.y < enemy.y + 25
      ) {
        // Remove the bullet and the enemy on collision
        bullets.splice(bullets.indexOf(bullet), 1);
        enemies.splice(enemies.indexOf(enemy), 1);
        score += 10;
        scoreElement.innerText = score;
        
      }
    });

    // Check for collisions with player
    if (
      player.x > enemy.x - 25 &&
      player.x < enemy.x + 25 &&
      player.y > enemy.y - 25 &&
      player.y < enemy.y + 25
    ) {
      alert('Game Over! Your Score: ' + score);
      document.location.reload();
    }
  });
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Keyboard input handling
const keys = {};
window.addEventListener('keydown', e => (keys[e.key] = true));
window.addEventListener('keyup', e => (keys[e.key] = false));

// Shoot bullets on space key press
window.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    bullets.push({
      x: player.x,
      y: player.y - player.size,
    });
  }
});

// Spawn enemies at intervals
setInterval(() => {
  enemies.push({
    x: Math.random() * canvas.width,
    y: 0,
  })
  if (score % 100 === 0) {
    increaseDifficulty();
  }
  ;
}, enemySpawnInterval);

function increaseDifficulty() {
  enemySpeed += 2; // Increase enemy speed
  enemySpawnInterval = Math.max(500, enemySpawnInterval - 200); // Decrease enemy spawn interval (minimum 500 milliseconds)
}


gameLoop();

fullscreenButton.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
if (!document.fullscreenElement) {
  document.documentElement.requestFullscreen();
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
}