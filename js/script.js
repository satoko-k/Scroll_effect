const targetElement = document.querySelectorAll(".animationTarget");
// console.log(targetElement);

document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.6;
    // console.log(getElementDistance);
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});
