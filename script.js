
// Welcome message

window.addEventListener("load", function() {
    console.log("Welcome to Omkar Naik's Portfolio!");
});

// Typing animation

const typingText = document.getElementById("typing");

const name = "Omkar Naik";

let index = 0;

function typeName() {
    if (index < name.length) {
        typingText.textContent += name.charAt(index);
        index++;
        setTimeout(typeName, 150);
    }
}

typeName();
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});