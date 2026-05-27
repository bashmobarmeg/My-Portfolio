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

document.getElementById("CV").addEventListener("click", function () {
  window.open(
    "https://drive.google.com/file/d/1S50sNSR_PkVSbaKshbNVzVn9MlsEbb5K/view?usp=drive_link",
    "_blank"
  );
});

// زر شاهد اعمالي داخل الهيرو
document.querySelector(".view-work-btn").onclick = function () {
    document.querySelector(".hero-article4").scrollIntoView({
        behavior: "smooth"
    });
};

// زر visit1
document.getElementById("visit1").onclick = function () {
    window.open("https://abo-shaheen.github.io/My-Portfolio/", "_blank");
};

// زر visit2
document.getElementById("visit2").onclick = function () {
    window.open("https://abo-shaheen.github.io/Link-Hub/", "_blank");
};

// زر visit3
document.getElementById("visit3").onclick = function () {
    window.open("https://abo-shaheen.github.io/calculator/", "_blank");
};



// زر GitHub
document.getElementById("GitHub").onclick = function () {
    window.open("https://github.com/Abo-Shaheen/Abo-Shaheen", "_blank");
};

document.querySelector(".top-btn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

document.getElementById("stop").onclick = function () {
    const items = document.querySelectorAll(".div-article2, .div-article3, .div-article4");

    items.forEach(el => {
        el.classList.toggle("no-shadow");
    });
};

let elements = document.querySelectorAll(
    ".Project1, .Project2, .Project3, .visit"
);

let observer = new IntersectionObserver(function(entries){
    
    entries.forEach(function(entry){

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

elements.forEach(function(element){
    observer.observe(element);
});

document.getElementById("facebook").onclick = function () {
        window.open("https://www.facebook.com/profile.php?id=61590326522454", "_blank");
};

document.getElementById("YouTube").addEventListener("click", function () {
    window.open("https://youtube.com/@baashmobarmeg?si=4mctKGqCKmDlYWfw", "_blank");
});
