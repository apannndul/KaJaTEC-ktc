document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseMessage = document.getElementById('response-message');
    
    // Asumsi: Jika Anda menggunakan gambar tengah, tambahkan ini
    const randomImage = document.querySelector('.random-image'); 
    let currentRotation = 0;
    const ROTATION_STEP = 30; // Rotasi per klik 'TIDAK'

    let scaleYes = 1.0;
    let scaleNo = 1.0;
    
    const INCREASE_FACTOR = 0.20; 
    const DECREASE_FACTOR = 0.15; 
    const MIN_SCALE_NO = 0.1; 
    
    
    // --- Logika untuk Tombol YA (DIMODIFIKASI UNTUK REDIRECT) ---
    yesBtn.addEventListener('click', () => {
        // PERINTAH PENTING: Mengarahkan browser ke halaman success.html
        window.location.href = 'anjai.html'; 
    });
    
    // --- Logika untuk Tombol TIDAK (Perubahan Skala dan Rotasi) ---
    noBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        // 1. Kurangi skala tombol NO
        scaleNo = Math.max(MIN_SCALE_NO, scaleNo - DECREASE_FACTOR);
        noBtn.style.transform = `scale(${scaleNo})`;

        // 2. Tambah skala tombol YES
        scaleYes += INCREASE_FACTOR;
        yesBtn.style.transform = `scale(${scaleYes})`;

        // 3. Logika Rotasi Gambar (Jika ada gambar tengah)
        if (randomImage) {
            currentRotation += ROTATION_STEP; 
            randomImage.style.transform = `rotate(${currentRotation}deg)`;
        }

        // 4. Tampilkan pesan lucu
        const messages = [
            "🚫 Woe ukuran gua nyusut!",
            "🏃🏻‍♂️ eaa",
            "🤯 UDAHH COK UDAH MAU ILANG NI TULISAN",
            "⚠️ WLEEEE😛😛",
        ];
        
        responseMessage.classList.remove('hidden');
        responseMessage.style.color = '#C47A7A'; 
        responseMessage.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    });
});