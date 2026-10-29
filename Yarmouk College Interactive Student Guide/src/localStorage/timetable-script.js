document.addEventListener("DOMContentLoaded", () => {
  // قائمة المواد لكل قسم ومرحلة
  const deptSubjectsData = {
    cs: {
      1: ["مبادئ البرمجة (C++)", "الرياضيات المنفصلة", "الدوائر الرقمية", "مهارات الحاسوب"],
      2: ["البرمجة الكائنية (OOP)", "هياكل البيانات", "هيكلية الحاسوب", "الاحتمالات والإحصاء"],
      3: ["قواعد البيانات", "شبكات الحاسوب", "هندسة البرمجيات", "أنظمة التشغيل"],
      4: ["الذكاء الاصطناعي", "أمن البيانات", "مشروع التخرج", "الحوسبة السحابية"]
    },
    cyber: {
      1: ["مبادئ الأمن السيبراني", "البرمجة الآمنة", "الرياضيات المتقطعة", "مقدمة الشبكات"],
      2: ["التشفير وأمن البيانات", "أمن أنظمة التشغيل", "بروتوكولات الشبكات", "قواعد البيانات الآمنة"],
      3: ["اختبار الاختراق الأخلاقي", "التحليل الجنائي الرقمي", "أمن الويب", "جدران الحماية"],
      4: ["إدارة المخاطر السيبرانية", "الاستجابة للحوادث", "مشروع التخرج الأمني", "أمن إنترنت الأشياء"]
    }
  };

  const deptSelect = document.getElementById("deptSelect");
  const stageSelect = document.getElementById("stageSelect");
  const subjectSelect = document.getElementById("subjectSelect");
  const addLectureForm = document.getElementById("addLectureForm");
  const scheduleTableBody = document.getElementById("scheduleTableBody");
  const clearScheduleBtn = document.getElementById("clearScheduleBtn");

  // جلب المحاضرات المحفوظة في localStorage
  let userSchedule = JSON.parse(localStorage.getItem("userSchedule")) || [];

  // تحديث قائمة المواد بناءً على القسم والمرحلة
  function updateSubjectOptions() {
    const dept = deptSelect.value;
    const stage = stageSelect.value;
    const subjects = deptSubjectsData[dept]?.[stage] || [];

    subjectSelect.innerHTML = "";
    subjects.forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub;
      opt.textContent = sub;
      subjectSelect.appendChild(opt);
    });
  }

  deptSelect.addEventListener("change", updateSubjectOptions);
  stageSelect.addEventListener("change", updateSubjectOptions);
  updateSubjectOptions();

  // عرض الجدول المحفوظ
  function renderScheduleTable() {
    scheduleTableBody.innerHTML = "";

    if (userSchedule.length === 0) {
      scheduleTableBody.innerHTML = `<tr><td colspan="5" class="empty-msg">لا توجد محاضرات مضافة للجدول بعد. استخدم النموذج أعلاه لإنشاء جدولك!</td></tr>`;
      return;
    }

    userSchedule.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${item.day}</strong></td>
        <td>${item.subject}</td>
        <td>${item.time}</td>
        <td>${item.hall}</td>
        <td>
          <button class="delete-row-btn" onclick="deleteLecture(${index})" title="حذف">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
      scheduleTableBody.appendChild(tr);
    });
  }

  // إضافة محاضرة جديدة
  addLectureForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newLecture = {
      day: document.getElementById("daySelect").value,
      subject: subjectSelect.value,
      time: document.getElementById("timeSelect").value,
      hall: document.getElementById("hallInput").value.trim()
    };

    userSchedule.push(newLecture);
    localStorage.setItem("userSchedule", JSON.stringify(userSchedule));
    
    document.getElementById("hallInput").value = "";
    renderScheduleTable();

    if (typeof gsap !== 'undefined') {
      gsap.fromTo("#scheduleTableBody tr:last-child", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
    }
  });

  // حذف محاضرة واحدة
  window.deleteLecture = function(index) {
    userSchedule.splice(index, 1);
    localStorage.setItem("userSchedule", JSON.stringify(userSchedule));
    renderScheduleTable();
  };

  // مسح الجدول بالكامل
  clearScheduleBtn.addEventListener("click", () => {
    if (confirm("هل أنت تأكد من مسح الجدول الدراسي بالكامل؟")) {
      userSchedule = [];
      localStorage.removeItem("userSchedule");
      renderScheduleTable();
    }
  });

  renderScheduleTable();

  // التحكم بالقائمة الجانبية (الهامبرغر)
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