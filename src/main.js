// Hamburger menu
const hamMenu = document.getElementById("hamburger-menu")
const openHamMenu = document.getElementById("open-ham-menu")
openHamMenu.onclick = () => {
    hamMenu.style.display = "flex"
    openHamMenu.style.display = "none"
}
document.getElementById("close-ham-menu").onclick = () => {
    hamMenu.style.display = "none"
    openHamMenu.style.display = "block"
}

// Project pop up windows
const projects = document.getElementsByClassName("project")

for (let project of projects) {
    const open = project.getElementsByClassName("open-window")[0]
    const model = project.getElementsByClassName("window-model")[0]
    const close = model.getElementsByClassName("close-window")[0]

    open.onclick = () => model.style.display = "block"
    close.onclick = () => model.style.display = "none"
    model.onclick = event => {
        if (event.target === model) {
            model.style.display = "none"
        }
    }
}