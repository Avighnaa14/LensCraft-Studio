window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
        navbar.style.padding = "10px 0";
    } else {
        navbar.style.background = "rgba(0,0,0,.9)";
        navbar.style.padding = "15px 0";
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = ".8s";
    observer.observe(section);
});

const numbers = document.querySelectorAll(".why-us h4");

numbers.forEach(number => {
    const target = number.innerText;
    const value = parseInt(target);

    if (!isNaN(value)) {
        let count = 0;

        const update = () => {
            if (count < value) {
                count += Math.ceil(value / 80);
                if (count > value) count = value;
                number.innerText = count + target.replace(/[0-9]/g, "");
                requestAnimationFrame(update);
            }
        };

        update();
    }
});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#111";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};