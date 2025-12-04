// Función para obtener el año actual y actualizar el copyright
function updateCopyrightYear() {
    // 1. Obtiene el año actual (ej: 2025)
    const currentYear = new Date().getFullYear();

    // 2. Encuentra el elemento <span> por su ID
    const yearElement = document.getElementById('currentYear');

    // 3. Si el elemento existe, actualiza su contenido
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

// Llama a la función cuando se cargue el script
updateCopyrightYear();