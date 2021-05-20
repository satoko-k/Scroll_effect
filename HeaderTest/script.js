const headerElement = document.getElementById("header");

document.addEventListener("scroll", function () {
  //   const scrollY = window.pageYOffset;
  //   console.log(scrollY);
  //   if (scrollY > 0) {
  //     headerElement.classList.add("active");
  //   } else {
  //     headerElement.classList.remove("active");
  //   }

  if (document.getElementById("firstView").getBoundingClientRect().bottom < 0) {
    headerElement.classList.add("active");
  } else {
    headerElement.classList.remove("active");
  }
});
