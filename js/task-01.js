const categoriesUl = document.querySelectorAll(".item");
console.log(`Number of categories : ${categoriesUl.length}`);

const categoriesParent = document.querySelector("#categories");
const categoriesIt = categoriesParent.querySelectorAll("#categories .item");

categoriesIt.forEach((element) => {
  const listCategory = `Category: ${element.querySelector("h2").textContent}`;
  const listElements = `Elements: ${
    element.querySelector("ul").children.length
  }`;
  console.log(listCategory);
  console.log(listElements);
});
