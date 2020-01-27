// interface ITesting {
//   [index: number]: any;
// }

class Testing {
  private byIndex: string[] = ['Caleb', 'Clark'];
  private byName: {[name: string]: string } = [];

  constructor() {
    return new Proxy(this, this);
  }

  // @ts-ignore
  public get(target: any, prop: string | number) {
    console.log(prop, '-> ', target.hasOwnProperty(prop), target);
    return target.hasOwnProperty(prop) ? target[prop] : 'Clark';
  }

  public print() {
    return 'Caleb Clark';
  }

  [index: string | number]: any;
}

const testing = new Testing();

console.log('firstName: ', testing.firstName);
console.log('---------------------------------');
console.log(testing);

// console.log('lastName: ', testing.lastName);
