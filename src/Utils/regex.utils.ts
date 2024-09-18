import {
  EMAIL_REGEX,
  NO_ALPHABET_NO_ZERO_REGEX,
  NO_ALPHABET_REGEX_ALLOW_DOT,
  PHONE_NUMBER_REGEX,
  VALID_COORDINATE_REGEX,
  VALID_IPV4,
} from "../Constants/regex";

export const isMeaningfullMoneyValue = (value: string) => {
  return NO_ALPHABET_REGEX_ALLOW_DOT.test(value);
};

export const isMeaningfullDuration = (value: string) => {
  return NO_ALPHABET_NO_ZERO_REGEX.test(value);
};

export const isMeaningfulIP = (value: string) => {
  return VALID_IPV4.test(value);
};

export const isMeaningfulCoordinate = (value: string) => {
  return VALID_COORDINATE_REGEX.test(value);
};

export const isMeaningfulEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const isMeaningfulPhoneNumber = (value: string) => {
  return PHONE_NUMBER_REGEX.test(value);
};
