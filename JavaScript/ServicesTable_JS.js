//スクロール
const scrollBtn = document.getElementById('scroll_top_btn');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});


// サービスの一覧表 //
const services = {
  repair: {
    small: [["小", "オイル交換", "¥4,000"]],
    medium: [["中", "サスペンション修理", "¥12,000"]],
    large: [["大", "ブレーキ交換", "¥18,000"]],
  },
  custom: {
    small: [["小", "ハンドル交換", "¥7,000"]],
    medium: [["中", "ペイント", "¥15,000"]],
    large: [["大", "フルカスタム", "¥135,000"]],
  },
  maintenance: {
    small: [["小", "点検パック", "¥8,000"]],
    medium: [["中", "点検パック", "¥12,000"]],
    large: [["大", "点検パック", "¥18,000"]],
  }
};

if (document.getElementById('service-body')) {

  const sizeRadios = document.querySelectorAll('input[name="size"]');
  const tabs = document.querySelectorAll('.tab');
  const serviceBody = document.getElementById('service-body');

  let currentSize = 'medium';
  let currentCategory = 'repair';

  function updateTable() {
    const rows = services[currentCategory][currentSize];
    serviceBody.innerHTML = rows.map(row =>
      `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`
    ).join('');
  }

  sizeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      currentSize = radio.value;
      updateTable();
    });
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      updateTable();
    });
  });

  updateTable();
}