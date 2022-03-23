var 답안 = "truck";

document.querySelector("button").addEventListener("click", function () {
  var input = document.querySelectorAll(".input");

  // 문자가 자리도 맞을 때
  for (let i = 0; i < 5; i++) {
    // 문자가 자리도 맞을 때
    if (input[i].value == 답안[i]) {
      input[i].style.backgroundColor = "lightgreen";
    }
    // 문자가 포함만 되어 있을 때
    else if (답안.includes(input[i].value)) {
      input[i].style.backgroundColor = "lightyellow";
    }

    // 아무것도 안 맞을 때
    else {
      input[i].style.backgroundColor = "lightgray";
    }

    input[i].classList.remove("input");
  }

  var template = `<div>
        <input class="input" maxlength="1"/>
        <input class="input" maxlength="1"/>
        <input class="input" maxlength="1"/>
        <input class="input" maxlength="1"/>
        <input class="input" maxlength="1"/>
        </div>`;

  document.querySelector("body").insertAdjacentHTML("beforeend", template);
});
const btnList = document.querySelectorAll(".buttonClass:not(#btn5)");
const btnClick = document.getElementById("btn5");
