// 1. الوضع الليلي / النهار مع الحفظ
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  gsap.fromTo(themeToggle, { rotate: 0 }, { rotate: 360, duration: 0.4 });

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// 2. قائمة الهاتف
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// 3. فلترة التبويبات
const tabBtns = document.querySelectorAll('.tab-btn');
const placeCards = document.querySelectorAll('.place-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    placeCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3 });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 4. البحث الفوري
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  placeCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    const location = card.getAttribute('data-location').toLowerCase();
    if (title.includes(query) || location.includes(query)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

// 5. إدارة لوحة معلومات المكان (مع عرض الصورة والوصف وزر الانتقال)
const infoDrawer = document.getElementById('infoDrawer');
const infoOverlay = document.getElementById('infoOverlay');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

const drawerTitle = document.getElementById('drawerTitle');
const drawerLocation = document.getElementById('drawerLocation').querySelector('span');
const drawerDescription = document.getElementById('drawerDescription');
const drawerCategory = document.getElementById('drawerCategory');
const drawerImg = document.getElementById('drawerImg');
const drawerLinkBtn = document.getElementById('drawerLinkBtn');

placeCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const location = card.getAttribute('data-location');
    const description = card.getAttribute('data-description');
    const category = card.getAttribute('data-category');
    const link = card.getAttribute('data-link');
    const img = card.getAttribute('data-img');

    // تعبئة البيانات في اللوحة الجانبية / السفلية
    drawerTitle.textContent = title;
    drawerLocation.textContent = location;
    drawerDescription.textContent = description;
    drawerImg.src = img;
    drawerLinkBtn.href = link;

    if(category === 'departments') drawerCategory.textContent = 'قسم دراسي';
    else if(category === 'services') drawerCategory.textContent = 'خدمة طلابية';
    else drawerCategory.textContent = 'مرفق جامعي';

    infoDrawer.classList.add('active');
    infoOverlay.classList.add('active');

    // أنيميشن ظهور العناصر داخل اللوحة
    gsap.from(".drawer-content > *", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      delay: 0.1
    });
  });
});

function closeDrawer() {
  infoDrawer.classList.remove('active');
  infoOverlay.classList.remove('active');
}

closeDrawerBtn.addEventListener('click', closeDrawer);
infoOverlay.addEventListener('click', closeDrawer);