
var menuLinks = document.querySelector(".menu-links")
var hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", function () {
    menuLinks.classList.toggle("is-showing")
})

var thisYearElement = document.querySelector("#this-year")
var thisYear = new Date().getFullYear()
thisYearElement.textContent = thisYear