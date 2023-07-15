'use strict'

const cardsArray = document.querySelectorAll("img");
const cardsTitles = document.querySelectorAll(".card-title");
const cardsTexts = document.querySelectorAll(".card-text")

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

for (let i = 0; i < team.length; i++) {
  console.log(team[i].name, team[i].occupation, team[i].profilePhoto)

  cardsTitles[i].innerHTML = team[i].name;
  cardsTexts[i].innerHTML = team[i].occupation;
  cardsArray[i].src = team[i].profilePhoto;
}