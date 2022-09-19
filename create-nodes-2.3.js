function render(arr) {
  const ul = document.createElement("ul");

  for (const item of arr) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.name;
    li.append(a);
    ul.append(li);
  }

  document.body.append(ul);
  console.log(document.body);
  console.log(ul);
}

render([
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
]);
