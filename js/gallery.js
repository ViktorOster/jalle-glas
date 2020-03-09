
/* full screen gallery */

const galleryImages = Array.from(document.querySelectorAll(".work-img"));
let visibleImages = galleryImages.filter(img => !img.classList.contains("is-hidden"));
const galleryFullscreen = document.querySelector(".gallery-fullscreen")
const galleryCloseButton = document.querySelector(".gallery-close")
const siteOverlay = document.querySelector(".site-overlay");

//expandable image gallery

galleryImages.forEach(function (img) {
    img.addEventListener("click", function (e) {
        if (!img.classList.contains("is-expanded")) {
            img.className += " is-expanded";
            //set the img src to the bigger image by removing "-small.jpg" from end off image and appending .jpg to end
            //but only filename contains "small"
            if (img.src.includes("small"))
                img.src = imgElement.src.substring(0, img.src.length - 10) + ".jpg"
            siteOverlay.className += " is-visible is-gallery";
            galleryFullscreen.className += " is-visible";
        }
    });
});
galleryCloseButton.addEventListener("click", function (e) {
    galleryImages.forEach(function (img) {
        if (img.classList.contains("is-expanded")) {
            img.classList.remove("is-expanded");
            siteOverlay.classList.remove("is-visible");
            galleryFullscreen.classList.remove("is-visible");
            siteOverlay.classList.remove("is-gallery");
        }
    });
});

var closeButtons = document.querySelectorAll(".button-close");
closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        btn.parentElement.classList.remove("is-visible");
        btn.parentElement.classList.remove("is-expanded");
        siteOverlay.classList.remove("is-visible");
    });
});
var galleryNext = document.querySelector(".gallery-next");
galleryNext.addEventListener("click", function (e) {
    var currIndex;
    visibleImages.forEach(function (img) {
        if (img.classList.contains("is-expanded")) {
            img.classList.remove("is-expanded");
            currIndex = visibleImages.indexOf(img);
        }
    });
    if (visibleImages[currIndex + 1]) visibleImages[currIndex + 1].className += " is-expanded";
    else visibleImages[0].className += " is-expanded";
});
var galleryPrev = document.querySelector(".gallery-prev");
galleryPrev.addEventListener("click", function (e) {
    var currIndex;
    visibleImages.forEach(function (img) {
        if (img.classList.contains("is-expanded")) {
            img.classList.remove("is-expanded");
            currIndex = visibleImages.indexOf(img);
        }
    });
    if (visibleImages[currIndex - 1]) visibleImages[currIndex - 1].className += " is-expanded";
    else visibleImages[visibleImages.length - 1].className += " is-expanded";
});

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