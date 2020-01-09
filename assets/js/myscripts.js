function showhide() {
  var x = document.getElementById("monthview");
  var y = document.getElementById("agendaview");
  var ab = document.getElementById("agendabutton")
  var mb = document.getElementById("monthbutton")
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    ab.style.display = "block";
    mb.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    mb.style.display = "block";
    ab.style.display = "none";
  }
}
