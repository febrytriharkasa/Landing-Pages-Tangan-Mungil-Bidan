export const whatsappNumber = '6281234567890'
export const encodedWhatsApp = (msg) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`
