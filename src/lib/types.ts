export type ObjectValues<T> = T[keyof T];

export type UpTo<
  N extends number,
  A extends number[] = []
> = A["length"] extends N ? A[number] : UpTo<N, [...A, A["length"]]>;
