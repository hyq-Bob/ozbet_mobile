// plugins/flexible.js

// import 'flexible';
(function () {
  console.log('可视宽度:  ', window.innerWidth);
  const fontSize = window.innerWidth / 7.5;
  document.documentElement.style.fontSize = fontSize + 'px';
  window.addEventListener('resize', function () {
    const fontSize = window.innerWidth / 7.5;
    document.documentElement.style.fontSize = fontSize + 'px';
  });
})(window)
