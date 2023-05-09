const buttonAdd = document.querySelector(".buttonAdd");
const inputBuy = document.querySelector("#inputPurchase");
const ulBuy = document.querySelector(".ul");
let buyArray = [];

function addShopping(buy) {
  const createLi = document.createElement("li");
  const createCheckbox = document.createElement("input");
  createCheckbox.type = "checkbox";
  createLi.appendChild(createCheckbox);
  const createParagraph = document.createElement("p");
  const paragraphContent = document.createTextNode(buy);
  createParagraph.appendChild(paragraphContent);
  createLi.appendChild(createParagraph);  
  const createButton = document.createElement("button");
  const createSpan = document.createElement("span");
  createSpan.classList.add("material-symbols-outlined");
  const specifyingIcon = document.createTextNode("delete");  
  createSpan.appendChild(specifyingIcon);
  createButton.appendChild(createSpan);
  createLi.appendChild(createButton);
  createButton.addEventListener("click", () => {
    deleteBuy(ulBuy,createLi);
  });
  if(buyArray.length>=10) {
    alert("Limite de compras atingido");
  }else {
    ulBuy.appendChild(createLi);
    buyArray.push(createLi);
  }
}

function deleteBuy(item, li){
  item.removeChild(li);
  buyArray.shift();
}

const start = () => {
  event.preventDefault();
  if(inputBuy.value=="") {
    alert("Você não descreveu sua compra");
  }else{
    addShopping(inputBuy.value);
  }
}

buttonAdd.addEventListener("click", start);