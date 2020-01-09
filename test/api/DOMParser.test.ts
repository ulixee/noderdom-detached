import DOMParser from '../../src/api/DOMParser';

const domParser = new DOMParser();

describe('DOMParser', () => {
  it('should parse basic div', async () => {
    const document = domParser.parseFromString('<div>test</div>', 'text/html');
    expect(document.documentElement.innerHTML).toBe(
      '<body xmlns="http://www.w3.org/1999/xhtml"><div>test</div></body>',
    );
    expect(document.documentElement.outerHTML).toBe(
      '<html xmlns="http://www.w3.org/1999/xhtml"><body><div>test</div></body></html>',
    );
  });
});
