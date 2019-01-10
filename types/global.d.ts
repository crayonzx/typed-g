declare global {
  const toClass: <T extends FunctionType>(cls: T) => ToClassType<T>;

  type ToClassType<T extends FunctionType> = new (...args: ArgsType<T>) => T;

  type FunctionType = (...args: any[]) => any;
  type NewFunctionType = new (...args: any[]) => any;

  type ArgsType<T> = T extends (...args: infer U) => any
    ? U
    : T extends new (...args: infer U) => any
    ? U
    : [];

  type NewReturnType<T extends NewFunctionType> = T extends new (...args: any[]) => infer U
    ? U
    : any;

  type ProtoType<T> = T extends NewFunctionType ? NewReturnType<T> : T;

  type _Overwrite<T, U> = U extends null | undefined
    ? T
    : { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

  type _Overwrite2<T, U1, U2> = _Overwrite<_Overwrite<T, U1>, U2>;
  type _Overwrite3<T, U1, U2, U3> = _Overwrite<_Overwrite2<T, U1, U2>, U3>;
  type _Overwrite4<T, U1, U2, U3, U4> = _Overwrite<_Overwrite3<T, U1, U2, U3>, U4>;
  type _Overwrite5<T, U1, U2, U3, U4, U5> = _Overwrite<_Overwrite4<T, U1, U2, U3, U4>, U5>;
  type _Overwrite6<T, U1, U2, U3, U4, U5, U6> = _Overwrite<_Overwrite5<T, U1, U2, U3, U4, U5>, U6>;

  type Overwrite<
    T,
    U1,
    U2 = undefined,
    U3 = undefined,
    U4 = undefined,
    U5 = undefined,
    U6 = undefined
  > = _Overwrite6<T, U1, U2, U3, U4, U5, U6>;
}

export {};
