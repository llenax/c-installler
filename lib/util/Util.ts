export class Utils {
  constructor() {}

  static objSize(obj: Object): number {
    var size = 0,
      key: any;
    for (key in obj) {
      if (key in obj) size++;
    }
    return size;
  }

  static removeStr(str: string, startIndex: number, count: number = 1): string {
    return str.substr(0, startIndex) + str.substr(startIndex + count);
  }
}
