import DOMParser from '../../src/api/DOMParser';

describe('Simple parse tests', () => {
  it('simple', () => {
    const parser = new DOMParser();
    const s = '<html xmlns="http://www.w3.org/1999/xhtml"><body title="1<2"></body></html>';
    const doc = parser.parseFromString(s, 'text/html');
    expect(doc.documentElement.outerHTML).toBe(s.replace('<2', '&lt;2'));
  });

  // it('unclosedFix', () => {
  //   const parser = new DOMParser();
  //   const fileContents = '<r><Page><Label /></Page  <Page></Page></r>';
  //   let caughtError = false;
  //   try {
  //     parser.parseFromString(fileContents, 'text/xml');
  //   } catch (error) {
  //     caughtError = true;
  //   }
  //   expect(caughtError).toBeTruthy();
  // });
  //
  // it('test', () => {
  //   const parser = new DOMParser();
  //   const fileContents = '<Page><Label class="title"/></Page  1';
  //   let caughtError = false;
  //   try {
  //     parser.parseFromString(fileContents, 'text/xml');
  //   } catch (error) {
  //     caughtError = true;
  //   }
  //   expect(caughtError).toBeTruthy();
  // });
  //
  // it('svg test', () => {
  //   const svgCase = [
  //     '<svg>',
  //     '  <metadata>...</metadata>',
  //     '  <defs id="defs14">',
  //     '  <path id="path4" d="M 68.589358,...-6.363961,-6.363964 z" />',
  //     '  <path id="path4" d="M 68.589358,...-6.363961,-6.363964 z" /></defs>',
  //     '</svg>',
  //   ].join('\n');
  //   const parser = new DOMParser();
  //   const dom = parser.parseFromString(svgCase, 'text/xml');
  //   expect(dom.documentElement.outerHTML).toBe(svgCase.replace(/ \/>/g, '/>'));
  // });
});
