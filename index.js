let slideIdx = 0;

let slideRoot = document.getElementById("slides-root");
let perspective = false;

let bgPos = 0;

function updateSlide() {
    slideRoot.className = "";
    slideRoot.className = `on-slide-${(slideIdx + 1)}`;
}

window.addEventListener("click", () => {
    if (slideIdx < 7) {
        slideIdx++;
    }
    updateSlide();
})

window.addEventListener('keydown', (ev) => {
    if (ev.key === " " && ev.repeat === false) {
        perspective = !perspective;
        let root = document.getElementById("root");
        if (perspective) {
            root.classList.add("show-slides");
        } else {
            root.classList.remove("show-slides");
        }
    }

    // Pages!
    if (ev.code === "ArrowLeft" && ev.repeat === false) {
        if (slideIdx > 0) {
            slideIdx--;
        }
        updateSlide()
    } else if (ev.code === "ArrowRight" && ev.repeat === false) {
        if (slideIdx < 7) {
            slideIdx++;
        }
        updateSlide();
    }
})