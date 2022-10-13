function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "https://cmc08.github.io/img/charmander.png"){
        document.getElementById("imgClickAndChange").src = "https://cmc08.github.io/img/charizard.png";
    } else {
        document.getElementById("imgClickAndChange").src = "https://cmc08.github.io/img/charmander.png";
    }
}

const section = document.getElementById("section");

section.addEventListener("mouseover", function handleMouseOver() {
  section.style.color = "red";
});

section.addEventListener("mouseout", function handleMouseOut() {
  section.style.color = "black";
});

