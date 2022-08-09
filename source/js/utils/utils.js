import {body} from '../modules/data.js';

const getScrollWidth = () => {
  const div = document.createElement('div');
  body.append(div);

  const width = div.offsetWidth;

  div.style.position = 'fixed';
  div.style.width = '100vw';

  const widthWithScroll = div.offsetWidth;

  const scrollWidth = widthWithScroll - width;

  div.remove();
  return scrollWidth;
};

export {getScrollWidth};
