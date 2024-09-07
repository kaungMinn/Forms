import React, { useState, useRef, useEffect } from "react";

// icons
import { BiChevronDown, BiSearchAlt } from "react-icons/bi";
import SubLoadingIcon from "Assets/Gif/sub_loading.svg";

type PropsType = {
  idx?: number;
  optionList: any[];
  optionKey: string;
  defaultOption: string;
  selectedOption?: string | number;
  errorLabel?: string;
  isHaveBadge?: boolean;
  subBadge?: (key: any) => React.ReactNode;
  subBadgeOptionKey?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  /**
   * action
   */
  handleOnSelectOption: (option: any, idx?: number) => void;
};

const CustomizedDropDown: React.FC<PropsType> = (props) => {
  const {
    idx,
    optionList = [],
    optionKey = "",
    defaultOption = "",
    selectedOption,
    errorLabel = "",
    isHaveBadge = false,
    subBadge,
    subBadgeOptionKey = "",
    isSearchable = true,
    isLoading = false,
    /**
     * action
     */
    handleOnSelectOption,
  } = props;

  const ref = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<{
    textValue: string;
    searchValue: string;
  }>({
    textValue: "",
    searchValue: "",
  });

  /** Click outside of box - close box - wJR */
  useEffect(() => {
    const checkClickedOutside = (e: TouchEvent | MouseEvent) => {
      if (isOpen && ref.current && !ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickedOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="relative h-auto w-full"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {isLoading ? (
        <div className="flex w-full justify-center rounded-md border border-default_dark bg-transparent px-4 py-1.5 text-base_light">
          <img src={SubLoadingIcon} className="h-auto w-5" alt="Loading" />
        </div>
      ) : (
        <div
          className={`flex w-full items-center justify-between rounded-md border border-default_dark bg-transparent px-4 py-1.5 text-base_light laptop:cursor-pointer ${
            isOpen && "border-primary shadow-sm shadow-primary"
          } duration-200`}
          /**
           * action
           */
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selectedOption ? (
            <p className="secondary-font font-medium text-base_light">
              {selectedOption}
            </p>
          ) : (
            <p className="caption-font text-slate-400">{defaultOption}</p>
          )}
          <BiChevronDown
            className={`h-auto w-5 text-default_dark ${
              isOpen ? "rotate-180" : "rotate-0"
            } duration-200`}
          />
        </div>
      )}

      {isOpen && (
        <ul className="absolute left-0 top-10 z-10 max-h-60 w-full divide-default_dark overflow-y-auto rounded-md border border-default_dark bg-default_light text-base_light shadow-md">
          {isSearchable && (
            <div className="sticky top-0 border-b border-default_dark bg-default_light  py-2 shadow-md">
              <BiSearchAlt className="absolute left-2 top-3.5 h-auto w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="secondary-font placeholder:caption-font h-auto w-full bg-transparent px-8 outline-none placeholder:text-slate-400"
                value={inputValue.textValue}
                /**
                 * action
                 */
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue({
                    ...inputValue,
                    textValue: e.target.value,
                    searchValue: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
          )}
          <div className="divide-y">
            {optionList.length ? (
              optionList.map((option, index) => (
                <li
                  key={index}
                  className={`${
                    option[optionKey]
                      .toString()
                      ?.toLowerCase()
                      .startsWith(inputValue.searchValue)
                      ? "block"
                      : "hidden"
                  } ${
                    selectedOption === option[optionKey]
                      ? "bg-primary laptop:hover:bg-primary"
                      : "laptop:hover:bg-primary_light"
                  } px-7 py-2 laptop:cursor-pointer`}
                  /**
                   * action
                   */
                  onClick={() => {
                    setIsOpen(false);
                    handleOnSelectOption(option, idx);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <p
                      className={`secondary-font ${
                        selectedOption === option[optionKey]
                          ? "text-default"
                          : "text-base_light"
                      }`}
                    >
                      {option[optionKey]}
                    </p>
                    {isHaveBadge &&
                      subBadge &&
                      subBadge(option[subBadgeOptionKey])}
                  </div>
                </li>
              ))
            ) : (
              <p className="caption-font py-4 text-center text-slate-400">
                No data!
              </p>
            )}
          </div>
        </ul>
      )}
      {errorLabel && (
        <p className="caption-font font-medium text-danger"> {errorLabel} </p>
      )}
    </div>
  );
};

export default CustomizedDropDown;
