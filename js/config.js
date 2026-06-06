/**
 * CONFIGURACIÓN PRINCIPAL DEL SISTEMA
 * =====================================
 * Aquí es donde debes pegar la URL de tu Google Apps Script Web App
 * 
 * PASOS PARA OBTENER LA URL:
 * 1. Ve a Google Apps Script: script.google.com
 * 2. Copia el código de Google-Apps-Script.gs
 * 3. Crea un nuevo proyecto Apps Script
 * 4. Pega el código
 * 5. Click en "Deploy" → "New deployment" → "Web app"
 * 6. Ejecutar como: Tu cuenta
 * 7. Quién tiene acceso: Anyone
 * 8. Copia la URL y pégala aquí ↓
 */

// ⚠️ IMPORTANTE: Reemplaza esta URL con tu Google Apps Script Web App
const API_URL = "PEGA_AQUI_TU_URL_APPS_SCRIPT_WEB_APP";

/**
 * Configuración de Google Sign-In
 * Obtén tu CLIENT_ID desde: https://console.cloud.google.com
 */
const GOOGLE_CLIENT_ID = "TU_GOOGLE_CLIENT_ID_AQUI.apps.googleusercontent.com";

/**
 * Configuración de Apple ID
 * Obtén tu Team ID y Client ID desde: https://developer.apple.com
 */
const APPLE_CLIENT_ID = "com.tuapp.web";
const APPLE_TEAM_ID = "TU_TEAM_ID";

/**
 * Configuración de Admin
 */
const ADMIN_CONFIG = {
  emailAdmin: "santitopv01@gmail.com",
  passwordHash: "admin123", // Se valida en el frontend (considerar seguridad)
  allowedDomains: ["gmail.com", "hotmail.com"], // Dominios permitidos para Google Sign-In
};

/**
 * Métodos de pago disponibles
 */
const PAYMENT_METHODS = [
  { id: "ueno", name: "Ueno Bank", icon: "🏦" },
  { id: "mango", name: "Mango", icon: "🥭" },
  { id: "tigo", name: "Tigo Money", icon: "📱" },
];

/**
 * Estados disponibles del pago
 */
const PAYMENT_STATUSES = [
  { id: "pending", label: "Pendiente", color: "#FFA500" },
  { id: "processing", label: "Procesando", color: "#4A90E2" },
  { id: "completed", label: "Completado", color: "#27AE60" },
  { id: "failed", label: "Fallido", color: "#E74C3C" },
  { id: "refunded", label: "Reembolsado", color: "#9B59B6" },
  { id: "cancelled", label: "Cancelado", color: "#95A5A6" },
];

/**
 * Validar que API_URL esté configurada
 */
function validateApiUrl() {
  if (
    API_URL === "PEGA_AQUI_TU_URL_APPS_SCRIPT_WEB_APP" ||
    API_URL.includes("AQUI") ||
    API_URL.trim() === ""
  ) {
    console.error("❌ API_URL no está configurada. Revisa config.js");
    return false;
  }
  return true;
}

/**
 * Obtener URL base sin parámetros
 */
function getApiBaseUrl() {
  return API_URL.split("?")[0];
}

console.log("✅ Configuración cargada correctamente");
