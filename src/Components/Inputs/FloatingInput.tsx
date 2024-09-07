import { useState, InputHTMLAttributes, KeyboardEvent } from "react";

interface FloatingInputPropType extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelIcon?: React.ReactNode;
  type: string;
  id: string;
  name: string;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  value: any;
  placeHolderText: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  backIcon?: React.ReactNode;
  errorMessage?: string;
  handleChangeOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnIcon: () => void;
  handleEnterKey?: (e: KeyboardEvent<HTMLImageElement>) => void;
}

const FloatingInput: React.FC<FloatingInputPropType> = ({
  labelText,
  labelIcon,
  type,
  id,
  name,
  inputRef,
  value,
  placeHolderText,
  isRequired = false,
  isDisabled = false,
  backIcon,
  errorMessage,
  handleChangeOnInput,
  handleClickOnIcon,
  handleEnterKey,
}: FloatingInputPropType) => {
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          ref={inputRef}
          value={value}
          required={isRequired}
          disabled={isDisabled}
          placeholder={`${placeHolderText}`}
          className="secondary-font peer block w-full appearance-none rounded-lg border border-gray-200 bg-transparent px-2.5 pb-2.5 pt-4 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          /**
           * action
           */
          onChange={(event) => handleChangeOnInput(event)}
          //@ts-ignore
          onKeyDown={(e) => handleEnterKey(e)}
        />
        <label
          htmlFor={id}
          className="secondary-font absolute left-1 top-0 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-3 text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          {name.toUpperCase()}
        </label>
        {backIcon && (
          <div
            className="absolute right-4 top-4 laptop:cursor-pointer"
            onClick={handleClickOnIcon}
          >
            {backIcon}
          </div>
        )}
      </div>
      {errorMessage && (
        <>
          <div className="col-span-3 tablet:col-span-1"></div>
          <div className="col-span-3 tablet:col-span-2">
            {errorMessage && (
              <p className="caption-font px-2 text-danger">{errorMessage}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

FloatingInput.defaultProps = {
  labelText: "",
  type: "text",
  id: "",
  name: "",
  inputRef: null,
  value: "",
  placeHolderText: "",
  isRequired: false,
  isDisabled: false,
  errorMessage: "",
  handleEnterKey(e) {
    return;
  },
};

export default FloatingInput;
