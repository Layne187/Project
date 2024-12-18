function shuffleCards(){
    let result;

    result = totalCards.sort(function(){
        return 0.5 - Math.random();
    });

    return result;
}

function distributeCards(){

    let GameTable = document.querySelector("#GameTable");
    let shuffledCards = shuffleCards();

    GameTable.innerHTML="";

    shuffledCards.forEach(function(element){
        let card = document.createElement("div");
        card.innerHTML=  "<div class ='card' data-val=' " + element +" '> "+
        "<div class='card_content'>" + element + "</div></div>";
        GameTable.appendChild(card);
    })
}