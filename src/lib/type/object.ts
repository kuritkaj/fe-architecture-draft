export type PropertyNamesMap<Type> = {
    [Property in keyof Type]: Property
};
