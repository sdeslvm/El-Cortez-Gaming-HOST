// Перехватываем возможные функции MarketJS
window.MarketJS = window.MarketJS || {};
MarketJS.showModal = function() { console.log('Modal blocked'); };
MarketJS.securityCheck = function() { return true; };
MarketJS.alert = function() { console.log('Alert blocked'); };

// Перехватываем стандартный alert (на всякий случай)
window.alert = function() { console.log('Alert blocked'); };

// Удаляем модалку из DOM, если она уже появилась
document.addEventListener('DOMContentLoaded', function() {
  const modals = document.querySelectorAll('.modal, [class*="modal"], [id*="modal"]');
  modals.forEach(modal => modal.remove());
});