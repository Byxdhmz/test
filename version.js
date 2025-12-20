/// version.js
const CURRENT_VERSION = 'v1.0.0';

window.addEventListener('DOMContentLoaded', () => {
  const versionElements = document.querySelectorAll('.version');
  versionElements.forEach(el => {
    el.textContent = '版本号：' + CURRENT_VERSION;
    // 统一居中样式
    el.style.position = 'fixed';
    el.style.bottom = '10px';
    el.style.left = '50%';
    el.style.transform = 'translateX(-50%)';
    el.style.fontSize = '0.9rem';
    el.style.color = 'gold';   /* 暗色背景用白色系 */
    /* 如果页面背景偏白，可把 color 改成 #666 */
  });
});
