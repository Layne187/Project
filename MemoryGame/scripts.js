
function rightGuess(theCards){
    theCards.forEach(function(element){
        element.classList.add("theRight");
    });
}

function error(theCards){
    theCards.forEach(function(element){
        element.classList.remove("uncover");
    });
}

