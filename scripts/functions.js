/* ************** Toggle between hiding and showing sideBar dropdown ************** */
const findActiveToggle = (dropdown) => {
    const activeToggle = dropdown.find((item) => {
        return item.id == "toggle--activated"
    })
    return activeToggle
}

const changeVisibilityDropdown = (dropdown) => {
    dropdown.forEach((item) => {
        item.addEventListener("click", function (e) {
            if (e.target.id == "toggle--activated") {
                if (e.target.hasAttribute("onclick")) {
                    window.open(e.target.attributes.href.value, "_self")
                }
                item.removeAttribute("id")
            } else {
                if (findActiveToggle(dropdown) !== undefined) {
                    findActiveToggle(dropdown).removeAttribute("id")
                }
                item.setAttribute("id", "toggle--activated")
            }
        })
    })
} 