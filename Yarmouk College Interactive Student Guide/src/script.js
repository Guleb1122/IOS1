// 1. إدارة الوضع الليلي/النهاري مع الحفظ
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  gsap.fromTo(themeToggle, 
    { rotate: 0 }, 
    { rotate: 360, duration: 0.4 }
  );

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// 2. التحكم بقائمة الموبايل (Hamburger Menu)
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// إغلاق القائمة فور النقر على أي رابط داخلها
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// 3. التحريكات التفاعلية بواسطة GSAP عند تحميل الموقع
gsap.from(".hero-content > *", {
  y: 30,
  opacity: 0,
  duration: 0.7,
  stagger: 0.15,
  ease: "power2.out"
});

gsap.from(".nav-card", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  delay: 0.4
});

gsap.from(".dept-card", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  delay: 0.7
});