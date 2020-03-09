
/* full screen gallery */

const galleryImages = Array.from(document.querySelectorAll(".work-img"));
let visibleImages = galleryImages.filter(img => !img.classList.contains("is-hidden"));
const galleryFullscreen = document.querySelector(".gallery-fullscreen")
const galleryCloseButton = document.querySelector(".gallery-close")
const siteOverlay = document.querySelector(".site-overlay");

//expandable image gallery

//work filter

const works = Array.from(document.querySelectorAll(".work"))
const workFilters = document.querySelectorAll(".work-filter")
workFilters.forEach(filter => {
    filter.addEventListener("click", (e) => {
        visibleImages = [];
        workFilters.forEach(item => {
            if (item !== e.target)
                item.classList.remove("is-active")
            else {
                if (!e.target.classList.contains("is-active")) {
                    e.target.classList += " is-active"
                    const type = filter.getAttribute("value")
                    works.forEach(work => {
                        if (type === "all") {
                            work.classList.remove("is-hidden")
                            visibleImages.push(work.querySelector("img"))
                        }
                        else {
                            if (work.getAttribute("type") !== type && !work.classList.contains("is-hidden")) work.classList += " is-hidden"
                            else {
                                work.classList.remove("is-hidden")
                                visibleImages.push(work.querySelector("img"))
                            }
                        }

                    })
                }
            }
        })
    })
})