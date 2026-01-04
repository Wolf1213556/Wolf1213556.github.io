// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelector(".nav-links")
const navItems = document.querySelectorAll(".nav-links a")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking a link
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document
  .querySelectorAll(".content-card, .dept-card, .anomaly-card, .protocol-card, .action-card, .personnel-card")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })

// Redacted text hover effect
const redactedElements = document.querySelectorAll(".redacted")
redactedElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.animation = "glitch-1 0.3s infinite"
  })
  el.addEventListener("mouseleave", () => {
    el.style.animation = "none"
  })
})

// Random glitch effect on page load
function randomGlitch() {
  const glitchElements = document.querySelectorAll(".glitch, .glitch-large")
  const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)]

  if (randomElement) {
    randomElement.style.animation = "none"
    setTimeout(() => {
      randomElement.style.animation = ""
    }, 100)
  }
}

// Trigger random glitch every 5-10 seconds
setInterval(randomGlitch, Math.random() * 5000 + 5000)

// Active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section, .hero")
  const navLinks = document.querySelectorAll(".nav-links a")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})
