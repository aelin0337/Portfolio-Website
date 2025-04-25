window.onload = function(){
alert('Welcome to my website portfolio')
};

function getShortInfo() {
  const name = "Jessi";
  const age = 23;
  const isWorking = true;
  const greeting = `Hello, my name is ${name}. I am ${age} years old.`;
  const workStatus = isWorking ? "I am currently working." : "I'm not working right now.";
  const message = `${greeting} ${workStatus}`;
  alert(message);
}
function add(a, b) {
  return a + b;
}
let counter = 0;
counter++;
counter--;
let total = 10 + 5;
let mod = 10 % 3;

let rand = Math.floor(Math.random() * 100)
document.getElementById("random").innerHTML = "Random number: " `${rand}`;

for (let i = 0; i < 3; i++) {
  const item = document.createElement('p');
  item.textContent = `This is item #${i+1}`;
  document.getElementById('loopContainer').appendChild(item);
}
//2 part
let skills = ["HTML", "CSS", "JS"];
skills.push("Bootstrap");

const list = document.getElementById("skillsList");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  list.appendChild(li);
});
document.getElementById("changeText").textContent = "Changed by JS!";
document.styleSelector(".header").style.color = "f5f5f5";
document.querySelector("img").src = "images/porfolio.png";
document.getElementById("btn1").addEventListener("click", () => {
  alert("You clicked me!");
});

document.getElementById("changeText").textContent = "Changed by JS!";
document.querySelector(".header").style.color = "red";
document.querySelector("img").src = "images/updated.jpg";
document.getElementById("btn1").addEventListener("click", () => {
  alert("You clicked me!");
});
document.getElementById("hoverMe").addEventListener("mouseover", () => {
  hoverMe.style.backgroundColor = "lightblue";
});

//3 part
document.getElementById("changeText").textContent = "Changed by JS!";
document.querySelector(".header").style.color = "red";
document.querySelector("img").src = "images/updated.jpg";
document.getElementById("btn1").addEventListener("click", () => {
  alert("You clicked me!");
});
document.getElementById("hoverMe").addEventListener("mouseover", () => {
  hoverMe.style.backgroundColor = "lightblue";
});
