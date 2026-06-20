function showHeaderLogoWhenSize() {
  if (window.innerWidth < 480) { document.querySelector('img[sumiyoiLogo]').src = '/sumiyoi/assets/images/favicon.png'; }
  else { document.querySelector('img[sumiyoiLogo]').src = '/sumiyoi/assets/images/logo/dark.png'; }
}

function headerResize() {
  if (window.innerWidth < 480) { document.querySelector('img[sumiyoiLogo]').src = '/sumiyoi/assets/images/favicon.png'; }
  else { document.querySelector('img[sumiyoiLogo]').src = '/sumiyoi/assets/images/logo/dark.png'; }
}