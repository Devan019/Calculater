let string = "";
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display")
Array.from(buttons).forEach((b) => {
  b.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      document.querySelector('input').value = eval(string);
    }
    else if (e.target.innerHTML == "AC") {
      string = " ";
      document.querySelector('input').value = string;
    }

    else {
      string +=(e.target.innerHTML);
      document.querySelector('input').value = string;
    }
  })
})

document.body.addEventListener("keydown", e => {
  if (isNaN(e.key)) {
    switch (e.key) {
      case "+":
        string += e.key;
        break;
      case "-":
        string +=e.key;
        break;
      case "*":
        string += e.key;
        break;
      case "/":
        string += e.key;
        break;
      case "Enter":
        string = eval(string);
        break;
      case "=":
        string = eval(string);
        break;
      default:
         string = "";
         window.location.reload();
        break;
    }
  }
  else {
    string += e.key;
  }
  display.value = string;
  // console.log(e.key);
}
)