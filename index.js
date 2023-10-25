let playerMoves1 = [];
let playerMoves2 = [];
var playerTurn = true;
var winnerPlayer = "";
const winningPaterns = [
  ["btn-1", "btn-2", "btn-3"],
  ["btn-4", "btn-5", "btn-6"],
  ["btn-7", "btn-8", "btn-9"],
  ["btn-1", "btn-5", "btn-9"],
  ["btn-3", "btn-5", "btn-7"],
  ["btn-1", "btn-4", "btn-7"],
  ["btn-2", "btn-5", "btn-8"],
  ["btn-3", "btn-6", "btn-9"],
];

$("form").submit(function (event) {
  event.preventDefault();
  const playerName1 = $("#playerName1").val().toUpperCase();
  const playerName2 = $("#playerName2").val().toUpperCase();
  const htmlCode = ticTacToe(playerName1, playerName2);
  $("body").html(htmlCode);
  addEventsToGameButtons();
});

function addEventsToGameButtons() {
  $(".btn-game").click(function () {
    if (playerTurn) {
      $("#name-1").removeClass("border-bottom player border-2");
      $("#name-2").addClass("border-bottom player border-2");
      playerMoves1.push(this.id);
      $(`#${this.id}`).addClass("playerX");
      $(`#${this.id}`).attr("disabled", "disabled");
      playerTurn = !playerTurn;
      if (playerMoves1.length >= 3) {
        winnerPlayer = $("#name-1").html();
        checkResult(playerMoves1, winnerPlayer);
      }
    } else {
      $("#name-1").addClass("border-bottom player border-2");
      $("#name-2").removeClass("border-bottom player border-2");
      playerMoves2.push(this.id);
      $(`#${this.id}`).addClass("playerO");
      $(`#${this.id}`).attr("disabled", "disabled");
      playerTurn = !playerTurn;
      if (playerMoves2.length >= 3) {
        winnerPlayer = $("#name-2").html();
        checkResult(playerMoves2, winnerPlayer);
      }
    }
  });
  let play1 = $("#name-1").html();
  let play2 = $("#name-2").html();
  changeButtons(play1, play2);
}
var win = 0;
function checkResult(playerMoves, winnerPlayer) {
  for (let i = 0; i < winningPaterns.length; i++) {
    for (let j = 0; j < winningPaterns[i].length; j++) {
      if (playerMoves.includes(winningPaterns[i][j])) {
        win++;
      }
      if (win === 3) {
        $(".btn-game").attr("disabled", "disabled");
        let play1 = $("#name-1").html();
        let play2 = $("#name-2").html();
        const winPage = winningEnd(winnerPlayer);
        $("body").html(winPage);
        changeButtons(play1, play2);
      }
    }
    win = 0;
  }
}

function changeButtons(name1, name2) {
  $(".btn-restart").click(function () {
    window.location = "index.html";
  });
  $(".btn-play-again").click(function () {
    const htmlCode = ticTacToe(name1, name2);
    playerMoves1 = [];
    playerMoves2 = [];
    playerTurn = true;
    winnerPlayer = "";
    $("body").html(htmlCode);
    addEventsToGameButtons();
  });
}
