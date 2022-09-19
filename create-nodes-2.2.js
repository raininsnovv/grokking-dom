function render(arr) {
  const ul = document.createElement("ul");

  for (const item of arr) {
    const li = document.createElement("li");
    li.append(item);
    ul.append(li);
  }

  document.body.append(ul);
  console.log(div);
}

render(["html", "css", "js"]);
