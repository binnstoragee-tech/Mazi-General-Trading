(function () {
  var supportsVT = typeof document.startViewTransition === 'function';

  // Fallback rise-up on load (only needed where native View Transitions isn't supported)
  if (!supportsVT) {
    document.body.classList.add('page-enter');

    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href]');
      if (!a) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      var url;
      try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.hash) return; // in-page anchor jump

      e.preventDefault();
      document.body.classList.remove('page-enter');
      document.body.classList.add('page-leaving');
      setTimeout(function () { location.href = a.href; }, 170);
    });
  }
})();
