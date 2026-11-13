(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var root = document.documentElement, btn = document.getElementById('theme-toggle');
  try { var t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
  if (btn) btn.addEventListener('click', function () {
    var dark = root.dataset.theme ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  var p = document.getElementById('print-btn');
  if (p) p.addEventListener('click', function () { window.print(); });
})();
