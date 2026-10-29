document.addEventListener("DOMContentLoaded", () => {
  // قاعدة البيانات الدقيقة للمواد لكل مرحلة وقسم مع روابط التحميل
  const subjectsData = {
    cs: {
      1: {
        pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        items: [
          { name: "مبادئ البرمجة (C++)", desc: "أساسيات لغة البرمجة وهياكل التحكم التكرارية والشرطية", icon: "fa-code" },
          { name: "الرياضيات المنفصلة", desc: "الأسس الرياضية والمجموعات والمنطق الرياضي لعلوم الحاسوب", icon: "fa-calculator" },
          { name: "الدوائر الرقمية والمنطقية", desc: "دراسة البوابات المنطقية وتبسيط الدوائر الإلكترونية", icon: "fa-microchip" },
          { name: "مهارات الحاسوب", desc: "أساسيات استخدام نظام التشغيل وبرمجيات الأوفيس", icon: "fa-laptop" }
        ]
      },
      2: {
        pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        items: [
          { name: "البرمجة الكائنية (OOP)", desc: "مفاهيم التغليف، الوراثة، وتعدد الأشكال باستخدام C++ أو Java", icon: "fa-cubes" },
          { name: "هياكل البيانات", desc: "دراسة القوائم المرتبطة (Linked Lists)، المكدسات، والطوابير", icon: "fa-sitemap" },
          { name: "هيكلية وتنظيم الحاسوب", desc: "تصميم وحدات المعالجة المركزية وإدارة الذاكرة الرئيسية", icon: "fa-server" },
          { name: "الاحتمالات والإحصاء", desc: "التحليل الإحصائي، التوزيعات، وتطبيقاتها الرياضية", icon: "fa-chart-pie" }
        ]
      },
      3: {
        pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        items: [
          { name: "قواعد البيانات (Databases)", desc: "تصميم قواعد البيانات العلائقية ونظم إدارة البيانات SQL", icon: "fa-database" },
          { name: "شبكات الحاسوب", desc: "بروتوكولات الاتصال ونماذج طبقات الشبكة OSI و TCP/IP", icon: "fa-network-wired" },
          { name: "هندسة البرمجيات", desc: "مراحل دورة حياة تطوير البرمجيات وإدارة المشاريع التقنية", icon: "fa-project-diagram" },
          { name: "أنظمة التشغيل", desc: "إدارة العمليات (Processes)، الخيوط (Threads)، والتزامن", icon: "fa-desktop" }
        ]
      },
      4: {
        pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        items: [
          { name: "الذكاء الاصطناعي", desc: "خوارزميات البحث المتقدمة، وأنظمة اتخاذ القرار الذكية", icon: "fa-brain" },
          { name: "أمن البيانات والسيبراني", desc: "حماية المعلومات، التشفير الأساسي، وأمن الشبكات", icon: "fa-shield-halved" },
          { name: "مشروع التخرج", desc: "إنجاز تطبيق برمجي أو بحث علمي متكامل لتخرج الطالب", icon: "fa-graduation-cap" },
          { name: "الحوسبة السحابية", desc: "استخدام خدمات ومنصات البنية التحتية السحابية الحديثة", icon: "fa-cloud" }
        ]
      }
    },
    cyber: {
      1: {
        pdf: "https://t.me/Cybyarmook_bot",
        items: [
          { name: "مبادئ الأمن السيبراني", desc: "مفاهيم حماية المعلومات والثغرات الرقمية الأساسية", icon: "fa-user-shield" },
          { name: "أساسيات البرمجة الآمنة", desc: "كتابة شيفرات برمجية خالية من الثغرات الأمنية الشائعة", icon: "fa-code" },
          { name: "الرياضيات المتقطعة", desc: "التحليل الرياضي المتقدم لأنظمة التشفير الحديثة", icon: "fa-square-root-variable" },
          { name: "مقدمة في الشبكات", desc: "أساسيات ربط وتأمين البنية التحتية للشبكات", icon: "fa-network-wired" }
        ]
      },
      2: {
        pdf: "https://t.me/Cybyarmook_bot",
        items: [
          { name: "التشفير وأمن البيانات", desc: "خوارزميات التشفير المتماثل وغير المتماثل وتطبيقاتها", icon: "fa-key" },
          { name: "أمن أنظمة التشغيل", desc: "تأمين صلاحيات المستخدمين، الصلاحيات المتقدمة، والأنظمة", icon: "fa-lock" },
          { name: "بروتوكولات الشبكات المتقدمة", desc: "تأمين قنوات الاتصال والتحقق من الهوية الرقمية", icon: "fa-ethernet" },
          { name: "قواعد البيانات الآمنة", desc: "حماية قواعد البيانات من الاختراقات وحقن SQL", icon: "fa-database" }
        ]
      },
      3: {
        pdf: "https://t.me/Cybyarmook_bot",
        items: [
          { name: "اختبار الاختراق الأخلاقي", desc: "كشف الثغرات وأساليب الهجوم والدفاع السيبراني", icon: "fa-bug-slash" },
          { name: "التحليل الجنائي الرقمي", desc: "جمع الأدلة الرقمية وتتبع مصادر الجرائم الإلكترونية", icon: "fa-magnifying-glass-chart" },
          { name: "أمن الويب وتطبيقاته", desc: "حماية تطبيقات الويب والثغرات الأمنية (OWASP Top 10)", icon: "fa-globe" },
          { name: "جدران الحماية ونظم كشف التسلل", desc: "أنظمة منع التسلل وجدران الحماية المتقدمة (IDS/IPS)", icon: "fa-fire-shield" }
        ]
      },
      4: {
        pdf: "https://t.me/Cybyarmook_bot",
        items: [
          { name: "إدارة المخاطر السيبرانية", desc: "تقييم التهديدات، تحليل المخاطر، وخطط استمرارية العمل", icon: "fa-triangle-exclamation" },
          { name: "الاستجابة للحوادث السيبرانية", desc: "إجراءات التعامل الفوري واحتواء الهجمات الإلكترونية", icon: "fa-headset" },
          { name: "مشروع التخرج الأمني", desc: "تطوير أداة حماية أو نظام دفاعي سيبراني متقدم", icon: "fa-graduation-cap" },
          { name: "أمن إنترنت الأشياء (IoT)", desc: "تأمين الأجهزة الذكية المتصلة بالشبكة الصناعية والمنزلية", icon: "fa-microchip" }
        ]
      }
    }
  };

  const deptSelect = document.getElementById('deptSelect');
  const stageTabBtns = document.querySelectorAll('.stage-tab-btn');
  const subjectsList = document.getElementById('subjectsList');
  const stageHeaderTitle = document.getElementById('stageHeaderTitle');
  const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');

  let currentStage = 1;

  function renderSubjects() {
    const dept = deptSelect.value;
    const stageData = subjectsData[dept]?.[currentStage] || { items: [], pdf: "#" };
    
    const stageNames = { 1: "الأولى", 2: "الثانية", 3: "الثالثة", 4: "الرابعة" };
    stageHeaderTitle.textContent = `مواد المرحلة ${stageNames[currentStage]}`;
    pdfDownloadBtn.href = stageData.pdf;

    subjectsList.innerHTML = '';
    
    stageData.items.forEach(sub => {
      const div = document.createElement('div');
      div.className = "subject-item";
      div.innerHTML = `
        <div class="subject-icon"><i class="fa-solid ${sub.icon}"></i></div>
        <div class="subject-text">
          <h4>${sub.name}</h4>
          <p>${sub.desc}</p>
        </div>
      `;
      subjectsList.appendChild(div);
    });

    // أنيميشن GSAP
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(".subject-item", 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" }
      );
    }
  }

  // أحداث التغيير
  deptSelect.addEventListener('change', renderSubjects);

  stageTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStage = btn.getAttribute('data-stage');
      renderSubjects();
    });
  });

  // تشغيل أولي
  renderSubjects();

  // القائمة الهمبركرية الجانبية
  const menuToggle = document.getElementById('menuToggle');
  const sidebarMenu = document.getElementById('sidebarMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');

  function toggleSidebar() {
    sidebarMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  }

  if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
  if (menuOverlay) menuOverlay.addEventListener('click', toggleSidebar);

  // الوضع الليلي والنهاري
  const themeToggle = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(themeToggle, { rotate: 0 }, { rotate: 360, duration: 0.4 });
      }
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }
});