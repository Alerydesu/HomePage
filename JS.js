//カスタムスライダー
window.addEventListener('DOMContentLoaded', () => {
  const range = document.getElementById('range');
  range.addEventListener('input', () => {
    document.body.style.setProperty('--pos', `${range.value}%`);
  });
});


//Go to Up Button

const scrollBtn = document.getElementById('scroll_top_btn');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
