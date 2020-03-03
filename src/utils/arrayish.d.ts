export declare function stringToUniqueArray(input: string): string[];
export declare function iterableIteratorForArray<T>(getArray: () => any[]): {
    next: () => {
        value: any;
        done: boolean;
    };
    [Symbol.iterator](): IterableIterator<T>;
};
export declare function createProxy(self: any): any;
interface IState<IItem> {
    items: IItem[];
    itemsByName?: Record<string, IItem>;
    exposeItemsBy: ('index' | 'name')[];
}
export declare function addToArrayish<IArrayish, IItem>(arrayish: IArrayish, state: IState<IItem>, itemsToAdd: IItem[], i?: number): void;
export declare function replaceInArrayish<IArrayish, IItem>(arrayish: IArrayish, state: IState<IItem>, newItem: IItem, oldItem: IItem): boolean;
export declare function removeFromArrayish<IArrayish, IItem>(arrayish: IArrayish, state: IState<IItem>, item: IItem): void;
export {};
