document.addEventListener("DOMContentLoaded", function () {
  const topbarContainer = document.getElementById("top-bar-container");
  if (!topbarContainer) return;

  fetch("topbar.html")
    .then(response => response.text())
    .then(html => {
      topbarContainer.innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando la barra superior:", error);
    });
});
