import isEmail from "validator/lib/isEmail";

export class Validator {
  public static isEmail = (email: string): boolean => isEmail(email);

  public static checkNullOrEmpty = (data: any | any[]): boolean => {
    if (data == null) return true;
    if (typeof data === "string") return data.trim() === "";
    if (Array.isArray(data))
      return data.some((item) => this.checkNullOrEmpty(item));
    return false;
  };
}
