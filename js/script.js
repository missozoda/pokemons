let resultList = $(".list");

for (let i = 0; i < pokemons.length; i++){
  let newLi = createElement("li", "card col-3");
  let newImg = createElement("img", "card-img-top");
  newImg.setAttribute("src", pokemons[i].img);
  let newDiv = createElement("div", "card-body");
  let newH = createElement("h5", "card-title", pokemons[i].name);
  let newP = createElement("p", "card-text");

  let weaknesses = pokemons[i].weaknesses
  for (let j = 0; j < weaknesses.length; j++){
    newP.append("  "," • ", weaknesses[j], "  ");
  }
  newDiv.append(newH, newP);
  newLi.append(newImg, newDiv);
  resultList.append(newLi);
}