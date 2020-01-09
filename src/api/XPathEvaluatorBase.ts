import { INode, IXPathEvaluatorBase, IXPathExpression, IXPathNSResolver, IXPathResult } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function XPathEvaluatorBase<TBase extends Constructor>(base: TBase) {
  return class extends base implements IXPathEvaluatorBase {
    public createExpression(_expression: string, _resolver?: IXPathNSResolver | null): IXPathExpression {
      throw new Error('Method not implemented.');
    }

    public createNSResolver(_nodeResolver: INode): IXPathNSResolver {
      throw new Error('Method not implemented.');
    }

    public evaluate(
      _expression: string,
      _contextNode: INode,
      _resolver?: IXPathNSResolver | null,
      _type?: number,
      _result?: IXPathResult | null,
    ): IXPathResult {
      throw new Error('Method not implemented.');
    }
  };
}
