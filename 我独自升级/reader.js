/* 我独自升级漫画阅读器 · 路径已适配当前文件夹 */
const total = 179;                       // 总页数（按实际改）
const curr = Number(new URLSearchParams(location.search).get('p')) || 1;
const page = document.getElementById('page');
const num  = document.getElementById('num');

function loadPage(n){
  page.classList.add('fade');
  setTimeout(()=>{
    page.src = `pdf/p${String(n).padStart(3,'0')}.pdf`;   // PDF 就在同目录 pdf/ 下
    num.textContent = `${n} / ${total}`;
    history.replaceState(null,null,`#p${n}`);
    page.classList.remove('fade');
  },220);
}

/* 按钮 */
document.getElementById('prev').onclick = () => { if(curr>1) loadPage(curr-1); };
document.getElementById('next').onclick = () => { if(curr<total) loadPage(curr+1); };
document.getElementById('top').onclick  = () => { window.scrollTo({top:0,behavior:'smooth'}); };

/* 键盘 */
document.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft'  && curr > 1)        loadPage(curr - 1);
  if(e.key === 'ArrowRight' && curr < total) loadPage(curr + 1);
});

/* 手机滑动 */
let startX = 0;
const minSwipe = 50;
document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if(Math.abs(dx) > minSwipe){
    if(dx > 0 && curr > 1)        loadPage(curr - 1);
    if(dx < 0 && curr < total) loadPage(curr + 1);
  }
});

loadPage(curr);
