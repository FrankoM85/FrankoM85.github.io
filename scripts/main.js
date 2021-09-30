const main = document.querySelector(".main");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const ham = document.querySelector(".ham");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

tl.fromTo(main, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(main, 1.3, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(ham, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");

const menu = document.querySelector(".menu");
const xIcon = document.querySelector(".xIcon");
const menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

const homeLink = document.querySelector(".homeLink");
const profileLink = document.querySelector(".profileLink");
const worksLink = document.querySelector(".worksLink");
const contactsLink = document.querySelector(".contactsLink");
const profile = document.querySelector(".profile");
const works = document.querySelector(".works");
const worksTitle = document.querySelector(".worksTitle");
const ghPagesLinks = document.querySelector(".ghPagesLinks");
const contacts = document.querySelector(".contacts");
const profTitle = document.querySelector("#profTitle");
const about = document.querySelector(".about");
const profileHead = document.querySelector(".profileHead");
const study = document.querySelector(".study");
const experience = document.querySelector(".experience");
const skills = document.querySelector(".skills");
const cv = document.querySelector(".cv");

homeLink.addEventListener("click", toggleMenu)
profileLink.addEventListener("click", toggleProfile)
worksLink.addEventListener("click", toggleWorks)
contactsLink.addEventListener("click", toggleMenu)

function mainOff() {
let tp = new TimelineMax();
    tp.fromTo(main, 0.5, {opacity: 1}, {opacity: 0})
    .fromTo(profTitle, 1, {y: "-130%"}, {y: "0%", ease: Power2.easeInOut}, "+=0.8");
}

function toggleProfile() {
    toggleMenu()
    mainOff()
    works.style.display = "none";
    profile.style.display = "flex";
    
    let tp = new TimelineMax();

    tp.fromTo(profile, 1, {x: "100%"}, {x: "0%", ease: Power2.easeInOut})
    .fromTo(profile, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut}, "-=0.1")
    .fromTo(profile, 1.2, {x: "0%"}, {x: "12%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(profileHead, 0.5, {opacity: 0}, {opacity: 1}, "-=0.1")
    .fromTo(about, 0.5, {opacity: 0}, {opacity: 1}, "-=0.5")
    .fromTo(study, 0.5, {opacity: 0}, {opacity: 1}, "-=0.5")
    .fromTo(experience, 0.5, {opacity: 0}, {opacity: 1}, "-=0.5")
    .fromTo(skills, 0.5, {opacity: 0}, {opacity: 1}, "-=0.5")
    .fromTo(cv, 0.5, {opacity: 0}, {opacity: 1}, "-=0.5");
}

function toggleWorks() {
  toggleMenu()
    main.style.display = "none";
    profile.style.display = "none";
    works.style.display = "flex";
    
    let tp = new TimelineMax();

    tp.fromTo(works, 1, {x: "100%"}, {x: "0%", ease: Power2.easeInOut})
    .fromTo(works, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut}, "-=0.1")
    .fromTo(works, 1.2, {x: "0%"}, {x: "12%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(ghPagesLinks, 0.5, {opacity: 0}, {opacity: 1}, "-=0.1")
    tp.fromTo(worksTitle, 1, {y: "-130%"}, {y: "0%", ease: Power2.easeInOut})
}

/*function toggleContacts() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}*/



