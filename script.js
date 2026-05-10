// const canvas = document.getElementById("gameCanvas");
// function drawArena() {
//     ctx.strokeStyle = "rgba(255,255,255,0.1)";

//     for (let i = 0; i < canvas.width; i += 50) {
//         ctx.beginPath();
//         ctx.moveTo(i, 0);
//         ctx.lineTo(i, canvas.height);
//         ctx.stroke();
//     }

//     for (let i = 0; i < canvas.height; i += 50) {
//         ctx.beginPath();
//         ctx.moveTo(0, i);
//         ctx.lineTo(canvas.width, i);
//         ctx.stroke();
//     }
// }

// function checkWinner() {
//     if (player1.health <= 0) {
//         gameOver = true;
//         winnerPopup.classList.remove("hidden");
//         winnerText.innerText = "PLAYER 2 WINS";
//     }

//     if (player2.health <= 0) {
//         gameOver = true;
//         winnerPopup.classList.remove("hidden");
//         winnerText.innerText = "PLAYER 1 WINS";
//     }
// }

// function restartGame() {
//     location.reload();
// }

// window.restartGame = restartGame;

// function gameLoop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawArena();

//     if (!gameOver) {
//         player1.move();
//         player2.move();

//         player1.draw();
//         player2.draw();

//         player1.updateBullets(player2);
//         player2.updateBullets(player1);

//         p1Health.style.width = player1.health + "%";
//         p2Health.style.width = player2.health + "%";

//         checkWinner();
//     }

//     requestAnimationFrame(gameLoop);
// }

// gameLoop();