const arr = ["html", "css", "js"];
const ul = document.createElement("u1");

for (const item of arr) {
  const li = document.createElement("li");
  li.append(item);
  ul.append(li);
}
document.body.append(ul);
