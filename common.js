/* ===== 通用脚本 common.js · 纳西妲主题小说专用 ===== */
/* 功能：1.翻页  2.刷新  3.双击换背景  4.背景持久化(无闪屏)     */

/* 0. 页面刚解析就把上次背景塞进<body>，比CSS文件更早生效，避免闪屏 */
(() => {
  const savedBg = localStorage.getItem('bgImage');
  if (savedBg) document.body.style.background = savedBg;
})();

/* 1. 等 DOM 解析完再干活 *****************************************************************/
window.addEventListener('DOMContentLoaded', () => {
  /* ---------------- 翻页逻辑（适配 index/book/book1/3.html 这种深度） ---------------- */
  (() => {
    const path  = location.pathname;                               //  /root/book/book1/3.html
    const match = path.match(/\/book\/(book\d+)\/(\d+)\.html$/);   // 注意多了 /book
    if (!match) return;   // 不在阅读页就跳过
    const book  = match[1];                                        // "book1"
    let   page  = parseInt(match[2], 10);                          // 3

    const totalPage = { book1: 179, book2: 120, book3: 98 };
    const max = totalPage[book] || 999;

    const prevPage = page > 1 ? `../${book}/${page - 1}.html` : null;
    const nextPage = page < max ? `../${book}/${page + 1}.html` : null;

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (prevBtn) {
      if (prevPage) {
        prevBtn.href = prevPage;
        prevBtn.addEventListener('click', e => {
          e.preventDefault();
          localStorage.setItem('bgImage', document.body.style.background);
          location.href = prevPage;
        });
      } else prevBtn.style.display = 'none';
    }

    if (nextBtn) {
      if (nextPage) {
        nextBtn.href = nextPage;
        nextBtn.addEventListener('click', e => {
          e.preventDefault();
          localStorage.setItem('bgImage', document.body.style.background);
          location.href = nextPage;
        });
      } else nextBtn.style.display = 'none';
    }

    /* 键盘左右箭头 */
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft'  && prevPage) location.href = prevPage;
      if (e.key === 'ArrowRight' && nextPage) location.href = nextPage;
    });
  })();

  /* ---------------- 刷新按钮 ---------------- */
  const refreshBtn = document.getElementById('refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      localStorage.setItem('bgImage', document.body.style.background);
      location.reload();
    });
  }

/* ---------------- 双击换背景 ---------------- */
const bgBtn = document.getElementById('bgBtn');
const imgs = [
  '../../img/1.jpg',
  '../../img/2.png',
  '../../img/3.webp',
  '../../img/4.webp'
];
if (bgBtn) {
  bgBtn.addEventListener('dblclick', e => {
    e.preventDefault();                       // 阻止浏览器默认双击行为
    const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    const bgValue = `url(${randomImg}) no-repeat center/cover fixed`;
    document.body.style.background = bgValue;
    localStorage.setItem('bgImage', bgValue);
  });
}
});
