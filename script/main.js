'use strict'

let team =[
  {
    name: "Wayne Barnett",
    occupation: "Founder & CEO",
    profilePhoto: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    occupation: "Chief Editor",
    profilePhoto: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    occupation: "Office Manager",
    profilePhoto: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    occupation: "Social Media Manager",
    profilePhoto: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    occupation: "Developer",
    profilePhoto: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    occupation: "Graphic Designer",
    profilePhoto: "barbara-ramos-graphic-designer.jpg"
  }
]

for (let i = 0; i < team.length; i++) {
  console.log(team[i].name, team[i].occupation, team[i].profilePhoto)
}