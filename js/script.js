const tabs = document.querySelectorAll(".tab-btn");
const groups = document.querySelectorAll(".skill-group");
let switchTimer;

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        if(tab.classList.contains("active")) return;

        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        const next = document.getElementById(tab.dataset.tab);

        // cancel any switch still waiting from a previous click
        clearTimeout(switchTimer);

        // fade out every group, not just the one marked active
        groups.forEach(group => group.style.opacity = 0);

        switchTimer = setTimeout(() => {

            groups.forEach(group => group.classList.remove("active"));

            next.classList.add("active");

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    next.style.opacity = 1;
                });
            });

        },450);

    });

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }
    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*======================================
    MOBILE MENU
======================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});

/*======================================
    DARK MODE
======================================*/

const themeButton = document.querySelector(".theme-toggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    themeButton.textContent = darkMode ? "☀️" : "🌙";

    localStorage.setItem(

        "theme",

        darkMode ? "dark" : "light"

    );

});