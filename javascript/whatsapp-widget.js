function openWhatsApp() {
    const phoneNumber = "+5547992385108"; // Replace with your WhatsApp number (e.g., 5511999999999)
    const message = "Hello!"; // Optional default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
