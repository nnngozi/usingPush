/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#push").innerHTML = dmg();
};
function dmg() {
  var pronoun = ["The", "our", "your", "my"];
  let adj = ["great", "big", "small", "tall"];
  let noun = ["jogger", "baller", "miami", "florida"];
  let suffix = [".com", ".net", ".us", ".me"];
  let adverb = [];

  for (var p = 0; p < pronoun.length; p++) {
    //  console.log(pronoun[p]) trying to show output for line 8
    for (var a = 0; a < adj.length; a++) {
      for (var n = 0; n < noun.length; n++) {
        for (var s = 0; s < suffix.length; s++) {
          //    another solution for this exercise using push
          adverb.push(pronoun[p] + adj[a] + noun[n] + suffix[s]);
          //          console.log(pronoun[p] + adj[a] + noun[n] + suffix[s]);
        }
      }
    }
  }
  return adverb.join("</br>");
}
//  console.log(dmg());
