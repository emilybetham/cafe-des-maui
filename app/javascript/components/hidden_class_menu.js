const hiddenClassMenu = () => {
  const foodButton = document.getElementById('food-button');
  const drinksButton = document.getElementById('drinks-button');
  const foodHTML = document.getElementById('food');
  const drinksHTML = document.getElementById('drinks');

  foodButton.addEventListener("click", (event) => {
    drinksHTML.classList.add("hidden");
    foodHTML.classList.remove("hidden");
   });
  drinksButton.addEventListener("click", (event) => {
    foodHTML.classList.add("hidden");
    drinksHTML.classList.remove("hidden");
   });
}

export { hiddenClassMenu };


