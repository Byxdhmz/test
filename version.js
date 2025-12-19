// version.js
const CURRENT_VERSION = 'v1.0.0';

// 页面加载完成后，把版本号写入 class 为 version 的元素
window.addEventListener('DOMContentLoaded', () => {
  const versionElements = document.querySelectorAll('.version');
  versionElements.forEach(el => {
    el.textContent = '版本号：' + CURRENT_VERSION;
  });
});
const pages = [
  '01.html',
  '02.html',
  '03.html',
  '04.html',
  '06.html',
  '07.html',
  '08.html',
  '09.html',
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