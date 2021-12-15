const counterUp = (el, options = {}) => {
  const { action = 'start', duration = 1000, delay = 16 } = options;

  if (action === 'stop') {
    stopCountUp(el);
    return;
  }

  stopCountUp(el);

  if (!/[0-9]/.test(el.innerHTML)) {
    return;
  }

  const nums = divideNumbers(el.innerHTML, {
    duration: duration || el.getAttribute('data-duration'),
    delay: delay || el.getAttribute('data-delay'),
  });

  el._countUpOrigInnerHTML = el.innerHTML;

  el.innerHTML = nums[0] || '&nbsp;';
  el.style.visibility = 'visible';

  const output = function () {
    el.innerHTML = nums.shift() || '&nbsp;';
    if (nums.length) {
      clearTimeout(el.countUpTimeout);
      el.countUpTimeout = setTimeout(output, delay);
    } else {
      el._countUpOrigInnerHTML = undefined;
    }
  };
  el.countUpTimeout = setTimeout(output, delay);
};

export default counterUp;

const stopCountUp = (el) => {
  clearTimeout(el.countUpTimeout);
  if (el._countUpOrigInnerHTML) {
    el.innerHTML = el._countUpOrigInnerHTML;
    el._countUpOrigInnerHTML = undefined;
  }
  el.style.visibility = '';
};

export const divideNumbers = (numToDivide, options = {}) => {
  const { duration = 1000, delay = 16 } = options;

  const divisions = duration / delay;

  const splitValues = numToDivide
    .toString()
    .split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/);

  const nums = [];

  for (let k = 0; k < divisions; k++) {
    nums.push('');
  }

  for (let i = 0; i < splitValues.length; i++) {
    if (
      /([0-9.][,.0-9]*[0-9]*)/.test(splitValues[i]) &&
      !/<[^>]+>/.test(splitValues[i])
    ) {
      let num = splitValues[i];

      const symbols = [...num.matchAll(/[.,]/g)]
        .map((m) => ({ char: m[0], i: num.length - m.index - 1 }))
        .sort((a, b) => a.i - b.i);

      num = num.replace(/[.,]/g, '');

      let k = nums.length - 1;

      for (let val = divisions; val >= 1; val--) {
        let newNum = parseInt((num / divisions) * val, 10);

        newNum = symbols.reduce((num, { char, i }) => {
          return num.length <= i
            ? num
            : num.slice(0, -i) + char + num.slice(-i);
        }, newNum.toString());

        nums[k--] += newNum;
      }
    } else {
      for (let k = 0; k < divisions; k++) {
        nums[k] += splitValues[i];
      }
    }
  }

  nums[nums.length] = numToDivide.toString();

  return nums;
};
