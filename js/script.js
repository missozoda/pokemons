let resultList = $(".list");

for (let i = 0; i < pokemons.length; i++){
  let newLi = createElement("li", "card col-3 p-1 border-1 border-warning rounded-0");
  let newImg = createElement("img", "card-img-top");
  newImg.setAttribute("src", pokemons[i].img);
  let newDiv = createElement("div", "card-body");
  let newH = createElement("h5", "card-title text-danger", `Name: ${pokemons[i].name}`);
  let newP = createElement("p", "card-text text-success", "Weaknesses: ");

  let weaknesses = pokemons[i].weaknesses
  for (let j = 0; j < weaknesses.length; j++){
    let newSpan = createElement("span", "", `  • ${weaknesses[j]}`);
    newP.append(newSpan);
  }
  newDiv.append(newH, newP);
  newLi.append(newImg, newDiv);
  resultList.append(newLi);
}