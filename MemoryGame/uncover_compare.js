function uncovered(){

    let uncoveredCards;
    let totalUncovered = document.querySelectorAll(".uncover:not(.theRight)");
    if (totalUncovered.length > 1){
        return;
    }

    this.classList.add("uncover");

    uncoveredCards = document.querySelectorAll(".uncover:not(.theRight)");

    if(uncoveredCards.length < 2){
        return;
    }

    compare(uncoveredCards);
}

function compare(cardsToCompare){
    if (cardsToCompare[0].dataset.val === cardsToCompare[1].dataset.val)
        {
            rightGuess(cardsToCompare);
        } else {
            error(cardsToCompare);
        }
}