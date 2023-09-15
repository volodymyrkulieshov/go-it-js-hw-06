const categories = document.querySelectorAll(".item");
console.dir(`Number of categories:${categories.length}`);
categories.forEach((item) => {
  const categoryTittle = item.querySelector("h2");
  const categoryNum = item.querySelectorAll("li");
  console.dir(`Category:${categoryTittle.textContent}`);
  console.dir(`Elements:${categoryNum.length}`);
});
