import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ['jogger', 'racoon'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let i = 0; i < adj.length; i++) {
       for (let i = 0; i < noun.length; i++) {
        let dominio = pronoun[i] + adj[i] + adj[i] + ".com";
         console.log(dominio);
       }
    }
  }

   console.log(dominio);


};
