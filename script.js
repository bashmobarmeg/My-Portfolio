// زر Home
document.getElementById("Home").onclick = function () {
    window.location.href = "#";
};

// زر شاهد اعمالي في الهيدر
document.getElementById("view-work").onclick = function () {
    document.querySelector(".hero-article4").scrollIntoView({
        behavior: "smooth"
    });
};

// زر تواصل معي
document.getElementById("Contact").onclick = function () {

    const el = document.querySelector(".footer-btn");

    let count = 0;

    const interval = setInterval(() => {

        el.classList.add("glow-active");

        setTimeout(() => {
            el.classList.remove("glow-active");
        }, 200);

        count++;

        if (count === 2) {
            clearInterval(interval);
        }

    }, 300);

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

// زر السيرة الذاتية
document.getElementById("CV").onclick = function () {
    window.open("", "_blank");
};

// زر شاهد اعمالي داخل الهيرو
document.querySelector(".view-work-btn").onclick = function () {
    document.querySelector(".hero-article4").scrollIntoView({
        behavior: "smooth"
    });
};

// زر visit1
document.getElementById("visit1").onclick = function () {
    window.open("https://bashmobarmeg.github.io/My-Portfolio/", "_blank");
};

// زر visit2
document.getElementById("visit2").onclick = function () {
    window.open("", "_blank");
};

// زر visit3
document.getElementById("visit3").onclick = function () {
    window.open("https://bashmobarmeg.github.io/calculator/", "_blank");
};



// زر GitHup
document.getElementById("GitHup").onclick = function () {
    window.open("https://github.com/bashmobarmeg", "_blank");
};

document.querySelector(".top-btn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
