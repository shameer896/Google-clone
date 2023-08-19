let search = document.getElementById("search")
let lucky = document.getElementById("lucky")
let input = document.getElementById("in")

search.addEventListener("click", function () {
    let t = `https://www.google.com/search?q=${input.value}`
    window.location.href = t

})
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        let t = `https://www.google.com/search?q=${input.value}`
        window.location.href = t
    }
})

lucky.addEventListener("click", function () {
    window.location.href = "https://www.google.com/doodles"
})