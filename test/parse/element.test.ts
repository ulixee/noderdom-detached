import { DOMParser } from '../..';

describe('Element parse tests', () => {
  it('handles no attribute', () => {
    new DOMParser().parseFromString('<xml ></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml />', 'text/xml');
    new DOMParser().parseFromString('<xml/>', 'text/xml');
    new DOMParser().parseFromString('<xml/>', 'text/xml');
  });

  it('handles simple attributes', () => {
    new DOMParser().parseFromString('<xml a="1" b="2"></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml a="1" b="2" ></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml a="1" b=\'\'></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml a="1" b=\'\' ></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml a="1" b="2/">', 'text/xml');
    new DOMParser().parseFromString('<xml a="1" b="2" />', 'text/xml');
    new DOMParser().parseFromString('<xml  a="1" b=\'\'/>', 'text/xml');
    new DOMParser().parseFromString('<xml  a="1" b=\'\' />', 'text/xml');
  });

  it('handles namespaced attributes', () => {
    new DOMParser().parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3"></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3" ></xml>', 'text/xml');
    new DOMParser().parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3/">', 'text/xml');
    new DOMParser().parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3" />', 'text/xml');
  });
});
