export const NO_ALPHABET_REGEX_ALLOW_DOT = /^0$|^[1-9]\d*(\.\d+)?$|^0\.\d+$/;

export const NO_ALPHABET_NO_ZERO_REGEX = /^[1-9]\d*$/;

export const VALID_IPV4 =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const VALID_COORDINATE_REGEX =
  /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PHONE_NUMBER_REGEX =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im;
