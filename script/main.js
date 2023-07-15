'use strict'

const cardContainer = document.querySelector(".cards-row");
const cardsImages = document.querySelectorAll("img");
const cardsTitles = document.querySelectorAll(".card-title");
const cardsTexts = document.querySelectorAll(".card-text");
const btnAdd = document.querySelector(".add-member-btn");
let seedRandomImage = 0;

let team =[
  {
    name: "Wayne Barnett",
    occupation: "Founder & CEO",
    profilePhoto: "./img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    occupation: "Chief Editor",
    profilePhoto: "./img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    occupation: "Office Manager",
    profilePhoto: "./img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    occupation: "Social Media Manager",
    profilePhoto: "./img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    occupation: "Developer",
    profilePhoto: "./img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    occupation: "Graphic Designer",
    profilePhoto: "./img/barbara-ramos-graphic-designer.jpg"
  }
]

btnAdd.addEventListener("click", addNewMember)

function addNewMember() {

  //sovrascrive il numero del generatore random per avere ogni volta un'immagine randomica diversa
  seedRandomImage++

  createNewCard()

  //prende di nuovo questi valori perchè ora c'è una card in più e i valori globali non sono aggiornati
  const cardsImagesNew = document.querySelectorAll("img");
  const cardsTitlesNew = document.querySelectorAll(".card-title");
  const cardsTextsNew = document.querySelectorAll(".card-text");

  //prendo i valori di nome, lavoro e foto profilo dagli input
  const memberName = document.querySelector(".new-member-name").value;
  const memberOccupation = document.querySelector(".new-member-job").value;
  const memberImage = `https://picsum.photos/seed/${seedRandomImage}picsum/200`

  const newMember = createMember(memberName, memberOccupation, memberImage);

  //inserice la il nuovo oggetto persona creato nell'array di oggetti "team" 
  team.push(newMember);

  //aggiorna i dati dell'ultima card aggiunta(se no di default sono uguali alla penultima)
  for (let i = 0; i < team.length; i++) {

    if (i == team.length-1) {
      cardsTitlesNew[i].innerHTML = newMember.name;
      cardsTextsNew[i].innerHTML = newMember.occupation;
      cardsImagesNew[i].src = newMember.profilePhoto;
    }
  }
}

//aggiunge ai valori di titolo, lavoro e immagine i valori inseriti nell'array di objects team
for (let i = 0; i < team.length; i++) {
  cardsTitles[i].innerHTML = team[i].name;
  cardsTexts[i].innerHTML = team[i].occupation;
  cardsImages[i].src = team[i].profilePhoto;
}

/**
 * crea un oggetto "person" impostando come nome, lavoro e foto profili quelli passati in input
 * 
 * @param {string} memberName 
 * @param {string} job 
 * @param {string} image 
 * @returns {object}
 */
function createMember(memberName, job, image) {
  let person = {
    name: memberName,
    occupation: job,
    profilePhoto: image
  }
  return person
}

/**
 * Clona l'ultima card e aggiunge il clone al container. Toglie la classe "last-card alla penultima carde l'aggiunge a quella appena creata"
 * @returns 
 */
function createNewCard() {
  const cardEl = document.querySelector(".last-card");
  const newCard = cardEl.cloneNode(true);

  cardContainer.append(newCard);

  cardEl.classList.remove("last-card");
  newCard.classList.add("last-card");
  return
}