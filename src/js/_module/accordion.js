export function accordion() {
  // accordionボタンを取得
  const accordionSwitch = document.querySelectorAll('[aria-expanded]');
  // for IE
  const arr = Array.prototype.slice.call(accordionSwitch);

  // click event
  arr.forEach(function(elm) {
    elm.addEventListener('click', e => {

      // buttonを無効化
      e.preventDefault();

      // Controlコンテンツを取得
      const bodyId = elm.getAttribute('aria-controls');
      const body = document.querySelector('#' + bodyId);

      // Control元（複数）を取得
      const button = document.querySelectorAll('[aria-controls=' + bodyId + ']');
      // for IE
      const buttonArr = Array.prototype.slice.call(button);

      // 状態を判定
      const isVisible = elm.getAttribute('aria-expanded');

      // Controlコンテンツの状態切替
      body.setAttribute('aria-hidden', isVisible);

      // Control元の状態切替
      buttonArr.forEach(function(btn) {
        if(isVisible === 'true') {
          btn.setAttribute('aria-expanded', 'false');
        } else {
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  })
}
