const MENU = document.getElementById("navigation-bar");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  if (event.target.tagName != "A") return;
  event.target.classList.add("active");
});

phones.onclick = function(event) {
  if (event.target.tagName != "IMG") return;
  console.log(event.target.style.opacity);

  if (event.target.style.opacity === "0") {
    event.target.style.opacity = "1";
  } else {
    event.target.style.opacity = "0";
  }
};

const PHONES_VERT = document.getElementById("firstSlider");

PHONES_VERT.addEventListener("click", () => {
  if (event.target.tagName != "INPUT") return;
  document.getElementById("firstSlider").style.display = "none";
  document.getElementById("secondSlider").style.display = "flex";
});

const PHONES_HOR = document.getElementById("secondSlider");

PHONES_HOR.addEventListener("click", () => {
  if (event.target.tagName != "INPUT") return;
  document.getElementById("firstSlider").style.display = "flex";
  document.getElementById("secondSlider").style.display = "none";
});

window.onload = function() {
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document
    .querySelector(".strategies_tags")
    .addEventListener("click", event => {
      if (event.target.tagName != "LI") return;
      if (event.target.classList.contains("tag")) {
        let clickedTag = event.target;
        removeSelectedTags();
        selectedClickedTag(clickedTag);
      }
      if (event.target.innerText === "All") {
        showAllStrategy();
      } else {
        filterStrategyBySelectedTag(event.target.classList[1]);
      }
    });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".strategies_tags .tag");

  tags.forEach(tag => {
    tag.classList.remove("tag_selected");
    tag.classList.add("tag_bordered");
  });
};

const selectedClickedTag = clickedTag => {
  clickedTag.classList.remove("tag_bordered");
  clickedTag.classList.add("tag_selected");
};

const filterStrategyBySelectedTag = selectedTag => {
  let strategies = document.querySelectorAll("ul img");

  strategies.forEach(str => {
    str.style.display = "none";
    if (str.className === selectedTag) {
      str.style.display = "block";
    }
  });
};

const showAllStrategy = () => {
  let strategies = document.querySelectorAll("ul img");

  strategies.forEach(str => {
    str.style.display = "block";
  });
};
