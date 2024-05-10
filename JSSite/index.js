document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll(".accordion-title");
    titles.forEach(title => {
        title.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
