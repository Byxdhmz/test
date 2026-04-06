/* ========== common.js 美化版：毛玻璃 + 渐变标签 + 悬浮动效 ========== */
(() => {
  /* 0. 背景持久化（最早执行，避免闪屏） */
  const savedBg = localStorage.getItem('bgImage');
  if (savedBg) document.body.style.background = savedBg;

  /* 1. 分类数据（与上一版完全一致，省略重复） */
 const BG_MAP = {
    默认: [
      { thumb: '../../thumb/默认.jpg', img: '../../img/默认.png' }
    ],
    纳西妲: [
      { thumb: '../../thumb/纳西妲1.jpg',  img: '../../img/纳西妲1.jpg' },
      { thumb: '../../thumb/纳西妲2.jpg',  img: '../../img/纳西妲2.jpg' },
      { thumb: '../../thumb/纳西妲3.jpg',  img: '../../img/纳西妲3.jpg' },
      { thumb: '../../thumb/纳西妲4.jpg',  img: '../../img/纳西妲4.webp' },
      { thumb: '../../thumb/纳西妲5.jpg',  img: '../../img/纳西妲5.jpg' },
      { thumb: '../../thumb/纳西妲6.jpg',  img: '../../img/纳西妲6.jpg' },
      { thumb: '../../thumb/纳西妲7.jpg',  img: '../../img/纳西妲7.jpg' },
      { thumb: '../../thumb/纳西妲8.jpg',  img: '../../img/纳西妲8.jpg' },
      { thumb: '../../thumb/纳西妲9.jpg',  img: '../../img/纳西妲9.jpg' },
      { thumb: '../../thumb/纳西妲10.jpg', img: '../../img/纳西妲10.jpg' },
      { thumb: '../../thumb/纳西妲11.jpg', img: '../../img/纳西妲11.jpg' },
      { thumb: '../../thumb/纳西妲12.jpg', img: '../../img/纳西妲12.jpg' },
      { thumb: '../../thumb/纳西妲13.jpg', img: '../../img/纳西妲13.jpg' },
      { thumb: '../../thumb/纳西妲14.jpg', img: '../../img/纳西妲14.jpg' },
      { thumb: '../../thumb/纳西妲15.png', img: '../../img/纳西妲15.png' },
      { thumb: '../../thumb/纳西妲横屏.jpg', img: '../../img/纳西妲横屏.webp' },
      { thumb: '../../thumb/纳西妲横屏2.jpg', img: '../../img/纳西妲横屏2.jpg' }
    ],
    缇宝: [
      { thumb: '../../thumb/缇宝1.jpg', img: '../../img/缇宝1.jpg', name: '缇宝白丝' },
      { thumb: '../../thumb/缇宝2.jpg', img: '../../img/缇宝2.jpg', name: '缇宝普通' },
      { thumb: '../../thumb/缇宝3.jpg', img: '../../img/缇宝3.jpg', name: '缇宝裸体' },
      { thumb: '../../thumb/缇宝4.jpg', img: '../../img/缇宝4.jpg', name: '缇宝精液' },
      { thumb: '../../thumb/缇宝5.jpg', img: '../../img/缇宝5.jpg', name: '缇宝半裸精液' },
      { thumb: '../../thumb/缇宝6.jpg', img: '../../img/缇宝6.jpg', name: '缇宝半裸白丝' },
      { thumb: '../../thumb/缇宝7.jpg', img: '../../img/缇宝7.jpg', name: '缇宝半裸白丝精液' }
    ],
    昔涟: [
      { thumb: '../../thumb/昔涟1.jpg',  img: '../../img/昔涟1.png' },
      { thumb: '../../thumb/昔涟2.jpg',  img: '../../img/昔涟2.png' },
      { thumb: '../../thumb/昔涟3.jpg',  img: '../../img/昔涟3.png' },
      { thumb: '../../thumb/昔涟4.jpg',  img: '../../img/昔涟4.png' },
      { thumb: '../../thumb/昔涟5.jpg',  img: '../../img/昔涟5.png' },
      { thumb: '../../thumb/昔涟6.jpg',  img: '../../img/昔涟6.png' },
      { thumb: '../../thumb/昔涟7.jpg',  img: '../../img/昔涟7.png' },
      { thumb: '../../thumb/昔涟8.jpg',  img: '../../img/昔涟8.png' },
      { thumb: '../../thumb/昔涟9.jpg',  img: '../../img/昔涟9.png' },
      { thumb: '../../thumb/昔涟10.jpg', img: '../../img/昔涟10.png' },
      { thumb: '../../thumb/昔涟11.jpg', img: '../../img/昔涟11.png' },
      { thumb: '../../thumb/昔涟12.jpg', img: '../../img/昔涟12.png' },
      { thumb: '../../thumb/昔涟13.jpg', img: '../../img/昔涟13.png' },
      { thumb: '../../thumb/昔涟14.jpg', img: '../../img/昔涟14.png' },
      { thumb: '../../thumb/昔涟15.jpg', img: '../../img/昔涟15.png' },
      { thumb: '../../thumb/昔涟16.jpg', img: '../../img/昔涟16.png' },
      { thumb: '../../thumb/昔涟17.jpg', img: '../../img/昔涟17.png' },
      { thumb: '../../thumb/昔涟18.jpg', img: '../../img/昔涟18.png' },
      { thumb: '../../thumb/昔涟19.jpg', img: '../../img/昔涟19.png' }
    ],
    蓝砚: [
      { thumb: '../../thumb/蓝砚1.jpg', img: '../../img/蓝砚1.png' },
      { thumb: '../../thumb/蓝砚2.jpg', img: '../../img/蓝砚2.png' },
      { thumb: '../../thumb/蓝砚3.jpg', img: '../../img/蓝砚3.png' },
      { thumb: '../../thumb/蓝砚4.jpg', img: '../../img/蓝砚4.png' },
      { thumb: '../../thumb/蓝砚5.jpg', img: '../../img/蓝砚5.png' },
      { thumb: '../../thumb/蓝砚6.jpg', img: '../../img/蓝砚6.png' },
      { thumb: '../../thumb/蓝砚7.jpg', img: '../../img/蓝砚7.png' },
      { thumb: '../../thumb/蓝砚8.jpg', img: '../../img/蓝砚8.png' }
    ],
    风堇: [
      { thumb: '../../thumb/风堇1.jpg',  img: '../../img/风堇1.jpg' },
      { thumb: '../../thumb/风堇2.jpg',  img: '../../img/风堇2.jpg' },
      { thumb: '../../thumb/风堇3.jpg',  img: '../../img/风堇3.jpg' },
      { thumb: '../../thumb/风堇4.jpg',  img: '../../img/风堇4.jpg' },
      { thumb: '../../thumb/风堇5.jpg',  img: '../../img/风堇5.jpg' },
      { thumb: '../../thumb/风堇6.jpg',  img: '../../img/风堇6.jpg' },
      { thumb: '../../thumb/风堇7.jpg',  img: '../../img/风堇7.jpg' },
      { thumb: '../../thumb/风堇8.jpg',  img: '../../img/风堇8.jpg' },
      { thumb: '../../thumb/风堇9.jpg',  img: '../../img/风堇9.jpg' },
      { thumb: '../../thumb/风堇10.jpg', img: '../../img/风堇10.jpg' },
      { thumb: '../../thumb/风堇11.jpg', img: '../../img/风堇11.jpg' }
    ],
    流萤: [
      { thumb: '../../thumb/流萤1.jpg',  img: '../../img/流萤1.jpg' },
      { thumb: '../../thumb/流萤2.jpg',  img: '../../img/流萤2.jpg' },
      { thumb: '../../thumb/流萤3.jpg',  img: '../../img/流萤3.jpg' },
      { thumb: '../../thumb/流萤4.jpg',  img: '../../img/流萤4.jpg' },
      { thumb: '../../thumb/流萤5.jpg',  img: '../../img/流萤5.jpg' },
      { thumb: '../../thumb/流萤6.jpg',  img: '../../img/流萤6.jpg' },
      { thumb: '../../thumb/流萤7.jpg',  img: '../../img/流萤7.jpg' },
      { thumb: '../../thumb/流萤8.jpg',  img: '../../img/流萤8.jpg' },
      { thumb: '../../thumb/流萤9.jpg',  img: '../../img/流萤9.jpg' },
      { thumb: '../../thumb/流萤10.jpg', img: '../../img/流萤10.jpg' },
      { thumb: '../../thumb/流萤11.jpg', img: '../../img/流萤11.jpg' },
      { thumb: '../../thumb/流萤12.jpg', img: '../../img/流萤12.jpg' },
      { thumb: '../../thumb/流萤13.jpg', img: '../../img/流萤13.jpg' },
      { thumb: '../../thumb/流萤14.jpg', img: '../../img/流萤14.jpg' }
    ],
    哥伦比娅: [
      { thumb: '../../thumb/哥伦比娅1.jpg', img: '../../img/哥伦比娅1.jpg' },
      { thumb: '../../thumb/哥伦比娅2.jpg', img: '../../img/哥伦比娅2.jpg' },
      { thumb: '../../thumb/哥伦比娅3.jpg', img: '../../img/哥伦比娅3.jpg' },
      { thumb: '../../thumb/哥伦比娅4.jpg', img: '../../img/哥伦比娅4.jpg' },
      { thumb: '../../thumb/哥伦比娅5.jpg', img: '../../img/哥伦比娅5.jpg' },
      { thumb: '../../thumb/哥伦比娅6.jpg', img: '../../img/哥伦比娅6.jpg', name: '哥伦比娅白丝' },
      { thumb: '../../thumb/哥伦比娅7.jpg', img: '../../img/哥伦比娅7.jpg', name: '哥伦比娅半裸白丝' },
      { thumb: '../../thumb/哥伦比娅8.jpg', img: '../../img/哥伦比娅8.jpg', name: '哥伦比娅半裸白丝精液' },
      { thumb: '../../thumb/哥伦比娅9.jpg', img: '../../img/哥伦比娅9.jpg', name: '哥伦比娅半裸' },
      { thumb: '../../thumb/哥伦比娅10.jpg', img: '../../img/哥伦比娅10.jpg', name: '哥伦比娅半裸精液' },
      { thumb: '../../thumb/哥伦比娅13.jpg', img: '../../img/哥伦比娅13.jpg', name: '哥伦比娅全裸' },
      { thumb: '../../thumb/哥伦比娅11.jpg', img: '../../img/哥伦比娅11.jpg', name: '哥伦比娅全裸白丝' },
      { thumb: '../../thumb/哥伦比娅12.jpg', img: '../../img/哥伦比娅12.jpg', name: '哥伦比娅全裸白丝精液' }
    ]
  };
  function makePool(list) { return list.map(o => ({ thumb: o.thumb, img: o.img, name: o.name })); }

  window.addEventListener('DOMContentLoaded', () => {
    const bgBtn = document.getElementById('bgBtn');
    if (!bgBtn) return;

    /* 2. 创建 DOM 骨架 */
    const overlay = document.createElement('div');
    overlay.id = 'bgOverlay';
    overlay.innerHTML = `
      <div class="bgPanel">
        <div class="panelHeader">
          <h3>选择背景</h3>
          <div id="tabBar" class="tabBar"></div>
          <div class="indicator"></div>
        </div>
        <div id="scrollViewport" class="scrollViewport">
          <div id="scrollPad"><div id="visibleGrid"></div></div>
        </div>
        <button class="closeBtn">✕</button>
      </div>
    `;
    document.body.appendChild(overlay);

    /* 3. 生成标签 + 指示条 */
    const tabBar = overlay.querySelector('#tabBar');
    const indicator = overlay.querySelector('.indicator');
    const categories = Object.keys(BG_MAP);
    categories.forEach(cat => {
      const b = document.createElement('button');
      b.className = 'tab'; b.textContent = cat; b.dataset.cat = cat;
      tabBar.appendChild(b);
    });

    /* 4. 虚拟滚动参数 */
    const PER_ROW = window.innerWidth <= 600 ? 2 : 3;
    const ROW_H = 260, VISIBLE_ROWS = 5;
    let currentPool = [], currentRows = 0;

    const viewport = overlay.querySelector('#scrollViewport');
    const vGrid = overlay.querySelector('#visibleGrid');
    const scrollPad = overlay.querySelector('#scrollPad');

    /* 5. 创建格子（复用） */
    for (let i = 0; i < VISIBLE_ROWS * PER_ROW; i++) {
      const item = document.createElement('div');
      item.className = 'bgItem';
      vGrid.appendChild(item);
    }

    /* 6. 切换分类 */
    function switchCategory(cat) {
      currentPool = makePool(BG_MAP[cat]);
      currentRows = Math.ceil(currentPool.length / PER_ROW);
      scrollPad.style.height = currentRows * ROW_H + 'px';
      viewport.scrollTop = 0;
      updateVisible();
      /* 指示条移动 */
      const activeTab = tabBar.querySelector(`[data-cat="${cat}"]`);
      indicator.style.width = activeTab.offsetWidth + 'px';
      indicator.style.left = activeTab.offsetLeft + 'px';
      /* 高亮 */
      tabBar.querySelectorAll('.tab').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
    }

    /* 7. 虚拟滚动填充 */
    function updateVisible() {
      const st = viewport.scrollTop;
      const firstRow = Math.floor(st / ROW_H);
      vGrid.style.transform = `translateY(${firstRow * ROW_H}px)`;
      vGrid.querySelectorAll('.bgItem').forEach((node, idx) => {
        const poolIdx = firstRow * PER_ROW + idx;
        if (poolIdx < currentPool.length) {
          const src = currentPool[poolIdx].thumb;
          node.style.backgroundImage = `url(${src})`;
          node.dataset.bg = currentPool[poolIdx].img;
          const showName = currentPool[poolIdx].name || src.split('/').pop().replace(/\.(jpg|png|webp)/i,'');
          node.innerHTML = `<span class="name">${showName}</span>`;
          node.style.display = 'block';
        } else node.style.display = 'none';
      });
    }
    viewport.addEventListener('scroll', updateVisible);

    /* 8. 标签点击 */
    tabBar.addEventListener('click', e => {
      const btn = e.target.closest('.tab');
      if (btn) switchCategory(btn.dataset.cat);
    });

    /* 9. 缩略图点击 → 换背景 */
    vGrid.addEventListener('click', e => {
      const it = e.target.closest('.bgItem');
      if (!it || !it.dataset.bg) return;
      const bgVal = `url(${it.dataset.bg}) no-repeat center/cover fixed`;
      document.body.style.background = bgVal;
      localStorage.setItem('bgImage', bgVal);
      overlay.style.display = 'none';
    });

    /* 10. 长按背景按钮清除 */
    let pressTimer = null, clickLocked = false;
    const LONG_MS = 500, LOCK_MS = 500;
    bgBtn.addEventListener('mousedown', startPress);
    bgBtn.addEventListener('touchstart', startPress);
    ['mouseup','touchend','mouseleave','touchcancel'].forEach(ev => bgBtn.addEventListener(ev, cancelPress));
    function startPress(e) {
      e.preventDefault();
      pressTimer = setTimeout(() => {
        document.body.style.background = '';
        localStorage.removeItem('bgImage');
        overlay.style.display = 'none';
        clickLocked = true; setTimeout(() => clickLocked = false, LOCK_MS);
      }, LONG_MS);
    }
    function cancelPress(e) { e.preventDefault(); clearTimeout(pressTimer); pressTimer = null; if (!clickLocked) { overlay.style.display = 'flex'; if (!tabBar.querySelector('.active')) switchCategory('默认'); } }

    /* 11. 关闭按钮 & 遮罩点击 */
    overlay.querySelector('.closeBtn').addEventListener('click', () => overlay.style.display = 'none');
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.style.display = 'none'; });

    /* 12. 样式注入 */
    const style = document.createElement('style');
    style.textContent = `
    #bgOverlay{position:fixed;inset:0;background:rgba(0,0,0,.65);display:none;align-items:center;justify-content:center;z-index:9999;animation:fadeIn .3s ease}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    .bgPanel{width:90vw;height:80vh;background:rgba(255,255,255,.88);border-radius:20px;backdrop-filter:blur(12px);box-shadow:0 12px 40px rgba(0,0,0,.3);display:flex;flex-direction:column;overflow:hidden;animation:pop .3s ease}
    @keyframes pop{from{transform:scale(.95);opacity:0}to{transform:scale(1);opacity:1}}
    .panelHeader{padding:18px 24px 0}
    .panelHeader h3{margin:0 0 6px;text-align:center;font-size:20px;font-weight:600;color:#333}
    .tabBar{display:flex;gap:10px;position:relative}
    .tab{padding:8px 16px;border:none;border-radius:20px;background:rgba(0,0,0,.05);color:#555;font-size:14px;cursor:pointer;transition:all .25s}
    .tab.active{background:linear-gradient(135deg,#00c6ff 0%,#0072ff 100%);color:#fff;box-shadow:0 2px 8px rgba(102,126,234,.4)}
    .indicator{position:absolute;bottom:-6px;height:3px;border-radius:3px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);transition:all .3s ease}
    .scrollViewport{flex:1;overflow:auto;padding:0 24px 20px}
    #scrollPad{position:relative}
    #visibleGrid{position:absolute;top:0;left:0;width:100%;display:grid;grid-template-columns:repeat(${PER_ROW},1fr);gap:18px}
    .bgItem{height:340px;border-radius:16px;background-size:cover;background-position:center;cursor:pointer;transition:transform .3s ease,box-shadow .3s ease;overflow:hidden;position:relative}
    .bgItem::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.3);opacity:0;transition:opacity .3s}
    .bgItem:hover{transform:scale(1.05);box-shadow:0 8px 24px rgba(0,0,0,.25)}
    .bgItem:hover::before{opacity:1}
    .bgItem .name {position: absolute;left: 0; right: 0; bottom: 0;padding: 10px 12px;color: #fff;font-size: 20px;font-weight: 500;text-align: center;background: rgba(0,0,0,.5);text-shadow: 0 1px 2px rgba(0,0,0,.6);}

    .bgItem:hover .name{transform:translateY(0)}
    .closeBtn{position:absolute;top:18px;right:24px;width:32px;height:32px;border:none;border-radius:50%;background:rgba(0,0,0,.08);color:#555;font-size:18px;cursor:pointer;transition:all .25s}
    .closeBtn:hover{background:rgba(0,0,0,.15);transform:rotate(90deg)}
    `;
        document.head.appendChild(style);
    });


  /* ---------------- 刷新 & 翻页（与旧版完全一致，省略） ---------------- */
  window.addEventListener('DOMContentLoaded', () => {
    const refreshBtn = document.getElementById('refresh');
    if (refreshBtn) refreshBtn.addEventListener('click', () => { localStorage.setItem('bgImage', document.body.style.background); location.reload(); });
    const path = location.pathname;
    const match = path.match(/\/book\/(book\d+)\/(\d+)\.html$/);
    if (match) {
      const book = match[1]; let page = parseInt(match[2], 10);
      const totalPage = { book1: 179, book2: 120, book3: 98 };
      const max = totalPage[book] || 999;
      const prev = page > 1 ? `../${book}/${page - 1}.html` : null;
      const next = page < max ? `../${book}/${page + 1}.html` : null;
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      if (prevBtn && prev) { prevBtn.href = prev; prevBtn.addEventListener('click', e => { e.preventDefault(); localStorage.setItem('bgImage', document.body.style.background); location.href = prev; }); }
      if (nextBtn && next) { nextBtn.href = next; nextBtn.addEventListener('click', e => { e.preventDefault(); localStorage.setItem('bgImage', document.body.style.background); location.href = next; }); }
      document.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' && prev) location.href = prev; if (e.key === 'ArrowRight' && next) location.href = next; });
    }
  });
})();
// 配置
const CONFIG = {
    defaultTitle: '不用想滴网页',
    pageTitles: {
        'index.html': '不用想滴网页',
        'book-selection.html': '阅读中心',
        'links.html': '常用网站',
        'updates.html': '更新日志',
        'book-selection-another.html': '隐藏功能'
    }
};

