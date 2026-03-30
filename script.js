const loader = document.createElement("div");
loader.id = "loader";
loader.innerHTML = "Loading...";
document.body.appendChild(loader);

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.href.includes(".html")) {
            e.preventDefault();
            loader.style.display = "flex";

            setTimeout(() => {
                window.location = this.href;
            }, 400);
        }
    });
});