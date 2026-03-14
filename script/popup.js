const popupBackground = document.querySelector(".popupBackground")
const btnDecouvrir = document.querySelector(".btn_decouvrir button")

// ouvrir la popup
btnDecouvrir.addEventListener("click", () => {
    popupBackground.classList.add("active")
})

// fermer la popup en cliquant sur le fond
popupBackground.addEventListener("click", (e) => {
    if (e.target === popupBackground) {
        popupBackground.classList.remove("active")
    }
})