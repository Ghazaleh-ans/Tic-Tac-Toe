function ticTacToe(player1,player2) { return `
<div class="fluid-container pt-5">
      <div class="row py-5 text-center">
        <div class="col-4 col-lg-2 mx-auto text-center py-2">
          <img src="./images/x.png" alt="x" height="24px" class="mx-5" />
          <p class="fw-bolder py-2 border-bottom player border-2" id="name-1">${player1}</p>
        </div>
        <div class="col-4 text-center">
          <img
            class="d-block mx-auto mb-4"
            src="./images/tic-tac-toe.png"
            alt="tic-tac-toe"
            height="80"
          />
        </div>
        <div class="col-4 col-lg-2 mx-auto text-center py-2">
          <img src="./images/o.png" alt="o" height="24px" class="mx-5" />
          <p class="fw-bolder py-2" id="name-2">${player2}</p>
        </div>
      </div>
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-9 text-center mx-auto">
              <button
                type="button"
                id="btn-1"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
              <button
                type="button"
                id="btn-2"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
              <button
                type="button"
                id="btn-3"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-9 text-center mx-auto">
              <button
                type="button"
                id="btn-4"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
              <button
                type="button"
                id="btn-5"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
              <button
                type="button"
                id="btn-6"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-9 text-center mx-auto">
              <button
                type="button"
                id="btn-7"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
              <button
                type="button"
                id="btn-8"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
              <button
                type="button"
                id="btn-9"
                class="col-4 col-lg-3 btn btn-game p-0 my-1 mx-1"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center py-5 my-5">
        <button class="btn btn-primary d-inline-flex align-items-center btn-restart" type="button">
          Restart 
        </button>
        <button class="btn btn-outline-secondary d-inline-flex align-items-center btn-play-again" type="button">
          Play Again
        </button>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./index.js" charset="UTF-8"></script>
`
}