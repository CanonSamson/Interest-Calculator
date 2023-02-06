const buttons = document.querySelectorAll(".buttons")

let interest;




for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons.forEach(button => {
      button.classList.remove("bg-green-400")
    });

    buttons[i].classList.add("bg-green-400")

    console.log(buttons[i])
  });
}







function calculateInterest(event) {
  // event.preventDefault();

  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;

  const Dinterest = principal * rate / 100 * time / 365;
  document.getElementById("daily").innerHTML = Dinterest;

  const Minterest = principal * rate / 100 * time / 12;
  document.getElementById("monthly").innerHTML = Minterest;

  const Yinterest = principal * rate / 100 * time;
  document.getElementById("yearly").innerHTML = Yinterest;






}
