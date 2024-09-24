import { RefObject, useCallback, useState } from "react";
import { FilterDataTypes } from "./_types";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAppSelector } from "../Hooks/ReduxProvider";
import CustomizedDropDown from "../Components/DropDownBox/CustomizedDropDown";
import { FieldTypes } from "../Pages/Customer/List/_types";
import PrimaryInput from "../Components/Inputs/PrimaryInput";
import SecondaryButton from "../Components/Buttons/SecondaryButton";
import { valueFrequency } from "../Utils/Data/object.utils";

type filterTypes = {
  inputData: FilterDataTypes[];
  dataCenter: { [key: string]: string };
  errorCenter: { [key: string]: string };
  refCenter: { [key: string]: RefObject<HTMLInputElement> };
  fields: FieldTypes;
  /*
    Structures
  */
  childPassingStructure?: {
    [key: string]: (data: Record<string, unknown>) => void;
  };
  childCleaningStructure?: {
    [key: string]: string[];
  };
  /*
    Actions
  */
  updateDataCenter: (key: string, value: string) => void;
  updateErrorCenter: (key: string, value: string) => void;
  handleFilterData: () => void;
  handleReset: () => void;
};

const Filters = (props: filterTypes) => {
  const {
    inputData,
    errorCenter,
    dataCenter,
    refCenter,
    fields,
    childPassingStructure,
    childCleaningStructure,
    updateDataCenter,
    updateErrorCenter,
    handleFilterData,
    handleReset,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const theme = useAppSelector((state) => state.theme);
  const { primaryColor } = theme;
  const [primaryBg, primaryText] = primaryColor;

  const inputGenerator = useCallback(() => {
    if (inputData.length <= 0) return <>Add InputData</>;

    return (
      <>
        {inputData.map((data) => {
          const {
            id,
            type,
            label,
            dataCenterKey,
            dataKey,
            placeHolderText,
            hasSearch,
            parent,
          } = data;
          if (data.type === "dropdown") {
            const dropdownData = fields[dataCenterKey as keyof FieldTypes];
            return (
              <div key={id}>
                <CustomizedDropDown
                  label={label}
                  dropDownData={dropdownData}
                  dataKey={dataKey}
                  dataCenterKey={dataCenterKey}
                  value={dataCenter[dataCenterKey] || placeHolderText}
                  errorMessage={errorCenter[dataCenterKey]}
                  childPassingStructure={childPassingStructure}
                  childCleaningStructure={childCleaningStructure}
                  updateDataCenter={updateDataCenter}
                  updateErrorCenter={updateErrorCenter}
                  theme={theme}
                  hasSearch={hasSearch}
                  isDisabled={dropdownData.length <= 0}
                />
              </div>
            );
          } else if (data.type === "datetime-local") {
            return (
              <div key={id}>
                <PrimaryInput
                  label={label}
                  type={type}
                  value={dataCenter[dataCenterKey]}
                  inputRef={refCenter[dataCenterKey]}
                  placeHolderText={placeHolderText}
                  name={dataCenterKey}
                  theme={theme}
                  updateDataCenter={updateDataCenter}
                  updateErrorCenter={updateErrorCenter}
                  errorMessage={errorCenter[dataCenterKey]}
                  isDisabled={dataCenter[parent || ""] === ""}
                />
              </div>
            );
          }
        })}
      </>
    );
  }, [
    inputData,
    theme,
    dataCenter,
    updateDataCenter,
    fields,
    childCleaningStructure,
    childPassingStructure,
    refCenter,
    errorCenter,
    updateErrorCenter,
  ]);

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <div className="w-20 relative">
          <div className="border bg-default rounded-full absolute w-4 caption-font flex items-center justify-center shadow-md -right-1 -top-1">
            {valueFrequency(dataCenter)}
          </div>
          <PrimaryButton
            label="Filters"
            handleClickOn={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm w-screen h-screen z-[55] "></div>
      )}

      <div
        className={` fixed top-1/2 -translate-y-1/2 w-screen laptop:w-[30rem] laptop:h-screen overflow-auto p-8 duration-200 z-[56] ${primaryBg} ${primaryText} ${
          isOpen ? "right-0" : "-right-[30rem]"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <h3>Filters</h3>
          <IoCloseCircleOutline
            size={20}
            className="cursor-pointer hover:rotate-90 duration-200"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <hr className="mb-3" />

        {inputGenerator()}

        <div className="flex justify-between">
          <div className="w-32">
            <SecondaryButton label="Clear" handleClickOn={handleReset} />
          </div>
          <div className="w-32">
            <PrimaryButton
              label="Filter"
              handleClickOn={() => {
                handleFilterData();
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