// 侧边栏 HTML 内容（直接内嵌，避免加载问题）
const SIDEBAR_HTML = `
<nav class="top-nav">
    <button class="menu-btn" id="menuBtn">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <div class="nav-title" id="pageTitle">不用想滴网页</div>
    <div class="nav-version" id="navVersion">v2.0.0</div>
</nav>

<div class="sidebar-overlay" id="sidebarOverlay"></div>

<aside class="sidebar" id="sidebar">
    <div class="sidebar-section">
        <div class="sidebar-title">导航</div>
        <a href="index.html" class="sidebar-item" data-page="index">🏠 首页</a>
        <a href="book-selection.html" class="sidebar-item" data-page="book-selection">📚 阅读中心</a>
        <a href="links.html" class="sidebar-item" data-page="links">🔗 常用网站</a>
        <a href="updates.html" class="sidebar-item" data-page="updates">📝 更新日志</a>
    </div>

    <div class="sidebar-divider"></div>

    <div class="sidebar-section">
        <div class="sidebar-title">设置</div>
        <div class="theme-toggle" id="themeToggle">
            <span>🌙 深色模式</span>
            <div class="toggle-switch" id="toggleSwitch"><div class="toggle-slider"></div></div>
        </div>
        <button class="sidebar-item" id="versionBtn">ℹ️ 版本信息</button>
    </div>
</aside>

<div class="modal-overlay" id="versionModal">
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-icon">ℹ️</div>
            <div class="modal-title">版本信息</div>
        </div>
        <div class="modal-body">
            <div class="modal-row"><span>当前版本</span><span id="modalVersion">v2.0.0</span></div>
            <div class="modal-row"><span>最后更新</span><span id="updateDate">2026-03-21</span></div>
            <div class="modal-row"><span>系统状态</span><span style="color: #4ade80;">运行正常</span></div>
        </div>
        <button class="modal-close" id="closeModal">关闭</button>
    </div>
</div>
`;

