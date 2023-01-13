const cursorTag = document.querySelector("div.cursors")
const balls = cursorTag.querySelectorAll("div")
const ballMassage = cursorTag.querySelector("div span")
const images = document.querySelector("img[data-hover]")
let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
    let currentX = 0
    let currentY = 0
    let speed = 0.3 - index * 0.015

    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed

        ball.style.left = currentX + "px"
        ball.style.top = currentY + "px"

        requestAnimationFrame(animate)
    }

    animate()
})


document.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
})


images.addEventListener("mouseover", function () {
    ballMassage.classList.add("visible")
    ballMassage.innerHTML = images.getAttribute("data-hover")
})
images.addEventListener("mouseout", function () {
    ballMassage.classList.remove("visible")
})