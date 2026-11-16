(function () {
  var links = window.TRAMOS_PRODUCTS || {};
  // Botones de compra: pago directo (Stripe) si existe, Amazon como alternativa; si no hay ninguno, "Próximamente".
  var direct = window.TRAMOS_STRIPE || {};
  document.querySelectorAll('.buyslot[data-sku]').forEach(function (slot) {
    var sku = slot.getAttribute('data-sku'), p = links[sku] || {}, s = direct[sku];
    if (!s && !p.amazon) return;
    slot.innerHTML = '';
    if (s) {
      var b = document.createElement('a');
      b.className = 'btn btn-shell buy';
      b.href = s + (s.indexOf('?') < 0 ? '?' : '&') + 'locale=es';
      b.rel = 'noopener';
      b.textContent = 'Comprar';
      slot.appendChild(b);
    }
    if (p.amazon) {
      var a = document.createElement('a');
      a.className = s ? 'alt-buy' : 'btn btn-shell buy';
      a.href = p.amazon;
      a.rel = 'noopener';
      a.textContent = s ? 'o en Amazon' : 'Comprar en Amazon';
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
