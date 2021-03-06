import { DOMParser } from '../..';
import DOMException from '../../src/api/DOMException';
import { IElement } from '../../base/interfaces';

describe('Attr tests', () => {
  it('set attribute', () => {
    const root = new DOMParser().parseFromString('<xml/>', 'text/xml').documentElement!;
    root.setAttribute('a', '1');

    expect(root.attributes[0].localName).toBe('a');

    root.setAttribute('b', '2');
    root.setAttribute('a', '1');
    root.setAttribute('a', '1');
    root.setAttribute('a', '1');

    expect(root.attributes).toHaveLength(2);
    expect(() => {
      const c = root.ownerDocument!.createElement('c');
      c.setAttributeNode(root.attributes.item(0)!);
    }).toThrow(DOMException); // .toHaveProperty('code', 10);
  });

  it('set ns attribute', () => {
    const doc = new DOMParser().parseFromString("<xml xmlns:a='a' xmlns:b='b' xmlns='e'><child/></xml>", 'text/xml');
    const root = doc.documentElement!;
    const child = root.firstChild as IElement;
    child.setAttributeNS('a', 'a:a', '1');
    child.setAttributeNS('b', 'b:b', '2');
    child.setAttributeNS('b', 'b:a', '1');

    expect(child.attributes).toHaveLength(3);

    child.setAttribute('a', '1');
    child.setAttributeNS('b', 'b:b', '2');

    expect(child.attributes).toHaveLength(4);

    expect(() => {
      const c = root.ownerDocument!.createElement('c');
      c.setAttributeNodeNS(root.attributes.item(0)!);
    }).toThrow(DOMException);
    // .that.has.property('code', 10);
  });

  it('override attribute', () => {
    const doc = new DOMParser().parseFromString("<xml xmlns:a='a' xmlns:b='b' xmlns='e'><child/></xml>", 'text/xml');
    const root = doc.documentElement!;
    root.setAttributeNS('a', 'a:a', '1');

    expect(root.attributes).toHaveLength(4);
  });

  it('attribute namespace', () => {
    const doc = new DOMParser().parseFromString("<xml xmlns:a='a' xmlns:b='b' a:b='e'></xml>", 'text/xml');
    const root = doc.documentElement!;

    expect(root.getAttributeNS('a', 'b')).toBe('e');
  });
});
