const mobileMenu = document.querySelector("#mobile-menu");
const leftPart = document.querySelector("#left-part");
const menuClose = document.querySelector("#menu-close");
let scrollPos = window.scrollX;

//code for hamburger menu
mobileMenu.addEventListener("click", function () {
  if (!leftPart.classList.contains("active") && scrollPos < 960) {
    leftPart.classList.add("active");
    mobileMenu.classList.add("fa-times");
  } else {
    leftPart.classList.remove("active");
    mobileMenu.classList.remove("fa-times");
  }
});

//code for closing of the 'close button'
menuClose.addEventListener("click", function () {
  if (leftPart.classList.contains("active")) {
    leftPart.classList.remove("active");
    mobileMenu.classList.remove("fa-times");
  }
});

//code for hiding the menu when clicking on it
function hideMobileMenu() {
  const menuBar = document.querySelector(".active");
  if (window.innerWidth < 960 && menuBar) {
    mobileMenu.classList.remove("fa-times");
    leftPart.classList.remove("active");
  }
}
const links = leftPart.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", hideMobileMenu);
});

//accordion
const accordions = document.querySelectorAll(".myaccordion");

//for accordion part
accordions.forEach((accordion) => {
  let accordionTitle = accordion.querySelector(".myaccordion-title");
  let arrow = accordion.querySelector(".arrow");

  accordionTitle.addEventListener("click", () => {
    //close previous accordion when clicking another one
    accordions.forEach((item) => {
      let itemArrow = item.querySelector(".arrow");
      if (item !== accordion) {
        item.classList.remove("active");
        itemArrow.classList.remove("fa-chevron-down");
        itemArrow.classList.add("fa-chevron-right");
      }
    });

    if (arrow.classList.contains("fa-chevron-right")) {
      arrow.classList.remove("fa-chevron-right");
      arrow.classList.add("fa-chevron-down");
      accordion.classList.add("active");
    } else {
      arrow.classList.add("fa-chevron-right");
      arrow.classList.remove("fa-chevron-down");
      accordion.classList.remove("active");
    }
  });

  //code for closing accordion when clicking on the links
  const myaccordionLinks = accordion.querySelectorAll("a");

  myaccordionLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      accordion.classList.remove("active");
      arrow.classList.add("fa-chevron-right");
      arrow.classList.remove("fa-chevron-down");
    });
  });
});
