const animationTargetElements = document.querySelectorAll(".textAnimation");
// console.log(animationTargetElements);

for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i];
  //   console.log(targetElement);
  texts = targetElement.textContent;
  // console.log(texts);
  textsArray = [];

  // 一回消す
  targetElement.textContent = "";

  // 文字列を配列に入れる split
  // texts.split("");
  // console.log(texts.split(""));
  for (let j = 0; j < texts.split("").length; j++) {
    const t = texts.split("")[j];
    if (t === " ") {
      textsArray.push(" ");
    } else {
      textsArray.push(
        '<span style="animation-delay:' + j * 0.1 + 's;">' + t + "</span>"
      );
    }
  }
  // console.log(textsArray);

  for (let k = 0; k < textsArray.length; k++) {
    targetElement.innerHTML += textsArray[k];
  }
}
