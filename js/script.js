let resultList = $(".list");

pokemons.forEach(function(pokemon){
  let newLi = createElement("li", "card col-3 p-1 border-1 border-warning rounded-0");
  let newImg = createElement("img", "card-img-top");
  newImg.setAttribute("src", pokemon.img);
  let newDiv = createElement("div", "card-body");
  let newH = createElement("h5", "card-title text-danger", `Name: ${pokemon.name}`);
  let newP = createElement("p", "card-text text-success", "Weaknesses: ");

  let weaknesses = pokemon.weaknesses
  for (let j = 0; j < weaknesses.length; j++){
    let newSpan = createElement("span", "", `  • ${weaknesses[j]}`);
    newP.append(newSpan);
  }
  newDiv.append(newH, newP);
  newLi.append(newImg, newDiv);
  resultList.append(newLi);
});