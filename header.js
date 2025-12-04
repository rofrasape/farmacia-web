document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("site-header");
  if (!headerContainer) return;

  fetch("header.html")
    .then(response => response.text())
    .then(html => {
      headerContainer.innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando el header:", error);
    });
});