// 获取当前页面文件名
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return filename;
}

// 获取页面标题
function getPageTitle() {
    const currentPage = getCurrentPage();
    return CONFIG.pageTitles[currentPage] || CONFIG.defaultTitle;
}

// 加载侧边栏（使用内嵌HTML，避免fetch问题）
function loadSidebar() {
    try {
        // 检查是否已加载
        if (document.querySelector('.top-nav')) {
            console.log('侧边栏已存在，跳过加载');
            initSidebarEvents();
            initTheme();
            loadVersion();
            return;
        }

        // 使用内嵌HTML
        const temp = document.createElement('div');
        temp.innerHTML = SIDEBAR_HTML;
        
        const body = document.body;
        const mainContent = document.querySelector('.main-content');
        
        // 获取所有侧边栏元素
        const elements = Array.from(temp.children);
        
        // 插入到 main-content 之前
        elements.forEach(el => {
            if (mainContent) {
                body.insertBefore(el, mainContent);
            } else {
                body.appendChild(el);
            }
        });
        
        // 设置当前页面标题
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) pageTitle.textContent = getPageTitle();
        
        // 高亮当前页面
        highlightCurrentPage();
        
        // 初始化
        setTimeout(() => {
            initSidebarEvents();
            initTheme();
            loadVersion();
        }, 0);
        
        console.log('侧边栏加载成功，菜单项:', document.querySelectorAll('.sidebar-item[data-page]').length);
        
    } catch (e) {
        console.error('加载侧边栏失败:', e);
    }
}

