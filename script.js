document.addEventListener("DOMContentLoaded", function () {
    loadContent("research", "content/research.md");
    loadContent("projects", "content/projects.md");
    loadContent("blog", "content/blog.md");
});

function loadContent(sectionId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId + "-content").innerHTML = marked.parse(data);
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
}