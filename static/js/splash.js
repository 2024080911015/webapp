// 两种退出条件：
// 1) DOM可用就开始展示内容
// 2) 最少停留 800ms，避免闪一下就没了

const MIN_SHOW_MS = 3000;
const start = performance.now();

function hideSplash() {
  const splash = document.getElementById("splash");
  const app = document.getElementById("app");

  // 显示主内容
  app.classList.remove("hidden");

  // 淡出开屏
  splash.classList.add("hide");
  setTimeout(() => splash.remove(), 400);
}

window.addEventListener("load", () => {
  const elapsed = performance.now() - start;
  const wait = Math.max(0, MIN_SHOW_MS - elapsed);
  setTimeout(hideSplash, wait);
});