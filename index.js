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

const SUBMIT_BUTTON = document.getElementById("form-input");

SUBMIT_BUTTON.addEventListener("click", () => {
  if (event.target.type === "button") {
   //document.querySelector('.form-quote').submit();
    if(checkValueForm() != false){
      addValueForm(SUBMIT_BUTTON);
    }
    
  }
});

const checkValueForm = () => {
  for (let i = 0; i < SUBMIT_BUTTON.length; i++) {
    if(SUBMIT_BUTTON[i].name === "name"){
      if(SUBMIT_BUTTON[i].value.length === 0){
      
        
        document.querySelector("input[name=name]").focus();
        document.querySelector("input[name=name]").placeholder = "ENTER YOUR NAME PLEASE";
        document.querySelector("input[name=name]").classList.add('check-change__color');
        return false;
      }
    }
  }
}

const addValueForm = () => {
  let subject__letter = document.getElementById("subject__letter");
  let description__letter = document.getElementById("description__letter");
  for (let i = 0; i < SUBMIT_BUTTON.length; i++) {
    if (SUBMIT_BUTTON[i].name === "comment") {
      if (SUBMIT_BUTTON[i].value.length === 0) {
        description__letter.innerHTML = "No description";
      } else {
        description__letter.innerHTML = "Description: " + SUBMIT_BUTTON[i].value;
      }
    }
    if (SUBMIT_BUTTON[i].name === "subject") {
      if (SUBMIT_BUTTON[i].value.length === 0) {
        subject__letter.innerHTML = "No subject";
      } else {
        subject__letter.innerHTML = "Subject: " + SUBMIT_BUTTON[i].value;
      }
    }
  }

  document.querySelector("#modal__letter").style.display = "block";
};

document.querySelector('#close__modal').addEventListener("click", () => {
  document.querySelector('.form-quote').submit();
  document.querySelector("input[name=name]").classList.remote('check-change__color');
  SUBMIT_BUTTON.reset();
  document.querySelector("#modal__letter").style.display = "none";
})