// 高亮当前页面
function highlightCurrentPage() {
    const currentPage = getCurrentPage().replace('.html', '');
    const items = document.querySelectorAll('.sidebar-item[data-page]');
    items.forEach(item => {
        if (item.dataset.page === currentPage) {
            item.classList.add('active');
        }
    });
}

// 初始化侧边栏事件
function initSidebarEvents() {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const themeToggle = document.getElementById('themeToggle');
    const versionBtn = document.getElementById('versionBtn');
    const versionModal = document.getElementById('versionModal');
    const closeModal = document.getElementById('closeModal');

    if (menuBtn) {
        menuBtn.onclick = function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            sidebar?.classList.toggle('open');
            sidebarOverlay?.classList.toggle('active');
        };
    }

    if (sidebarOverlay) {
        sidebarOverlay.onclick = function() {
            menuBtn?.classList.remove('active');
            sidebar?.classList.remove('open');
            this.classList.remove('active');
        };
    }

    if (themeToggle) {
        themeToggle.onclick = function(e) {
            e.preventDefault();
            toggleTheme();
        };
    }

    if (versionBtn) {
        versionBtn.onclick = function(e) {
            e.preventDefault();
            versionModal?.classList.add('active');
            menuBtn?.classList.remove('active');
            sidebar?.classList.remove('open');
            sidebarOverlay?.classList.remove('active');
        };
    }

    if (closeModal) {
        closeModal.onclick = function() {
            versionModal?.classList.remove('active');
        };
    }

    if (versionModal) {
        versionModal.onclick = function(e) {
            if (e.target === this) this.classList.remove('active');
        };
    }

    document.onkeydown = function(e) {
        if (e.key === 'Escape') {
            if (versionModal?.classList.contains('active')) {
                versionModal.classList.remove('active');
            } else if (sidebar?.classList.contains('open')) {
                menuBtn?.classList.remove('active');
                sidebar?.classList.remove('open');
                sidebarOverlay?.classList.remove('active');
            }
        }
    };
}

