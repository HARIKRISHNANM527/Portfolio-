// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// ===============================
// Typing Animation
// ===============================

const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Data Analyst",
    "Cybersecurity Enthusiast"
];

const roleElement = document.querySelector(".content h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 100);
}

typeEffect();

// ===============================
// Scroll Reveal
// ===============================

const sections = document.querySelectorAll("section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===============================
// Console Message
// ===============================

console.log("Welcome to Harikrishnan's Portfolio 🚀");
