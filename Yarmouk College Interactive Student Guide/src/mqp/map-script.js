document.addEventListener("DOMContentLoaded", () => {
  // 1. تهيئة الخريطة (مركزة على موقع الكلية)
  const map = L.map('map').setView([33.315, 44.366], 16);

  // إضافة طباعة الخريطة التصميمية
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© كلية اليرموك الجامعة'
  }).addTo(map);

  // تعريف العلامات للأقسام
  const locations = [
    { lat: 33.315, lng: 44.366, title: "العمادة", desc: "بناية العمادة - الطابق الأرضي" },
    { lat: 33.316, lng: 44.367, title: "قسم علوم الحاسوب", desc: "بناية الأقسام الهندسية - الطابق الثاني" },
    { lat: 33.314, lng: 44.365, title: "قسم الأمن السيبراني", desc: "بناية التكنولوجيا - الطابق الثالث" },
    { lat: 33.3155, lng: 44.3655, title: "المكتبة المركزية", desc: "بناية المكتبة - الطابق الأول" }
  ];

  const markers = [];

  // إضافة العلامات للخريطة
  locations.forEach((loc, index) => {
    const marker = L.marker([loc.lat, loc.lng]).addTo(map);
    marker.bindPopup(`<b>${loc.title}</b><br>${loc.desc}`);
    markers.push(marker);
  });

  // ربط القائمة الجانبية بالخريطة عند الضغط
  const locCards = document.querySelectorAll('.loc-card');
  locCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      locCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const lat = parseFloat(card.getAttribute('data-lat'));
      const lng = parseFloat(card.getAttribute('data-lng'));

      // تحريك الخريطة بسلاسة للموقع وفتح نافذة المعلومات
      map.setView([lat, lng], 18, { animate: true });
      markers[index].openPopup();
    });
  });

  // الوضع الليلي
  const themeToggle = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
});