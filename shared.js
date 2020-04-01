let dropdownList = document.querySelector(".nav-bar__items");
let toggleButton = document.querySelector(".toggle-button");
let navBar = document.querySelector(".nav-bar");
let header = document.querySelector(".header");
let about = document.getElementById("about");

toggleButton.addEventListener("click", () => {
  if (dropdownList.classList.contains("open")) {
    dropdownList.style.animation =
      "disappearance 0.3s cubic-bezier(0.2, 0.48, 0.76, 0.29)";
    setTimeout(() => {
      navBar.style.animation = "dropup 0.5s ease-out";
      dropdownList.removeAttribute("style", "display:flex");
      dropdownList.classList.remove("open");
    }, 300);
  } else {
    navBar.style.animation = "dropdown 0.5s ease-out";
    setTimeout(() => {
      dropdownList.setAttribute("style", "display:flex");
      dropdownList.style.animation =
        "appearance 0.3s cubic-bezier(0.2, 0.48, 0.76, 0.29)";
      dropdownList.classList.add("open");
    }, 300);
  }
});

let isScrolling = false;

const throttleScroll = e => {
  if (isScrolling === false) {
    window.requestAnimationFrame(() => {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
};

const scrolling = e => {
  if (isElementAtTop(navBar) && dropdownList.classList.contains("open")) {
    about.setAttribute("style", "margin-top:12.4rem");
    navBar.setAttribute("style", "position:fixed; top:0; width:100%");
  } else if (isElementAtTop(navBar) && dropdownList.classList.value === "nav-bar__items") {
    about.setAttribute("style", "margin-top:5.3rem");
    navBar.setAttribute("style", "position:fixed; top:0; width:100%");
  }

  if (isElementAtBottom(header) && dropdownList.classList.contains("open")) {
    about.removeAttribute("style", "margin-top:12.4rem");
    navBar.removeAttribute("style", "position:fixed; top:0; width:100%");
  } else if (isElementAtBottom(header) && dropdownList.classList.value === "nav-bar__items") {
    about.removeAttribute("style", "margin-top:5.3rem");
    navBar.removeAttribute("style", "position:fixed; top:0; width:100%");
  }
};

const isElementAtTop = el => {
  let elBoundary = el.getBoundingClientRect();
  let top = elBoundary.top;
  return top <= 0;
};

const isElementAtBottom = el => {
  let elBoundary = el.getBoundingClientRect();
  let bottom = elBoundary.bottom;
  return bottom >= 0;
};

window.addEventListener("scroll", throttleScroll, false);
