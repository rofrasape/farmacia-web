document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("site-footer");
  if (!footerContainer) return;

  fetch("footer.html")
    .then(response => response.text())
    .then(html => {
      footerContainer.innerHTML = html;

      // Ajustar el año automáticamente
      const yearSpan = document.getElementById("year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    })
    .catch(error => {
      console.error("Error cargando el footer:", error);
    });
});
