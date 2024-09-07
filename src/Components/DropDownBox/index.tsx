import React, { useState } from "react";

// images
import { BiChevronDown } from "react-icons/bi";

const DropDownBox = ({
  optionList = [],
  optionKey = "",
  defaultOption,
  isDisabled = false,
  errorMessage = "",
  icon,
  /**
   * action
   */
  handleChangeOnDropDown,
}: {
  optionList: any[];
  optionKey?: string;
  defaultOption: any;
  isDisabled?: boolean;
  errorMessage?: string;
  icon?: React.ReactElement;
  /**
   * action
   */
  handleChangeOnDropDown: (option: any) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkOptionKey = (optionKey: string, option: any) => {
    if (optionKey) return option[optionKey];

    return option.value;
  };

  return (
    <React.Fragment>
      <div className="relative h-auto w-full space-y-1">
        <button
          className="flex h-full w-full items-center justify-center space-x-2 rounded-lg
          border border-default_dark bg-transparent py-2 text-base_light shadow-sm duration-200 tablet:py-1.5"
          disabled={isDisabled}
          /**
           * action
           */
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-1">
            {icon}
            <p className="caption-font font-medium ">{defaultOption}</p>
          </div>
          <BiChevronDown
            className={`h-auto w-5 ${
              isOpen ? "rotate-180" : "rotate-0"
            } duration-300`}
          />
        </button>
        <div
          className={`absolute left-0 top-9 z-10 max-h-60 w-full space-y-2 overflow-y-auto rounded-lg border bg-default_light py-2.5 shadow-md ${
            isOpen ? "scale-100" : "scale-0"
          } duration-200`}
        >
          {optionList.length > 0 ? (
            optionList.map((option, index) => (
              <div
                key={index}
                className={`mx-1 cursor-pointer rounded-lg py-1 ${
                  defaultOption === checkOptionKey(optionKey, option)
                    ? "bg-primary text-default_light"
                    : "bg-transparent laptop:hover:bg-primary_light"
                }`}
                /**
                 * action
                 */
                onClick={() => {
                  handleChangeOnDropDown(option);
                  setIsOpen(false);
                }}
              >
                <p className="secondary-font text-center font-medium">
                  {checkOptionKey(optionKey, option)}
                </p>
              </div>
            ))
          ) : (
            <p className="caption-font text-center font-medium text-default_dark">
              No data!
            </p>
          )}
        </div>
        {errorMessage && (
          <p className="caption-font font-medium text-danger">{errorMessage}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default DropDownBox;
