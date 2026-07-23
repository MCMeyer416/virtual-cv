const tabs = document.querySelectorAll(".tab-btn");
const groups = document.querySelectorAll(".skill-group");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        if(tab.classList.contains("active")) return;

        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        const current = document.querySelector(".skill-group.active");
        const next = document.getElementById(tab.dataset.tab);

        current.style.opacity = 0;

        setTimeout(() => {

            current.classList.remove("active");

            next.classList.add("active");

            requestAnimationFrame(() => {

                next.style.opacity = 1;

            });

        },450);

    });

});