// 主题管理
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    const toggleSwitch = document.getElementById('toggleSwitch');
    const themeText = document.querySelector('#themeToggle span');
    
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch?.classList.add('active');
        if (themeText) themeText.textContent = '☀️ 浅色模式';
    }
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const toggleSwitch = document.getElementById('toggleSwitch');
    const themeText = document.querySelector('#themeToggle span');
    
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleSwitch?.classList.remove('active');
        if (themeText) themeText.textContent = '🌙 深色模式';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleSwitch?.classList.add('active');
        if (themeText) themeText.textContent = '☀️ 浅色模式';
    }
}

// 获取版本号
function getVersion() {
    if (typeof CURRENT_VERSION !== 'undefined') {
        return CURRENT_VERSION;
    }
    return 'v2.0.0';
}

// 获取最新更新日期
async function getLatestUpdateDate() {
    try {
        const response = await fetch('updates.html');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const firstCard = doc.querySelector('.update-item[data-date], .update-card[data-date]');
        if (firstCard) {
            return firstCard.getAttribute('data-date');
        }
        
        const firstDate = doc.querySelector('.update-date');
        if (firstDate) {
            const text = firstDate.textContent;
            const match = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
            if (match) {
                return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`;
            }
        }
    } catch (e) {
        console.log('无法获取更新日期:', e);
    }
    
    return new Date().toISOString().split('T')[0];
}

// 加载版本信息
async function loadVersion() {
    const ver = getVersion();
    const date = await getLatestUpdateDate();
    
    document.querySelectorAll('#navVersion').forEach(el => {
        if (el) el.textContent = ver;
    });
    
    const modalVersion = document.getElementById('modalVersion');
    if (modalVersion) modalVersion.textContent = ver;
    
    const updateDate = document.getElementById('updateDate');
    if (updateDate) updateDate.textContent = date;
}

// 初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSidebar);
} else {
    loadSidebar();
}
