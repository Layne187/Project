distributeCards();

document.querySelectorAll(".card").forEach(function(element){
    element.addEventListener("click", uncovered)
});