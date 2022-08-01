// Add your code here
const main = document.querySelector("main");
let bold = document.createElement("strong");
const paragraph = document.createElement("p");

const image = document.createElement("img");
image.src = "http://placekitten.com/200/200";
image.alt = "cat";
image.style.height = "200px";
image.style.width = "200px";
image.style.borderRadius = "50%";

let node = document.createTextNode(
    "Hey! This is Archita Basavaraju."
  );
let text = "I am currently pursuing my graduate studies at PSU. I look forward to learning fun stuff! My hobbies are reading fantasy novel, watching thriller movies, playing badminton and having fun conversations. Oh I love hanging out with my friends and eating good food!";

main.appendChild(image);
bold.appendChild(node);
paragraph.appendChild(bold);
paragraph.appendChild(document.createElement("br"));
paragraph.append(text);
paragraph.appendChild(document.createElement("br"));
main.appendChild(paragraph);
main.setAttribute("style", "text-align:center");