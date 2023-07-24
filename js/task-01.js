const categoriesUl = document.querySelectorAll(".item");
console.log(`Number of categories : ${categoriesUl.length}`);

const categoriesParent = document.querySelector("#categories");
const categoriesIt = categoriesParent.querySelectorAll("#categories .item");

const categoriesList = [];
categoriesIt.forEach((element) => {
  categoriesList.push(
    `Category: ${element.querySelector("h2").textContent} Elements: ${
      element.querySelector("ul").children.length
    }`
  );
});
console.log(categoriesList.join("; "));
