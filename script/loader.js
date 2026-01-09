var logo = document.createElement("img");
logo.className = "sv-loader-logo";
logo.src = "./img/sacred-springs-school-logo.webp";
logo.alt = "Logo";
logo.loading = "eager";
logo.onload = function () {
    logo.classList.add("fadein");
};

var loader = document.createElement("div");
loader.id = "sv-loader";

var spinner = document.createElement("div");
spinner.className = "sv-spinner";

loader.appendChild(logo);
loader.appendChild(spinner);
document.body.appendChild(loader);

window.addEventListener("load", function () {
    var e = document.getElementById("sv-loader");
    if (e) {
        document.body.style.overflow = "";
        e.classList.add("fade-out");

        const o = function (n) {
            if (n.propertyName === "opacity") {
                e.style.display = "none";
                e.removeEventListener("transitionend", o);
            }
        };

        e.addEventListener("transitionend", o);
    }
});

window.addEventListener("beforeunload", function () {
    var e = document.getElementById("sv-loader");
    if (e) {
        e.classList.remove("fade-out");
        e.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
});
