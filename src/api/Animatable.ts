import {
  IAnimatable,
  IAnimation,
  IKeyframe,
  IKeyframeAnimationOptions,
  IPropertyIndexedKeyframes,
} from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Animatable<TBase extends Constructor>(base: TBase) {
  return class extends base implements IAnimatable {
    public animate(
      _keyframes: IKeyframe[] | IPropertyIndexedKeyframes | null,
      _options?: number | IKeyframeAnimationOptions,
    ): IAnimation {
      throw new Error('Method not implemented.');
    }

    public getAnimations(): IAnimation[] {
      throw new Error('Method not implemented.');
    }
  };
}
