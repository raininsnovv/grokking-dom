const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.style.color = "red";
div2.style.color = "green";
div3.style.color = "blue";
div3.textContent = "Я вложен";
div2.append(div3);
div1.append(div2);
console.log(div1);
