const div = document.createElement("div");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const a1 = document.createElement("a");
const li2 = document.createElement("li");
const a2 = document.createElement("a");

div.append(ul);
ul.append(li1);
ul.append(li2);
li1.append(a1);
li2.append(a2);

a1.href = "https://instagram.com/intocode";
a1.textContent = "our instagram";
a2.href = "https://intocode.ru";
a2.textContent = "our site";

document.body.append(div);

console.log(div);
