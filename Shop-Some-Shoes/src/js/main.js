import "./../css/style.css";

const mainHeader = document.createElement("h1");
mainHeader.innerHTML = "Pick a Shoe";
document.body.appendChild(mainHeader);

const container = document.createElement("section");
container.className = "container";
document.body.appendChild(container);
class Shoe {
  brand;
  model;
  type;
  size;
  weight;
  carbon;

  constructor(brand, model, type, size, weight, carbon) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.size = size;
    this.weight = weight;
    this.carbon = carbon;
  }
}

// Objekt i variabel
const shoe1 = new Shoe("Asics", "Superblast", "Daily Trainer", 44, 238, false);
const shoe2 = new Shoe("Hoka", "Tecton X2", "Terrain", 43, 252, true);
const shoe3 = new Shoe("Nike", "Vaporfly", "Race shoe", 42, 179, true);

//Gör om till lista
const shoes = [shoe1, shoe2, shoe3];
const cart = [];

for (let i = 0; i < shoes.length; i++) {
  // createHTMLForShoes(animals[i]);
  createHTMLForShoes(shoes[i]);
}

function createHTMLForShoes(shoe) {
  // Funktion för att skapa HTML för Objekten
  const shoeContainer = document.createElement("section");
  const brandTag = document.createElement("h2");
  const modelTag = document.createElement("h3");
  const typeTag = document.createElement("h4");
  const sizeTag = document.createElement("p");
  const weightTag = document.createElement("p");
  const labelcheckbox = document.createElement("label");
  const checkbox = document.createElement("input");

  shoeContainer.className = "card";

  brandTag.innerHTML = shoe.brand;
  modelTag.innerHTML = shoe.model;
  typeTag.innerHTML = shoe.type;
  sizeTag.innerHTML = shoe.size;
  weightTag.innerHTML = shoe.weight;

  labelcheckbox.innerHTML = "Carbon";
  checkbox.type = "checkbox";
  checkbox.checked = shoe.carbon;

  shoeContainer.addEventListener("click", () => {
    cart.push(shoe);
    console.log(cart);
    createCartHTML();
  });

  shoeContainer.appendChild(brandTag);
  shoeContainer.appendChild(modelTag);
  shoeContainer.appendChild(typeTag);
  shoeContainer.appendChild(sizeTag);
  shoeContainer.appendChild(weightTag);
  shoeContainer.appendChild(labelcheckbox);
  labelcheckbox.appendChild(checkbox);
  container.appendChild(shoeContainer);
}
const header = document.createElement("h3");
header.className = "cartTitle";
header.innerHTML = "Shopping Cart:";

const shoeContainer = document.createElement("ul");
shoeContainer.id = "cart";

const createCartHTML = () => {
  shoeContainer.innerHTML = "";

  cart.forEach((cartItem, i) => {
    const title = document.createElement("li");

    title.innerHTML = cartItem.brand + " " + cartItem.model;

    title.addEventListener("click", () => {
      cart.splice(i, 1);
      createCartHTML();
    });

    document.body.appendChild(header);
    shoeContainer.appendChild(title);
    document.body.appendChild(shoeContainer);
  });
};
