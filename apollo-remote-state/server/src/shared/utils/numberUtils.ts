
export class NumberUtils {
  public static isANumber (num: any): boolean {
    return !isNaN(num);
  }
  
  public static isANonNegativeNumber (num?: any): boolean {
    return !isNaN(num) && num >= 0;
  }
}