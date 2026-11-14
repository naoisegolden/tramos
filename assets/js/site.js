(function () {
  var links = window.TRAMOS_PRODUCTS || {};
  // Botones de compra: enlace de Amazon si existe, si no "Próximamente".
  document.querySelectorAll('.buyslot[data-sku]').forEach(function (slot) {
    var p = links[slot.getAttribute('data-sku')];
    if (p && p.amazon) {
      var a = document.createElement('a');
      a.className = 'btn btn-shell buy';
      a.href = p.amazon;
      a.rel = 'noopener';
      a.textContent = 'Comprar en Amazon';
      slot.innerHTML = '';
      slot.appendChild(a);
    }
  });
  // Filtro del catálogo en la portada.
  var grid = document.getElementById('grid');
  if (!grid) return;
  var heading = document.getElementById('cat-heading');
  var chips = document.querySelectorAll('.chip[data-filter]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter'), n = 0;
      chips.forEach(function (c) { var on = c === chip; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      grid.querySelectorAll('.pcard').forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-col') === f;
        card.hidden = !show; if (show) n++;
      });
      heading.textContent = (f === 'all' ? 'Todos los parches' : chip.textContent) + ' (' + n + ')';
    });
  });
})();
