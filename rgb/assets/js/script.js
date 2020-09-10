var picker = document.querySelector(".slider");

picker.addEventListener("change", function () {
  var red = document.querySelector(".red").value;
  var green = document.querySelector(".blue").value;
  var blue = document.querySelector(".green").value;

  var rgb = "rgb(" + red + "," + green + "," + blue + ")";

  //show the output
  document.querySelector(".result").style.background = rgb;
  document.querySelector(".output").innerHTML = rgb;
});
