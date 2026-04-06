// version.js
const CURRENT_VERSION = 'v2.0.0';

// 导出供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CURRENT_VERSION };
}

// 兼容旧版初始化（如果页面有.version元素）
window.addEventListener('DOMContentLoaded', () => {
    const versionElements = document.querySelectorAll('.version');
    versionElements.forEach(el => {
        el.textContent = '版本号：' + CURRENT_VERSION;
        el.style.position = 'fixed';
        el.style.bottom = '10px';
        el.style.left = '50%';
        el.style.transform = 'translateX(-50%)';
        el.style.fontSize = '14px';
        el.style.color = 'var(--text-secondary)';
    });
});
