// Tema claro/oscuro compartido: respeta la preferencia del sistema y recuerda la elección.
(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var dark = root.dataset.theme
        ? root.dataset.theme === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    });
  });
})();
