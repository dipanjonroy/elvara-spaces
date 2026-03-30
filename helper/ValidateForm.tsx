const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

class ValidateForm {
  isEmpty(value: unknown): boolean {
    if (value === undefined || value === null) return true;
    if (typeof value === "string") return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;

    return false;
  }

  isEmail (value:string):boolean {
    return emailRegEx.test(value);
  }
}

const formHelper = new ValidateForm();

export const { isEmpty, isEmail } = formHelper;
