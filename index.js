const accordions = document.querySelectorAll(".accordion"); //selects all the accordion

const rotateIcon = (value) => {
    const icon = value.lastElementChild;

    icon.classList.toggle("rotate");
}

const openPanel = (value) => {
    const panel = value.nextElementSibling;

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

Array.from(accordions).forEach((accordion) => {
    accordion.addEventListener("click", () => {
        rotateIcon(accordion);
        openPanel(accordion);
    })
})

Array.from(accordions).forEach((accordion) => {
    accordion.addEventListener("keypress", () => {
        rotateIcon(accordion);
        openPanel(accordion);
    })
})

