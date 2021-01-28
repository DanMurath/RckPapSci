const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start game
  const startGame = () => {

    const intro = document.querySelector(`.intro`);
    const match = document.querySelector(`.match`);
    const playBtn = document.querySelector(`.intro button`);

    playBtn.addEventListener(`click`, () => {
      intro.classList.add(`fadeOut`);
      match.classList.add(`fadeIn`);
    })
  }

  // Play 
  const playMatch = () => {
    const options = document.querySelectorAll(`.options button`);
    const plyrHnd = document.querySelector(`.player-hand`);
    const comHnd = document.querySelector(`.computer-hand`);
    const hnds = document.querySelectorAll(`.hands img`);

    hnds.forEach(hnd => {
      hnd.addEventListener(`animationend`, function () {
        this.style.animation = ``;
      })
    })

    //Computer options
    const comOpt = [`rock`, `paper`, `scissors`];
    options.forEach((option) => {
      option.addEventListener(`click`, function() {
        const comNo = Math.floor(Math.random() * 3);
        const comChoice = comOpt[comNo];

        setTimeout(() => {
          //Call compare hands
          compareHnds(this.textContent, comChoice);

          //Update imgs
          plyrHnd.src = `./img/${this.textContent}.png`;
          comHnd.src = `./img/${comChoice}.png`
        }, 1300);

        //Hand animations
        plyrHnd.style.animation = `shakePlayer 2s ease`;
        comHnd.style.animation = `shakeComputer 2s ease`;
      })
    });
  };
  //Update score
  const updScr = () => {
    const plyrScr = document.querySelector(`.player-score p`);
    const comScr = document.querySelector(`.computer-score p`);
    plyrScr.textContent = pScore;
    comScr.textContent = cScore;
  };

  //Compare hands
  const compareHnds = (plyrChoice, comChoice) => {
    //Update text
    const winner = document.querySelector(`.winner`);

    //Check for tie
    if (plyrChoice === comChoice) {
      winner.textContent = `It is a tie!`
      return;
    }
    //Check for rock
    if (plyrChoice === `rock`) {
      if (comChoice === `scissors`) {
        winner.textContent = `You WIN!`
        pScore++;
        updScr();
        return;
      } else {
        winner.textContent = `You lose`
        cScore++;
        updScr();
        return; 
      }
    }
    //Check for paper
    if (plyrChoice === `paper`) {
      if (comChoice === `rock`) {
        winner.textContent = `You WIN!`
        pScore++;
        updScr();
        return;
      } else {
        winner.textContent = `You lose`
        cScore++;
        updScr();
        return; 
      }
    }
    //Check for scissors
    if (plyrChoice === `scissors`) {
      if (comChoice === `paper`) {
        winner.textContent = `You WIN!`
        pScore++;
        updScr();
        return;
      } else {
        winner.textContent = `You lose`
        cScore++;
        updScr();
        return; 
      }
    }
  }

startGame();
playMatch();
};

game();