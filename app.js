let scores, roundScore, activePlayer, dice

scores = [0,0]
roundScore = 0
activePlayer = 0

document.getElementById('score-0').textContent = 0
document.getElementById('score-1').textContent = 0

document.getElementById('current-0').textContent = 0
document.getElementById('current-1').textContent = 0

document.querySelector('.btn-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1
    
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice-' + dice + '.png'

    if(dice !== 1) {
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
        nextPlayer()
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to global score
    scores[activePlayer] += roundScore
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    //check if player won the game
    if(scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
    } else {
        //Next player
        nextPlayer()   
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
}