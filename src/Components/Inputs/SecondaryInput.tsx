import React, { InputHTMLAttributes } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

interface SecondaryInputPropType extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  name: string;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  value: any;
  placeHolderText: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
  /**
   * action
   */
  handleChangeOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SecondaryInput: React.FC<SecondaryInputPropType> = ({
  type,
  id,
  name,
  inputRef,
  value,
  placeHolderText,
  isRequired,
  isDisabled,
  errorMessage,
  frontIcon,
  backIcon,
  /**
   * action
   */
  handleChangeOnInput,
}: SecondaryInputPropType) => {
  return (
    <div className="relative space-y-1">
      <input
        type={type}
        id={id}
        name={name}
        ref={inputRef}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        className={`placeholder:caption-font secondary-font peer h-auto w-full rounded-none border-b border-default_dark bg-transparent py-2 pl-8 focus:pl-2  ${
          backIcon ? "pr-10" : "pr-6"
        } text-base_light outline-none duration-300 placeholder:font-medium placeholder:text-slate-400 focus:border-primary ${
          errorMessage
            ? "focus:border-danger focus:shadow-danger"
            : "focus:border-primary  focus:shadow-primary"
        }`}
        placeholder={placeHolderText}
        /**
         * action
         */
        onChange={handleChangeOnInput}
      />
      {errorMessage && (
        <p className="caption-font ml-2 font-medium text-danger">
          {errorMessage}
        </p>
      )}
      {frontIcon && (
        <div className="absolute left-2 top-2 duration-100 peer-focus:scale-0">
          {frontIcon}
        </div>
      )}
      {backIcon && (
        <div className="absolute right-4 top-1.5 cursor-pointer">
          {backIcon}
        </div>
      )}
    </div>
  );
};

export default SecondaryInput;
