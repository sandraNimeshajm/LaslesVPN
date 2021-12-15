export const transform = (el, transformValue) => {
  el.style.webkitTransform = transformValue;
  el.style.msTransform = transformValue;
  el.style.transform = transformValue;
};

export const getTranslate = (el) => {
  const translate = {};
  if (!window.getComputedStyle) return;

  const style = getComputedStyle(el);
  const elTransform =
    style.transform || style.webkitTransform || style.mozTransform;

  let mat = elTransform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(', ')[13]);

  mat = elTransform.match(/^matrix\((.+)\)$/);
  translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
  translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;

  return translate;
};

export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end;
};

export const isMobile = () => {
  return (
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
};
