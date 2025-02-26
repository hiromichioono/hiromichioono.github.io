function switchMode(e) {
    const d = document.body.classList;
    if (d.contains("dark")) {
        e.innerHTML = "☀️";
        d.remove("dark");
    } else {
        e.innerHTML = "🌙";
        d.add("dark");
    }
}

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.querySelector("#theme-switch").innerHTML = "🌙";
}