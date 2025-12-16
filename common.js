/* ===== 通用脚本 common.js · 纳西妲主题小说专用 ===== */
/* 功能：1.翻页  2.刷新  3.双击换背景  4.背景持久化(无闪屏) */
/* ===== 0. 通用恢复（放在文件最顶部） ===== */
(function(){
  const s = localStorage.getItem('bgImage');
  if(s) document.body.style.background = s;
})();

(function () {
  /* 0. 页面刚解析就把上次背景塞进<body>，比CSS文件更早生效，避免闪屏 */
  const savedBg = localStorage.getItem('bgImage');
  if (savedBg) document.body.style.background = savedBg;
})();

/* 1. 翻页逻辑 =========================================================== */
const pages = [
  'index.html',
  '2.html',
  '3.html',
  '4.html',
  '6.html',
  '7.html',
  '8.html',
  '9.html',
  '10.html',
  '11.html',
  '12.html',
  '13.html',
  '14.html'
];
const curFile = location.pathname.split('/').pop();   // 当前文件名
const cur = pages.indexOf(curFile);

if (cur > -1) {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  /* 先阻止默认跳转，再包一层“存背景->跳转” */
  prevBtn.addEventListener('click', e => {
    e.preventDefault();
    if (cur > 0) saveAndGo(pages[cur - 1]);
  });
  nextBtn.addEventListener('click', e => {
    e.preventDefault();
    if (cur < pages.length - 1) saveAndGo(pages[cur + 1]);
  });

  /* 更新按钮禁用状态 */
  if (cur === 0) prevBtn.setAttribute('disabled', '');
  if (cur === pages.length - 1) nextBtn.setAttribute('disabled', '');
}

/* 统一存储并跳转 */
function saveAndGo(url) {
  localStorage.setItem('bgImage', document.body.style.background);
  location.href = url;
}

/* 2. 刷新按钮 =========================================================== */
document.getElementById('refresh')?.addEventListener('click', () => {
  localStorage.setItem('bgImage', document.body.style.background); // 刷新也保留
  location.reload();
});

/* 3. 双击换背景 ========================================================= */
const imgs = [
  '../img/01.jpg',
  '../img/02.png',
  '../img/03.webp',
  '..img/04.webp'
];
const bgBtn = document.getElementById('bgBtn');
bgBtn?.addEventListener('dblclick', () => {
  const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
  const bgValue = `url(${randomImg}) no-repeat center/cover fixed`;
  document.body.style.background = bgValue;
  localStorage.setItem('bgImage', bgValue);
});
