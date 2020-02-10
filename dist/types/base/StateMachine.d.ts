export default function StateMachine<IClass, IProperties, IReadonlyProperties>(klass: string): {
    [x: string]: (instance: IClass, properties: IReadonlyProperties) => void;
    getState: (instance: IClass) => any;
    setState: <P = IProperties>(instance: IClass, properties: P) => void;
    setHiddenState: <IHiddenProperties extends {}>(instance: IClass, properties: IHiddenProperties) => void;
};
