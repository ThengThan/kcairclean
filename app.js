// KC Air Clean App Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Tab Switcher
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = document.getElementById(targetId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // 2. Custom QR URL Customizer
    const inputUrl = document.getElementById('config-url-input');
    const selectSize = document.getElementById('config-size');
    const inputColor = document.getElementById('config-color');
    const btnUpdate = document.getElementById('btn-update-qr');
    const resultBox = document.getElementById('config-result-box');
    const previewImg = document.getElementById('config-qr-preview');
    const downloadBtn = document.getElementById('btn-download-configured');
    const displayQrImg = document.getElementById('display-qr-img');

    function updateConfiguredQR() {
        const urlText = inputUrl.value.trim();
        if (!urlText) {
            alert('សូមបញ្ចូល URL ទំព័ររបស់អ្នកជាមុនសិន!');
            return;
        }

        const size = selectSize.value || '800';
        const colorHex = inputColor.value.replace('#', '');
        const encodedUrl = encodeURIComponent(urlText);

        const newQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedUrl}&margin=15&color=${colorHex}&bgcolor=ffffff`;

        previewImg.src = newQrUrl;
        downloadBtn.href = newQrUrl;
        if (displayQrImg) {
            displayQrImg.src = newQrUrl;
        }
        resultBox.classList.remove('hidden');
    }

    if (btnUpdate) {
        btnUpdate.addEventListener('click', updateConfiguredQR);
    }
});
