// Hedef doğum günü tarihini ayarlayın (yıl, ay, gün)
const birthday = new Date('2024-09-01');

function countdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    // Gün, saat, dakika ve saniyeyi hesaplayın
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML'e süreyi yazdırın
    document.getElementById('countdown').innerHTML = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
}

// Her saniyede bir süreyi güncelleyin
setInterval(countdown, 1000);
