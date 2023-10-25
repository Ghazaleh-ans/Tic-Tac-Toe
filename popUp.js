function winningEnd(winnerName){
    return `<div
    class="modal modal-sheet position-static d-block p-4 py-md-5"
    tabindex="-1"
    role="dialog"
    id="modalSheet"
  >
    <div class="modal-dialog " role="document">
      <div class="modal-content rounded-4 shadow popUp-color">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5">${winnerName} is the WINNER!</h1>
        </div>
        <div class="d-flex gap-2 justify-content-center py-3">
            <button class="btn btn-primary d-inline-flex align-items-center btn-restart" type="button">
              Restart 
            </button>
            <button class="btn btn-outline-secondary d-inline-flex align-items-center btn-play-again" type="button">
              Play Again
            </button>
        </div>
      </div>
    </div>
  </div>

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"
  ></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="./ticTacToeHtmlCode.js" charset="UTF-8"></script>
  <script src="./index.js" charset="UTF-8"></script>`
}