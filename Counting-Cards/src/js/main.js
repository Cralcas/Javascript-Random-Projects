import "./../css/style.css";

// function cc(card) {
//   switch (card) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;

//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   if (count <= 0) {
//     return count + " Hold";
//   } else if (count > 0) {
//     return count + " " + "Bet";
//   }
// }

const container = document.getElementById("app");
let count = 0;

let cardsPlusOne = [2, 3, 4, 5, 6]; //Kort som ger +1
let cardsMinusOne = [10, "J", "Q", "K", "A"]; //Kort som ger -1

const firstCardContainer = document.createElement("section"); //Första raden kort
firstCardContainer.className = "firstCardContainer";
container.appendChild(firstCardContainer);

const secondCardContainer = document.createElement("section"); //Andra raden kort
secondCardContainer.className = "secondCardContainer";
container.appendChild(secondCardContainer);

const cardCount = document.createElement("h4");
cardCount.className = "countHeader"; //Running Count

cardCount.innerHTML = "Running Count: " + count;

cardsPlusOne.forEach(function (number) {
  //Skapar korten som ger +1

  let cardDiv = document.createElement("div");
  let cardContent = document.createElement("h3");
  cardDiv.className = "cardOne";
  cardContent.innerHTML = number;

  firstCardContainer.appendChild(cardDiv);
  cardDiv.appendChild(cardContent);

  cardDiv.addEventListener("click", () => {
    //Klickar på korten ändrar Running Count med +1

    cardCount.innerHTML = count++;

    if (count > 0) {
      cardCount.innerHTML = "Running Count " + count;
    } else if (count <= 0) {
      cardCount.innerHTML = "Running Count: " + count;
    }
  });
});

cardsMinusOne.forEach(function (number) {
  //Skapar korten som ger -1

  let cardDiv = document.createElement("div");
  let cardContent = document.createElement("h3");
  cardDiv.className = "cardOne";
  cardContent.innerHTML = number;

  secondCardContainer.appendChild(cardDiv);
  cardDiv.appendChild(cardContent);

  cardDiv.addEventListener("click", () => {
    //Klickar på korten ändrar Running Count med +1

    cardCount.innerHTML = count--;

    if (count > 0) {
      cardCount.innerHTML = "Running Count: " + count;
    } else if (count <= 0) {
      cardCount.innerHTML = "Running Count: " + count;
    }
  });
});

container.appendChild(cardCount);
