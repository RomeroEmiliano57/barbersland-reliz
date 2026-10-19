// Número oficial de la barbería (614 120 0032)
const TELEFONO_WHATSAPP = "526141200032";

// Función para seleccionar un servicio directamente desde el menú
function reservarServicio(nombreServicio) {
    const selectServicio = document.getElementById("servicio");
    selectServicio.value = nombreServicio;
    
    // Hacer scroll suave hacia el formulario
    document.getElementById("agendar").scrollIntoView({ behavior: 'smooth' });
}

// Escuchar el envío del formulario
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;

    // Crear mensaje formateado para WhatsApp
    const mensaje = `Hola Barbers Land CUU! 💈%0AMi nombre es *${nombre}*.%0AMe gustaría agendar una cita para:*${servicio}*%0APara la fecha: *${fecha}*.%0A¿Tienen disponibilidad?`;

    // Abrir enlace directo a WhatsApp
    const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;
    window.open(url, "_blank");
});