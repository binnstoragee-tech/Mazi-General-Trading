(function () {
  var MIN_VISIBLE_MS = 1500; // keep the loader on screen for at least 1.5s
  var startedAt = Date.now();

  function hideLoader() {
    var loader = document.getElementById('pageLoader');
    if (!loader) return;
    var elapsed = Date.now() - startedAt;
    var wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    setTimeout(function () {
      loader.classList.add('loader-hide');
      loader.addEventListener('transitionend', function remove() {
        loader.removeEventListener('transitionend', remove);
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      });
      // Safety fallback in case transitionend doesn't fire
      setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 700);
    }, wait);
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
  }

  // Hard safety cap: never let the loader block the page for more than 4s
  setTimeout(hideLoader, 4000);
})();
