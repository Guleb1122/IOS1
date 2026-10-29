// قاعدة بيانات الأقسام (علوم الحاسوب، الأمن السيبراني، هندسة الشبكات، الذكاء الاصطناعي)
const departmentsData = {
  cs: {
    title: "قسم علوم الحاسوب",
    navTitle: "علوم الحاسوب",
    location: "بناية الأقسام الهندسية - الطابق الثاني",
    icon: "fa-desktop",
    about: "يعنى قسم علوم الحاسوب بتوفير بيئة تعليمية متميزة لتأهيل الكوادر وتطوير المهارات البرمجية والتحليلية والأنظمة الرقمية المتقدمة وفق أعلى المعايير الأكاديمية.",
    email: "cs-department@alyarmouk.edu.iq",
    stages: {
      1: { subjects: ["البرمجة بلغة C++", "الرياضيات والمنطق الرقمي", "الدوائر الرقمية", "مبادئ تكنولوجيا المعلومات"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      2: { subjects: ["البرمجة الكائنية (OOP)", "هياكل البيانات والخوارزميات", "هيكلية الحاسوب", "الاحتمالات والإحصاء"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      3: { subjects: ["قواعد البيانات", "شبكات الحاسوب", "هندسة البرمجيات", "أنظمة التشغيل"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      4: { subjects: ["الذكاء الاصطناعي", "أمن البيانات", "مشروع التخرج", "الحوسبة السحابية"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
    }
  },
  cyber: {
    title: "قسم الأمن السيبراني",
    navTitle: "الأمن السيبراني",
    location: "بناية التكنولوجيا - الطابق الثالث",
    icon: "fa-user-shield",
    about: "يهدف قسم الأمن السيبراني إلى إعداد متخصصين في حماية الأنظمة والشبكات الرقمية، واكتشاف الثغرات الأمنية والتعامل مع التهديدات السيبرانية المتقدمة.",
    email: "cyber-security@alyarmouk.edu.iq",
    stages: {
      1: { subjects: ["مبادئ الأمن السيبراني", "أساسيات البرمجة الآمنة", "الرياضيات المتقطعة", "مقدمة في الشبكات"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      2: { subjects: ["التشفير وأمن البيانات", "أمن أنظمة التشغيل", "بروتوكولات الشبكات", "قواعد البيانات الآمنة"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      3: { subjects: ["اختبار الاختراق الأخلاقي", "التحليل الجنائي الرقمي", "أمن الويب", "جدران الحماية"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      4: { subjects: ["إدارة المخاطر السيبرانية", "الاستجابة للحوادث", "مشروع التخرج", "أمن إنترنت الأشياء (IoT)"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
    }
  },

  ai: {
    title: "قسم الذكاء الاصطناعي",
    navTitle: "الذكاء الاصطناعي",
    location: "بناية الأقسام الهندسية - الطابق الثاني ",
    icon: "fa-brain",
    about: "يهتم قسم الذكاء الاصطناعي بدراسة خوارزميات التعلم العميق، شبكات العصب الاصطناعية، معالجة اللغات الطبيعية، وأنظمة اتخاذ القرار الذكية.",
    email: "ai-department@alyarmouk.edu.iq",
    stages: {
      1: { subjects: ["مقدمة في الذكاء الاصطناعي", "برمجة بايثون (Python)", "الرياضيات والإحصاء المتقدم", "منهجية التفكير المنطقي"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      2: { subjects: ["هياكل البيانات للذكاء الاصطناعي", "خوارزميات البحث والتحسين", "تعلم الآلة (Machine Learning)", "الجبر الخطي التطبيقي"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      3: { subjects: ["التعلم العميق (Deep Learning)", "معالجة اللغات الطبيعية (NLP)", "رؤية الحاسوب (Computer Vision)", "الأنظمة الخبيرة"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      4: { subjects: ["الروبوتات الذكية", "أخلاقيات الذكاء الاصطناعي", "مشروع التخرج المتقدم", "تطبيقات الذكاء الاصطناعي الموزع"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
    }
  },
    sz: {
    title: "قسم هندسه اليزر",
    navTitle: "هندسه اليزر",
    location: "بناية التكنولوجيا - الطابق الثاني",
    icon: "fa-brain",
    about: "تستخدم تقنية الليزر في مجالات مختلفة وتطبيقات مختلفة كالطبية والعلوم والصناعية والاتصالات وانظمة الحماية والقياسات. حيث تستغرق الدراسة في هذا القسم اربع سنوات للحصول على شهادة البكالوريوس و سنتين للحصول على شهادة الماجستير في علوم هندسة الليزر والالكترونيات البصرية",
    email: "ai-department@alyarmouk.edu.iq",
    stages: {
      1: { subjects: ["رسم هندسي ، برمجة ، رياضيات" ,"ثرمو داينمك ","الكترونيك" ], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      2: { subjects: ["تصميم ليزر", "معالجات دقيق" ,"طبيقات ليزر", "اتصالات بصرية "," تصميم ليز"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      3: { subjects: [" الكترونيك القدرة  ","مكيانيكا الكم "," فيزياء الليزر"," اتصالات "," منظومات الليزر"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      4: { subjects: ["الاطياف" ," قياسيات "," دوائر(Ac)"], downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
    }
  }
};

// قراءة نوع القسم من الرابط
const urlParams = new URLSearchParams(window.location.search);
const currentDeptKey = urlParams.get('dept') || 'cs';
const deptInfo = departmentsData[currentDeptKey] || departmentsData['cs'];

// تحديث النصوص والأيقونة في الواجهة
document.getElementById('navDepartmentTitle').textContent = deptInfo.navTitle;
document.getElementById('deptTitle').textContent = deptInfo.title;
document.getElementById('deptLocation').textContent = deptInfo.location;
document.getElementById('aboutText').textContent = deptInfo.about;
document.getElementById('deptEmail').textContent = deptInfo.email;
document.getElementById('deptIconElem').className = `fa-solid ${deptInfo.icon}`;

// إدارة محتوى المراحل الدراسية والتحميل
const stageBtns = document.querySelectorAll('.stage-card');
const currentStageTitle = document.getElementById('currentStageTitle');
const materialsList = document.getElementById('materialsList');
const downloadBtn = document.getElementById('downloadBtn');

function updateStageContent(stageNum) {
  const stageData = deptInfo.stages[stageNum];
  const stageNames = { 1: "الأولى", 2: "الثانية", 3: "الثالثة", 4: "الرابعة" };
  currentStageTitle.textContent = `مواد المرحلة ${stageNames[stageNum]}`;
  
  materialsList.innerHTML = '';
  stageData.subjects.forEach(subject => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> <span>${subject}</span>`;
    materialsList.appendChild(li);
  });

  downloadBtn.href = stageData.downloadLink;
  gsap.fromTo("#stageMaterialsBox", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
}

updateStageContent(1);

stageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    stageBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateStageContent(btn.getAttribute('data-stage'));
  });
});

// التحكم بقائمة الهامبرغر الجانبية (Hamburger Menu Drawer)
const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

function toggleSidebar() {
  sidebarMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);
menuOverlay.addEventListener('click', toggleSidebar);

// الوضع الليلي والنهاري
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  gsap.fromTo(themeToggle, { rotate: 0 }, { rotate: 360, duration: 0.4 });
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// تبويبات التنقل الرئيسية
const tabBtns = document.querySelectorAll('.dept-tabs .tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const selectedPane = document.getElementById('tab-' + btn.getAttribute('data-tab'));
    if (selectedPane) {
      selectedPane.classList.add('active');
      gsap.fromTo(selectedPane, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
    }
  });
});