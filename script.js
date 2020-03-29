const MENU = document.getElementById("navigation-bar");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  if (event.target.tagName != "A") return;
  event.target.classList.add("active");
});
const MENU_MOBILE = document.getElementById("navigation-bar-mobile");

MENU_MOBILE.addEventListener("click", event => {
  MENU_MOBILE.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  if (event.target.tagName != "A") return;
  event.target.classList.add("active");
});
phones.onclick = function (event) {
  if (event.target.tagName != "IMG") return;
  if (event.target.style.opacity === "0") {
    event.target.style.opacity = "1";
  } else {
    event.target.style.opacity = "0";
  }
};


window.onload = function () {
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

const MOBILE_NAV = document.getElementById("navigation__mobile");

MOBILE_NAV.querySelector("#mobile-bar__down").addEventListener("click", event => {
  document.getElementById('mobile__nav').classList.add('mobile-nav__up');
})

MOBILE_NAV.querySelector("#mobile__nav").addEventListener("click", event => {

  if (event.target.tagName === "A" || 
  event.target.tagName === "IMG" ||
  event.target.tagName === "H1") {
    document.getElementById('mobile__nav').classList.remove('mobile-nav__up');
  }

})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {

    e.preventDefault()


    const blockID = anchor.getAttribute('href').substr(1)


    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'

    })
    console.log(document.getElementById("mobile__nav").className);

  })
}



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
  let j = 0;
  let cls;
  let temp;
  strategies.forEach(str => {
    str.style.display = "block";
  });
  for (let i = strategies.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = strategies[j].src;
    cls = strategies[j].className;
    strategies[j].src = strategies[i].src;
    strategies[j].className = strategies[i].className;
    strategies[i].src = temp;
    strategies[i].className = cls;
  }

};

const SUBMIT_BUTTON = document.getElementById("form-input");

SUBMIT_BUTTON.addEventListener("click", () => {
  if (event.target.type === "button") {
    if (checkValueForm() != false) {
      addValueForm(SUBMIT_BUTTON);
    }

  }
});

const checkValueForm = () => {
  for (let i = 0; i < SUBMIT_BUTTON.length; i++) {
    if (SUBMIT_BUTTON[i].name === "name") {
      if (SUBMIT_BUTTON[i].value.length === 0) {


        document.querySelector("input[name=name]").focus();
        document.querySelector("input[name=name]").placeholder = "ENTER YOUR NAME PLEASE";
        document.querySelector("input[name=name]").classList.add('check-change__color');
        return false;
      }
    }
    if (SUBMIT_BUTTON[i].name === "email") {
      if (SUBMIT_BUTTON[i].value.length === 0) {


        document.querySelector("input[name=email]").focus();
        document.querySelector("input[name=email]").placeholder = "ENTER YOUR EMAIL PLEASE";
        document.querySelector("input[name=email]").classList.add('check-change__color');
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
  if (document.querySelector("input[name=name]").classList.value === 'check-change__color') {
    document.querySelector("input[name=name]").classList.remove("check-change__color");
  }
  if (document.querySelector("input[name=email]").classList.value === 'check-change__color') {
    document.querySelector("input[name=email]").classList.remove("check-change__color");
  }
  SUBMIT_BUTTON.reset();
  document.querySelector("#modal__letter").style.display = "none";
})

'use strict';
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector),
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'),
      _sliderItems = _mainElement.querySelectorAll('.slider__item'),
      _sliderControls = _mainElement.querySelectorAll('.slider__control'),

      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
      _positionLeftItem = 0,
      _transform = 0,
      _step = _itemWidth / _wrapperWidth * 100,
      _items = [];
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }

    var _transformItem = function (direction) {
      var nextItem;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    var _controlClick = function (e) {
      if (e.target.classList.contains('slider__control')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
        _transformItem(direction);
      }
    };

    var _setUpListeners = function () {

      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    _setUpListeners();

    return {
      right: function () {
        _transformItem('right');
      },
      left: function () {
        _transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.slider')