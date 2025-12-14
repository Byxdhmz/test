/* ========== 1. 翻页（路径已适配 pages/ 文件夹） ========== */
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
const cur = pages.indexOf(location.pathname.split('/').pop());
if (cur > -1) {
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  prev.href = cur === 0 ? '#' : pages[cur - 1];
  next.href = cur === pages.length - 1 ? '#' : pages[cur + 1];
  if (cur === 0)           prev.setAttribute('disabled', '');
  if (cur === pages.length - 1) next.setAttribute('disabled', '');
}

/* ========== 2. 单击刷新 ========== */
document.getElementById('refresh').addEventListener('click', () => {
  location.reload();
});

/* ========== 3. 双击按钮 → 随机换本地图片背景 ========== */
const imgs = [
  '../img/1.jpg',
  '../img/2.png',
  '../img/3.webp',
  '../img/4.webp'
];
document.getElementById('bgBtn').addEventListener('dblclick', () => {
  const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
  document.body.style.background = `url(${randomImg}) no-repeat center/cover fixed`;
});
