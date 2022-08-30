let card_1 = document.querySelector(".card-1");
let card_2 = document.querySelector(".card-2");
let submitButton = document.querySelector(".submit-btn");
let rates = document.querySelectorAll(".selection button");
let rating = document.querySelector("span")


submitButton.addEventListener("click", e => {
  card_2.classList.remove("hide");
  card_1.classList.add("hide");
});


rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML 
  }) 
})




 