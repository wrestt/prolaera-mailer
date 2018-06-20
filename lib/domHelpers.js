import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const domPurify = createDOMPurify(window);

function setInnerHtml(string) {
  const clean = domPurify.sanitize(string);
  return { __html: clean };
}

export default setInnerHtml;
