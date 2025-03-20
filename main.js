const textElement = document.getElementById("dynamic-text")
const dynamicTexts = ["SERVICES_", "SOLUTIONS_"]

/* Bg mouse trail */
// function setupBgMouseTrail() {
//   const particleArray = []
//   let hue = 0

//   const canvas = document.querySelector("canvas")

//   const ctx = canvas.getContext("2d")

//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight

//   window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
//   })

//   class Particle {
//     constructor(x, y) {
//       this.x = x
//       this.y = y
//       this.size = Math.random() * 10 + 1
//       this.speedX = Math.random() * 3 - 1.5
//       this.speedY = Math.random() * 3 - 1.5
//       this.hue = hue
//     }
//     draw() {
//       if (!ctx) return

//       ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`
//       ctx.shadowBlur = 70
//       ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`
//       ctx.beginPath()
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//       ctx.fill()
//       ctx.shadowBlur = 0
//     }
//     update() {
//       this.x += this.speedX
//       this.y += this.speedY
//       this.size -= 0.2

//       this.draw()
//     }
//   }

//   function animate() {
//     if (!ctx) return

//     requestAnimationFrame(animate)

//     ctx.globalCompositeOperation = "destination-out"

//     ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
//     ctx.fillRect(0, 0, canvas.width, canvas.height)

//     ctx.globalCompositeOperation = "source-over"

//     particleArray.forEach((particle, index) => {
//       particle.update()
//       if (particle.size <= 0.3) {
//         particleArray.splice(index, 1)
//       }
//     })

//     hue = (hue + 5) % 360
//   }

//   window.addEventListener("touchmove", (e) => {
//     for (let i = 0; i < 3; i++) {
//       particleArray.push(
//         new Particle(e.touches[0].clientX, e.touches[0].clientY)
//       )
//     }
//   })

//   window.addEventListener("mousemove", (e) => {
//     for (let i = 0; i < 3; i++) {
//       particleArray.push(new Particle(e.x, e.y))
//     }
//   })

//   animate()
// }

/* Typewriting header */
function typeWriter(texts, textIndex = 0, charIndex = 0, isDeleting = false) {
  const currentText = texts[textIndex]
  const transitionSpeed = isDeleting ? 100 : 200 //faster deletion, slower typing

  // update text content
  textElement.textContent = currentText.substring(0, charIndex)

  if (!isDeleting) {
    charIndex++
    if (charIndex > currentText.length) {
      isDeleting = true
      setTimeout(
        () => typeWriter(texts, textIndex, charIndex, isDeleting),
        1000
      )
      return
    }
  } else {
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
    }
  }
  setTimeout(
    () => typeWriter(texts, textIndex, charIndex, isDeleting),
    transitionSpeed
  )
}

// setupBgMouseTrail()
typeWriter(dynamicTexts)
