// const categories = document.querySelectorAll(".item");
// console.dir(`Number of categories:${categories.length}`);
// categories.forEach((item) => {
//   const categoryTittle = item.querySelector("h2");
//   const categoryNum = item.querySelectorAll("li");
//   console.dir(`Category:${categoryTittle.textContent}`);
//   console.dir(`Elements:${categoryNum.length}`);
// });

const list = document.querySelector("#categories");
console.dir(`Number of categories: ${list.children.length}`);
[...list.children].forEach((item) => {
  const categoryTittle = item.firstElementChild.textContent;
  console.dir(`Category: ${categoryTittle}`);
  const categoryNum = item.lastElementChild.children.length;
  console.dir(`Elements: ${categoryNum}`);
});
