export class ArrayHelper {
  public createArrayByLength<T>(
    length: number,
    callback: (index: number) => T
  ): T[] {
    return Array.from({ length }, (_, index) => callback(index));
  }
}
