document.addEventListener("DOMContentLoaded", function () {
  const whatsappContainer = document.getElementById("whatsapp-container");
  if (!whatsappContainer) return;

  fetch("whatsapp.html")
    .then(response => response.text())
    .then(html => {
      whatsappContainer.innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando el botón de WhatsApp:", error);
    });
});
