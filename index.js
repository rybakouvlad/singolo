const MENU = document.getElementById("navigation-bar");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  if (event.target.tagName != "A") return;
  event.target.classList.add("active");
});


phones.onclick = function(event) {
  if (event.target.tagName != "IMG") return;
  console.log(event.target.style.opacity );
  
  if (event.target.style.opacity === "0") {
    event.target.style.opacity = "1" ;
  } else {
    event.target.style.opacity = "0" ;
  }
};

const PHONES_VERT = document.getElementById("firstSlider");


PHONES_VERT.addEventListener('click',() => {
  if (event.target.tagName != "INPUT") return;
  document.getElementById('firstSlider').style.display = 'none';
  document.getElementById('secondSlider').style.display = 'flex';
})

const PHONES_HOR = document.getElementById("secondSlider");


PHONES_HOR.addEventListener('click',() => {
  if (event.target.tagName != "INPUT") return;
  document.getElementById('firstSlider').style.display = 'flex';
  document.getElementById('secondSlider').style.display = 'none';
})