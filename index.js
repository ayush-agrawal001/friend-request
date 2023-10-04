var btn = document.querySelector("button");
var btnclick = 0; // Initialize the btnclick variable

btn.addEventListener("click", function() {
  if (btnclick === 0) {
    btn.innerHTML = "Connected";
    btnclick = 1;
  } else {
    btn.innerHTML = "+ Connect";
    btnclick = 0;
  }
});
