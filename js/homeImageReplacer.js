/*replace home image at interval */
const homeImgs = document.querySelectorAll(".home__img")
let homeImgIndex = 0;
setInterval(() => {
    homeImgs.forEach(img => {
        img.classList.remove("is-showing")
    })
    if (homeImgIndex >= homeImgs.length - 1) homeImgIndex = 0
    else homeImgIndex++
    homeImgs[homeImgIndex].classList += " is-showing"
}, 4500);