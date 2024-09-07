import React, { InputHTMLAttributes } from "react";

interface PrimaryInputPropType extends InputHTMLAttributes<HTMLInputElement> {
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
  /**
   * action
   */
  handleChangeOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnIcon?: () => void;
  handleInputBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrimaryInput: React.FC<PrimaryInputPropType> = ({
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
  /**
   * action
   */

  handleChangeOnInput,
  handleClickOnIcon,
  handleInputBlur,
}: PrimaryInputPropType) => {
  return (
    <div className="z-0 grid grid-cols-3 gap-y-1 tablet:gap-x-4 tablet:gap-y-0">
      {labelText && (
        <div className="col-span-3 flex items-center justify-start space-x-2 tablet:col-span-1 tablet:justify-end">
          <label className="caption-font font-medium text-base_dark">
            {labelText}
            {isRequired && (
              <span className="caption-font text-danger"> ** </span>
            )}
          </label>
          {labelIcon && labelIcon}
        </div>
      )}
      <div
        className={`relative col-span-3 space-y-2 ${
          labelText && "tablet:col-span-2"
        }`}
      >
        <input
          type={type}
          id={id}
          name={name}
          ref={inputRef}
          value={value}
          required={isRequired}
          disabled={isDisabled}
          className={`placeholder:caption-font secondary-font h-auto w-full rounded-md border border-default_dark border-opacity-60 bg-transparent pl-4 pr-6 text-base_light shadow-sm placeholder:font-medium ${
            backIcon && "pr-12"
          } outline-none duration-300 placeholder:text-slate-400 focus:shadow-sm  ${
            errorMessage
              ? "focus:border-danger focus:shadow-danger"
              : "focus:border-primary  focus:shadow-primary"
          } py-1.5`}
          placeholder={placeHolderText}
          onBlur={handleInputBlur}
          /**
           * action
           */
          onChange={(event) => handleChangeOnInput(event)}
        />
        {backIcon && (
          <div
            className="absolute right-4 top-1 laptop:cursor-pointer"
            /**
             * action
             */
            onClick={handleClickOnIcon}
          >
            {backIcon}
          </div>
        )}
      </div>
      {errorMessage && (
        <>
          {labelText && <div className="col-span-3 tablet:col-span-1" />}
          <div className={`col-span-3 ${labelText && "tablet:col-span-2"} `}>
            {errorMessage && (
              <p className="caption-font px-2 text-danger"> {errorMessage} </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

PrimaryInput.defaultProps = {
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
};

export default PrimaryInput;
